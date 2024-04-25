const bancodedados = require('../bancodedados');

const listarContasBancarias = (req, res) => {
    const senhaBanco = req.query.senha_banco;

    if (!senhaBanco) {
        return res.status(400).json({ mensagem: "A senha do banco deve ser informada." });
    }
    if (senhaBanco !== 'Cubos123Bank') {
        return res.status(401).json({ mensagem: "A senha do banco informada é inválida." });
    }
    res.status(200).json(bancodedados.contas);
};

const criarContaBancaria = (req, res) => {
    const { nome, cpf, dataNascimento, telefone, email, senha } = req.body;

    try {

        if (!nome || !cpf || !dataNascimento || !telefone || !email || !senha) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
        }

        const contaExistenteCpf = bancodedados.contas.find(conta => conta.usuario.cpf === cpf);
        const contaExistenteEmail = bancodedados.contas.find(conta => conta.usuario.email === email);

        if (contaExistenteCpf || contaExistenteEmail) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com o cpf ou e-mail informado.' });
        }

        const novaConta = {
            conta: bancodedados.contas.length + 1,
            saldo: 0,
            usuario: {
                nome,
                cpf,
                dataNascimento,
                telefone,
                email,
                senha
            }
        };

        bancodedados.contas.push(novaConta);

        return res.status(201).json(novaConta);

    } catch (erro) {
        console.error('Erro:', erro);
        return res.status(500).json('Erro do servidor');
    }
};

const atualizarUsuarioContaBancaria = (req, res) => {
    const numeroConta = req.params.numeroConta;
    const { nome, cpf, dataNascimento, telefone, email, senha } = req.body;

    try {

        if (!nome || !cpf || !dataNascimento || !telefone || !email || !senha) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
        }

        const conta = bancodedados.contas.find(conta => conta.conta === Number(numeroConta));

        if (!conta) {
            return res.status(404).json({ mensagem: 'Conta bancária não encontrada.' });
        }

        const contaExistenteCpf = bancodedados.contas.find(conta => conta.usuario.cpf === cpf && conta.conta !== Number(numeroConta));

        if (contaExistenteCpf) {
            return res.status(400).json({ mensagem: 'O CPF informado já existe cadastrado.' });
        }

        const contaExistenteEmail = bancodedados.contas.find(conta => conta.usuario.email === email && conta.conta !== Number(numeroConta));

        if (contaExistenteEmail) {
            return res.status(400).json({ mensagem: 'O E-mail informado já existe cadastrado.' });
        }

        const indexConta = bancodedados.contas.findIndex(conta => conta.conta === Number(numeroConta));

        bancodedados.contas[indexConta].usuario = {
            nome,
            cpf,
            dataNascimento,
            telefone,
            email,
            senha
        };

        return res.status(204).send();

    } catch (erro) {
        console.error('Erro:', erro);
        return res.status(500).json({ mensagem: 'Erro do servidor' });
    }
};

const excluirContaBancaria = (req, res) => {
    const { numeroConta } = req.params;

    try {
        const contaIndex = bancodedados.contas.findIndex(conta => {
            return String(conta.conta) === String(numeroConta);
        });

        if (contaIndex === -1) {
            return res.status(404).json({ mensagem: "Conta bancária não encontrada." });
        }

        const saldo = bancodedados.contas[contaIndex].saldo;

        if (saldo !== 0) {
            return res.status(400).json({ mensagem: "A conta só pode ser removida se o saldo for zero." });
        }

        bancodedados.contas.splice(contaIndex, 1);

        return res.status(204).send();

    } catch (error) {
        console.error('Erro ao excluir conta bancária:', error);
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = {
    listarContasBancarias,
    criarContaBancaria,
    atualizarUsuarioContaBancaria,
    excluirContaBancaria
};