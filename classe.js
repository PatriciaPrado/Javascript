// Boa prática - nomear o arquivo com o nome da classe

// dentro de classe não usa LET ou CONST 
// para declarar variável se coloca this.
// este é o OBJETO (class)  
// O construtor serve para pegar os dados
class Pessoa {
    // parametro CPF que não sei o valor, então NULL
    constructor(cpf = null, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cpf = cpf || 'Não possui';
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `Sexo: ${this.sexo}`);
    }

    // esse método (dentro da classe) pode receber vários atributos
    // função quando é fora da classe
    // método não estático com retorno void 
    compararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(`${this.nome} é do sexo masculino.`)
        } else {
            console.log(`${this.nome} é do sexo feminino.`)
        }
    }

    // método não estático com retorno
    maiorIdade() {
        if (this.idade >= 18) {
            return true;
        } else {
            return false;
        }
    }

    // método => característica = ESTÁTICO que é o retorno é void
    // não precisa instanciar, mas se não estiver estanciado tem que setar
    static exemplo(sexo){
        console.log(sexo)
        if ( sexo == 'M'){
            console.log(`${this.nome} é do sexo masculino.`)
        } else {
            console.log(`${this.nome} é do sexo feminino.`)
        }
    }

    static verificaNome(nome){
        if(nome.toUpperCase() == nome){
            return true;
        } else {
            return false
        }
    }
}

// Instanciando (criando) uma CLASSE (= um novo objeto)
// encapsulamento ou abstração - criar um objeto
// instanciar é colocar NEW
// Estas variáveis são diferentes, mas com o mesmo tipo de conteúdo
// Colocar os dados na mesma ordem que está no CONSTRUCTOR
//  vinicius é variável (tipo objeto) do tipo Pessoa (que é uma classe)
const vinicius = new Pessoa('444.444.444-44', 'Vinicius', 24, 'M');
const pessoaSangue = new Pessoa(null, 'Ygor', 14, 'M');
const p1 = new Pessoa(null, 'Patty', 27, 'F');

// Chamando/executando um método não estático
// variável.método
vinicius.compararSexo()
p1.compararSexo()


// Este é um método estático, não precisa instanciar o objeto
// classe.método
Pessoa.exemplo();


if(!Pessoa.verificaNome(vinicius.nome)){
    vinicius.nome = vinicius.nome.toUpperCase();
}


if (vinicius.maiorIdade()) {
    console.log(`${vinicius.nome} é maior de idade.`)
} else {
    console.log(`${vinicius.nome} é menor de idade.`)
}

// console.info(Pessoa);