// Boa prática - nomear o arquivo com o nome da classe

// dentro de classe não usa LET ou CONST 
// para declarar variável se coloca this.
// este é o OBJETO (class)  
// O construtor serve para pegar os dados
class Pessoa {
    // parametro CPF que não sei o valor, então NULL
    constructor(cpf, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cpf = cpf || 'Não possui';
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `Sexo: ${this.sexo}`);
    }

    // esse método (dentro da classe) pode receber vários atributos
    // função quando é fora da classe
    compararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(`${this.nome} é do sexo masculino.`)
        } else {
            console.log(`${this.nome} é do sexo feminino.`)
        }
    }

    maiorIdade() {
        if (this.idade >= 18) {
            return true;
        } else {
            return false;
        }
    }
}

// Instanciando uma CLASSE
// Estas variáveis são diferentes, mas com o mesmo conteúdo
// Colocar os dados na mesma ordem que está no CONSTRUCTOR
const pessoa = new Pessoa('444.444.444-44', 'Vinicius', 24, 'M');
const pessoaSangue = new Pessoa(null, 'Ygor', 14, 'M');
const p1 = new Pessoa(null, 'Patty', 27, 'F');

// Chamando/executando um método
pessoa.compararSexo()
p1.compararSexo()

if (pessoa.maiorIdade()) {
    console.log(`${pessoa.nome} é maior de idade.`)
} else {
    console.log(`${pessoa.nome} é menor de idade.`)
}