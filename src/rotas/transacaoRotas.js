const express = require('express');
const transacaoController = require('../controladores/transacaoController');

const rotas = express();

rotas.post('/transacoes/depositar', transacaoController.depositar);
rotas.post('/transacoes/sacar', transacaoController.sacar);
rotas.post('/transacoes/transferir', transacaoController.transferir);
rotas.get('/contas/saldo', transacaoController.saldo);
rotas.get('/contas/extrato', transacaoController.extrato);

module.exports = rotas;