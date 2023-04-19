const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/biblioteca';
const db = mongoose.connect(url);

mongoose.connection.on('connected', ()=> console.log("Connectado ao mongoodb"));
mongoose.connection.on('erro', (err)=> console.log("Erro" + err));

module.export = db;
