/*

Alguns CPFs válidos para teste
893.083.970-35
778.848.800-32
929.508.050-51
694.567.900-45
315.465.360-00
O script deve ser executado com o seguinte comando:
node cadastrarPessoa [cpf] [nomeDaPessoa]
[x] Ele deve testar se o CPF é válido.
[x] Também deve verificar se o nome da pessoa foi digitado.
Caso esteja tudo ok,
 - Criar um objeto contendo os dados da pessoa
 - Importar o array de pessoas presente em pessoas.json
 - Adicionar a nova pessoa ao final do array de pessoas
 - Salvar esse array de volta no arquivo pessoas.json


1 - Importar o array de pessoas.json para uma variável pessoas
2 - Criar um objeto literal com dados da pessoa:
     let pessoa = {nome: nomeDigitado, cpf: cpfDigitado}
3 - Adicionar o objeto pessoa ao array de pessoas
4 - Salvar o array de pessoas no arquivo pessoas.json
    Dicas:
      fs.writeFileSync para escrever no arquivo
      JSON.stringify para transformar o array pessoas numa string json


*/

const cpf = require("cpf");
const salvarCpfJson = require('./functions/salvarCpfJson')

const cpfDigitado = process.argv[2];
const nomeDigitado = process.argv[3];

if (cpfDigitado == undefined || nomeDigitado == undefined) {
  console.error("ERRO: Dados não informados. Infome o CPF + Nome");
  process.exit(); // Interrompe o script
}

const eValido = cpf.isValid(cpfDigitado);

if (!eValido) {
  console.error("ERRO: Informe um CPF válido");
  process.exit();
}



salvarCpfJson(cpfDigitado, nomeDigitado);

