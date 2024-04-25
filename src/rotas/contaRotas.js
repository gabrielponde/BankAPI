const express = require('express');
const contaController = require('../controladores/contaController');

const rotas = express();

rotas.get('/contas', contaController.listarContasBancarias);
rotas.post('/contas', contaController.criarContaBancaria);
rotas.put('/contas/:numeroConta/usuario', contaController.atualizarUsuarioContaBancaria);
rotas.delete('/contas/:numeroConta', contaController.excluirContaBancaria);

module.exports = rotas; 
