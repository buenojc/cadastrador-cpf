// 1 - Capturar o CPF digitado
const cpfDigitado = process.argv[2]

// 2 - Verificar a validade do CPF
const cpf = require('cpf')
const eValido = cpf.isValid(cpfDigitado)

if(cpfDigitado == undefined){
    console.log('ERRO: Informe um CPF válido')
    return
}

if(eValido){
    //  Importar a função salvarCpf
    const salvarCpf = require('./functions/salvarCpf')
    salvarCpf(cpfDigitado)
   

}else{
    //  2b - Se não for válido, emitir mensagem de erro
    console.error(`ERRO: O ${cpfDigitado} não é válido`)

}

