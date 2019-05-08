// dentro de classe não usa LET ou CONST 
// para declarar variável se coloca this.
// este é o OBJETO (class)  
// O construtor serve para pegar os dados
class Pessoa {
    // parametro CPF que não sei o valor, então NULL
    constructor(cpf, nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não possui';
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`);
    }
}

// Instanciando uma CLASSE
// Estas variáveis são diferentes, mas com o mesmo conteúdo
// Colocar os dados na mesma ordem que está no CONSTRUCTOR
const pessoa = new Pessoa ('444.444.444-44', 'Vinicius', 24);
const pessoaSangue = new Pessoa (null, 'Ygor', 14);