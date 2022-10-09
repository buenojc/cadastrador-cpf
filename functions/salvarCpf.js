const fs = require('fs')
const arquivo = 'historico-de-cpfs.txt'

function salvarCpf( cpf ){
    fs.appendFileSync(`./${arquivo}`, cpf + '\n')
    console.log('CPF salvo')
}

module.exports = salvarCpf