const bancodedados = require('../bancodedados');
const { format } = require('date-fns');

const depositar = (req, res) => {
    const { numeroConta, valor } = req.body;
    const data = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

    try {
        if (!numeroConta || !valor) {
            return res.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios." });
        }

        const conta = bancodedados.contas.find(conta => conta.conta.toString() === numeroConta.toString());

        if (!conta) {
            return res.status(404).json({ mensagem: "Conta bancária não encontrada." });
        }

        if (valor <= 0) {
            return res.status(400).json({ mensagem: "O valor do depósito deve ser maior que zero." });
        }

        conta.saldo += valor;
        bancodedados.depositos.push({
            data,
            numeroConta,
            valor
        });

        return res.status(201).send();

    } catch (error) {
        console.error('Erro ao processar o depósito:', error);
        return res.status(500).json({ mensagem: "Ocorreu um erro ao processar o depósito." });
    }
};

const sacar = (req, res) => {
    const { numeroConta, valor, senha } = req.body;
    const data = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

    try {

        if (!numeroConta || !valor || !senha) {
            return res.status(400).json({ mensagem: "O número da conta, o valor e a senha são obrigatórios." });
        }

        const conta = bancodedados.contas.find(conta => conta.conta.toString() === numeroConta.toString());
        if (!conta) {
            return res.status(404).json({ mensagem: "Conta bancária não encontrada." });
        }
        if (senha !== conta.usuario.senha) {
            return res.status(401).json({ mensagem: "Senha incorreta." });
        }
        if (valor <= 0) {
            return res.status(400).json({ mensagem: "O valor do saque deve ser maior que zero." });
        }
        if (conta.saldo < valor) {
            return res.status(400).json({ mensagem: "Saldo insuficiente." });
        }

        conta.saldo -= valor;
        bancodedados.saques.push({
            data,
            numeroConta,
            valor
        });


        return res.status(204).send();

    } catch (error) {
        console.error('Erro ao processar o saque:', error);
        return res.status(500).json({ mensagem: "Ocorreu um erro ao processar o saque." });
    }
};


const transferir = (req, res) => {
    const { numeroContaOrigem, numeroContaDestino, valor, senha } = req.body;
    const data = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

    try {

        if (!numeroContaDestino || !numeroContaDestino || !valor || !senha) {
            return res.status(400).json({ mensagem: "Os números das contas, o valor e a senha são obrigatórios." });
        }

        const contaOrigem = bancodedados.contas.find(conta => conta.conta.toString() === numeroContaOrigem.toString());
        const contaDestino = bancodedados.contas.find(conta => conta.conta.toString() === numeroContaDestino.toString());

        if (!contaOrigem || !contaDestino) {
            return res.status(404).json({ mensagem: "Conta bancária de origem ou destino não encontrada." });
        }
        if (senha !== contaOrigem.usuario.senha) {
            return res.status(401).json({ mensagem: "Senha incorreta." });
        }
        if (valor <= 0) {
            return res.status(400).json({ mensagem: "O valor da transferência deve ser maior que zero." });
        }
        if (contaOrigem.saldo < valor) {
            return res.status(400).json({ mensagem: "Saldo insuficiente para realizar a transferência." });
        }

        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;

        bancodedados.transferencias.push({
            data,
            numeroContaOrigem,
            numeroContaDestino,
            valor
        });

        return res.status(204).send();

    } catch (error) {
        console.error('Erro ao processar a transferência:', error);
        return res.status(500).json({ mensagem: "Ocorreu um erro ao processar a transferência." });
    }
};

const saldo = (req, res) => {
    const { numeroConta, senha } = req.body;

    try {

        if (!numeroConta || !senha) {
            return res.status(400).json({ mensagem: "Número da conta e senha são obrigatórios." });
        }

        const conta = bancodedados.contas.find(conta => conta.conta.toString() === numeroConta.toString());

        if (!conta) {
            return res.status(404).json({ mensagem: "Conta bancária não encontrada." });
        }
        if (senha !== conta.usuario.senha) {
            return res.status(401).json({ mensagem: "Senha incorreta." });
        }

        return res.status(200).json({ saldo: conta.saldo });

    } catch (error) {
        console.error('Erro ao obter saldo:', error);
        return res.status(500).json({ mensagem: "Ocorreu um erro ao obter o saldo." });
    }
};

const extrato = (req, res) => {
    const { numeroConta, senha } = req.body;

    try {

        if (!numeroConta || !senha) {
            return res.status(400).json({ mensagem: "Número da conta e senha são obrigatórios." });
        }

        const conta = bancodedados.contas.find(conta => conta.conta.toString() === numeroConta.toString());

        if (!conta) {
            return res.status(404).json({ mensagem: "Conta bancária não encontrada." });
        }
        if (senha !== conta.usuario.senha) {
            return res.status(401).json({ mensagem: "Senha incorreta." });
        }

        const depositos = bancodedados.depositos.filter(deposito => deposito.numeroConta === numeroConta);
        const saques = bancodedados.saques.filter(saque => saque.numeroConta === numeroConta);
        const transferenciasEnviadas = bancodedados.transferencias.filter(transferencia => transferencia.numeroContaOrigem === numeroConta);
        const transferenciasRecebidas = bancodedados.transferencias.filter(transferencia => transferencia.numeroContaDestino === numeroConta);

        const extrato = {
            depositos,
            saques,
            transferenciasEnviadas,
            transferenciasRecebidas
        };

        return res.status(200).json(extrato);

    } catch (error) {
        console.error('Erro ao obter extrato:', error);
        return res.status(500).json({ mensagem: "Ocorreu um erro ao obter o extrato." });
    }
};

module.exports = {
    depositar,
    sacar,
    transferir,
    saldo,
    extrato
}; 