const fs = require('fs')
const pessoas = require('../pessoas.json')

function salvarCpfJson( cpf, nome ){
    
    const pessoa = {
        nome: nome,
        cpf: cpf,
      };
    pessoas.push(pessoa)
    fs.writeFileSync('./pessoas.json', JSON.stringify(pessoas))
    console.log("Usuário Salvo.");

}

module.exports = salvarCpfJson