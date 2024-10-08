const express = require('express')
const server = express()
const bodyParser = require('body-parser')
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static('barberprojeto'));
server.use(express.json()) //Possibilidade de usar JSON

server.use(bodyParser.urlencoded({ extended: true }))

//EXemplo GET
server.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'barberprojeto/index.html'))
})
server.get('/agendamento', (req, res) => {
    res.sendFile(path.join(__dirname, 'barberprojeto/agendamento.html'))
})
server.get('/minha_conta', (req, res) => {
    res.sendFile(path.join(__dirname, 'barberprojeto/minha_conta.html'))
})

server.listen(3000, () => {
    console.log("servidor no ar...")
})