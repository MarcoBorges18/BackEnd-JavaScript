require('./db/mongo');
const express = require("express");
const server = express();
server.use(express.json());

const usuarioRouter = require('./routes/usuarioRouter');
server.use('/usuarios', usuarioRouter);

const livroRouter = require('./routes/livroRouter');
server.use('/livros', livroRouter);

const editoraRouter = require('./routes/editoraRouter');
server.use('/editoras', editoraRouter);

const autorRouter = require('./routes/autorRouter');
server.use('/autores', autorRouter);

const emprestimoRouter = require('./routes/emprestimoRouter');
server.use('/emprestimos', emprestimoRouter);

server.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
    console.log("oi");
});
