const fs = require('fs')
const pessoas = require('../pessoas.json')

function salvarCpfJson( pessoa ){
    pessoas.push(pessoa)
    fs.writeFileSync('./pessoas.json', JSON.stringify(pessoas))
    console.log("Usuário Salvo.");

}

module.exports = salvarCpfJson