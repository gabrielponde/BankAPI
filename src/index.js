const express = require('express');
const contaRotas = require('../src/rotas/contaRotas');
const transacaoRotas = require('../src/rotas/transacaoRotas');

const app = express();

app.use(express.json());

app.use(contaRotas);
app.use(transacaoRotas);

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`)
});