
// 1) Assinale com “X” os nomes de variáveis corretos segundo as normas do interpretador do JavaScript: 
// a) [   ] var _1nota
// b) [ x ] var prompt - pode ser palavra reservada
// c) [ x ] var VariavelTeste
// d) [   ] var 2nota_ 
// e) [   ] var MinhaVariável 
// f) [   ] var número  


// 2) Assinale com “X” a resposta mais apropriada para a pergunta abaixo:  
// Pergunta: Para que servem os comentários dentro dos nossos códigos fonte? 
// a) [   ] Comentários servem para criar pontos de parada para debug da aplicação. 
// b) [ x ] Comentários servem para documentar e ou descrever as funcionalidades de um trecho de código com o propósito de auxiliar
//          no entendimento do código e posterior manutenção. 
// c) [   ] Comentários são utilizá-los para criação de trechos de códigos que serão executados somente em ambiente de desenvolvimento. 


// 3) Assinale com “X” a resposta mais apropriada para a pergunta abaixo: Pergunta: Qual a utilidade do operador de concatenação?
// a) [   ] Permite atribuir valores à variáveis.
// b) [ x ] Permite juntar variáveis e ou valores para formação de textos dinâmicos.


// 4) Crie um script JavaScript capaz de exibir a mensagem abaixo para o usuário
// através da função “console.log()”. Atente-se as marcações em vermelho no texto,
// tais informações devem ser preenchidas pelo próprio usuário através da entrada
// de valores via variável. 


// colocar const ao invés de let
// let nome = 'João';
// let cor = 'verde';
// let comida = 'macarrão';
// let musica = 'mpb';

// console.log(`Olá ${nome}, analisei suas preferências e estou vendo que sua cor preferida é ${cor}, seu prato preferido é ${comida} e que você gosta de ouvir ${musica}, agora que já sei de tudo isso, vou selecionar as melhores notícias para você ler hoje!`);



// 5) Crie um script que armazene as 26 letras do alfabeto português em um array cuja
// indexação deve iniciar pelo número 1. Posteriormente utilize a função console.log e o
// recurso de concatenação para escrever a palavra “JAVASCRIPT” utilizando o array e os
// índices correspondentes a cada letra.

// let alfabeto = [null,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// console.log(alfabeto[10] + alfabeto[1] + alfabeto[22] + alfabeto[1] + alfabeto[19] + alfabeto[3] + alfabeto[18] +  alfabeto[9] + alfabeto[16] + alfabeto[20]);


let alfabeto = [];
alfabeto[1] = 'A';
alfabeto[2] = 'B';
alfabeto[3] = 'C';
alfabeto[4] = 'D';
alfabeto[5] = 'E';
alfabeto[6] = 'F';
alfabeto[7] = 'G';
alfabeto[8] = 'H';
alfabeto[9] = 'I';
alfabeto[10] = 'J';
alfabeto[11] = 'K';
alfabeto[12] = 'L';
alfabeto[13] = 'M';
alfabeto[14] = 'N';
alfabeto[15] = 'O';
alfabeto[16] = 'P';
alfabeto[17] = 'Q';
alfabeto[18] = 'R';
alfabeto[19] = 'S';
alfabeto[20] = 'T';
alfabeto[21] = 'U';
alfabeto[22] = 'V';
alfabeto[23] = 'W';
alfabeto[24] = 'X';
alfabeto[25] = 'Y';
alfabeto[26] = 'Z';

console.log(`${alfabeto[10]}${alfabeto[1]}${alfabeto[22]}${alfabeto[1]}${alfabeto[19]}${alfabeto[3]}${alfabeto[18]}${alfabeto[9]}${alfabeto[16]}${alfabeto[20]}`);



// 6) Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo
// na variável local. Considere os seguintes critérios:
// Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
// Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
// Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
// Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
// Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados
// para o usuário.

// tudo que usa o IF pode usar o SWITCH

class Pessoa {
    constructor(nomePessoa, idadePessoa){
        this.nome = nomePessoa;
        this.idade = idadePessoa;
        this.tipo = null;
    }

    verificaIdade(){
        if (this.idade >= 0 && this.idade < 15){
            this.tipo = 'criança';
        } else if (this.idade >= 15 && this.idade < 30){
            this.tipo = 'jovem';
        } else if (this.idade >= 30 && this.idade < 60){
            this.tipo = 'adulto';
        } else if (this.idade > 60){
            this.tipo = 'idoso';
        } 
        console.log(`${this.nome}  tem ${this.idade} anos e é ${this.tipo}!`)
   }

   static verificarNome(nomeUsuario){
        if(nomeUsuario.toUpperCase() == nomeUsuario) {
            return true;
        } else {
            nomeUsuario = nomeUsuario.toUpperCase();
        }
   }
}

// criando 60 pessoas
for (let index = 0; index < 60; index++){
    const pessoa2 = new Pessoa(null, index);
    pessoa2.verificaIdade();
}

const gabriel = new Pessoa ('Gabriel', 14);
Pessoa.verificarNome(gabriel.nome);
gabriel.verificaIdade();
if(!Pessoa.verificarNome(gabriel.nome)){
    gabriel.nome = gabriel.nome.toUpperCase();
}

const ana = new Pessoa ('Ana', 35);
Pessoa.verificarNome(ana.nome);
ana.verificaIdade();
if(!Pessoa.verificarNome(ana.nome)){
    ana.nome = ana.nome.toUpperCase();
}

const patricia = new Pessoa ('Patrícia', 25);
Pessoa.verificarNome(patricia.nome);
patricia.verificaIdade();
if(!Pessoa.verificarNome(patricia.nome)){
    patricia.nome = patricia.nome.toUpperCase();
}

const pedro = new Pessoa ('Pedro', 61);
Pessoa.verificarNome(pedro.nome);
pedro.verificaIdade();
if(!Pessoa.verificarNome(pedro.nome)){
    pedro.nome = pedro.nome.toUpperCase();
}




// 7) Crie uma aplicação para efetuar o cálculo do índice de massa corporal.
//    Considere os seguintes critérios:
        // 1- Ao executar o script a aplicação deve conter seu nome.
        // 2- Na sequência a aplicação deve conter sua altura em centímetros.
        // 3- Na sequência a aplicação deve conter  seu peso.
        // 4- Após estes dados, atente-se a conversão das informações para dados do tipo float.
        // 5- Converta a altura recebida em centímetros para metros. (basta dividir a altura por 100).
        // 6- Internamente a aplicação deve executar o cálculo do índice de massa corporal através
        // da expressão: M = peso (quilos) ÷ altura2
        // 7- Após identificar o índice de massa corporal o sistema deverá classificar em faixas descritivas utilizando os critérios abaixo:
            // a) Se M estiver abaixo de 16 : Baixo peso muito grave
            // b) Se M estiver entre 16 e 16,99: Baixo peso grave
            // c) Se M estiver entre 17 e 18,49: Baixo peso
            // d) Se M estiver entre 18,50 e 24,99: Peso normal
            // e) Se M estiver entre 25 e 29,99: Sobrepeso
            // f) Se M estiver entre 30 e 34,99: Obesidade grau I
            // g) Se M estiver entre 35 e 39,99: Obesidade grau II
            // h) Se M for maior que 40: Obesidade grau III
    // Ao término o sistema deve fornecer a seguinte saída para o usuário: 
    // “<Nome> possui índice de massa corporal igual a <m>, sendo classificado como: <classificacao>.” 

    let nome = 'Patrícia';
    let altura = parseFloat(159);    
    let peso = parseFloat(102);    
    altura = altura / 100;
    // let massaCorporal = peso /(altura * altura);
    let massaCorporal = peso / Math.pow(altura, 2);
    massaCorporal = massaCorporal.toFixed(2);  
    let classificacao = '';

    if (massaCorporal < 16){
        classificacao = 'Baixo peso muito grave';
    } else if (massaCorporal >= 16 && massaCorporal <= 16.99){
        classificacao = 'Baixo peso grave';
    } else if  (massaCorporal >= 17 && massaCorporal <= 18.49){
        classificacao = 'Baixo peso';
    } else if  (massaCorporal >= 18,50 && massaCorporal <= 24.99){
        classificacao = 'Peso normal';
    } else if  ( massaCorporal >= 25 && massaCorporal <= 29.99){
        classificacao = 'Sobrepeso';
    } else if  (massaCorporal >= 30 && massaCorporal <= 34.99){
        classificacao = 'Obesidade grau I';
    } else if  (massaCorporal >= 35 && massaCorporal <= 39.99){
        classificacao = 'Obesidade grau II';
    }else {
        classificacao = 'Obesidade grau III';
    }

    console.log(`${nome} possui índice de massa corporal igual a ${massaCorporal}, sendo classificado como: ${classificacao}.`);



    // 8) ​Crie uma classe para gerenciar uma conta bancária, não é necessário se preocuparcom o número da conta, a classe irá permitir
    // fazer saque, depósito e exibir o saldoatual.
    // Classe: Conta
    // Atributos: saldo
    // Métodos: saque, deposito e exibirSaldo.
   
    class Conta {
        constructor() {
            this.saldo = 0;
        }

        saque(saque){
            this.saldo = this.saldo - saque;
            console.log(`Valor saque: R$ ${saque}`);
        }
            
        deposito(deposito){
            this.saldo = this.saldo + deposito;
            console.log(`Valor Depósito: R$ ${deposito}`);
        }
            
        exibirSaldo(){
            console.log(`Saldo atual: R$ ${this.saldo}`);
        }            
    }

    let conta = new Conta();
    conta.deposito(3000);
    conta.saque(50);
    conta.exibirSaldo();
        
    // 9) ​Crie uma classe Calculadora com um método estático que permita somar dois números e exiba esse número na tela.
    // Classe: Calculadora
    // Atributos: não será necessário nenhum atribut
    // Métodos: somar

    class Calculadora {
        constructor() {

        }
        
        static somar(valor1, valor2){
            let soma = valor1 + valor2;
            console.log(`Resultado: ${soma}`)
        }
    }

    Calculadora.somar(35,65);

    
    // 10) ​Crie uma classe "Funcionario" e uma classe "Programador", a classe "Funcionario" ficará responsável por receber o salário do
    // funcionário e fazer o cálculo levando em conta que todo funcionário irá receber um acréscimo de R$ 100 ao seu salário que é um bônus
    // dado para todos os funcionários, já a classe Programador terá que acrescentarmais R$ 300 ao salário apenas do funcionário programador,
    // para esse exercício você irá precisar utilizar herança e sobrescrita de métodos, pois terá que ser feito um cálculo no Funcionário e
    // com esse resultado, terá que ser feito um outro cálculo para o Programador, lembrando que você terá que reaproveitar o cálculo que já
    // será feito na classe Funcionario.
    // Classes: Funcionario e Programador
    // Atributos: salario e total
    // Métodos: - Classe Funcionario: calcularSalario e exibirSalario
    //          - Classe Programador: calcularSalario

    class Funcionario {
        constructor(salarioBase) {
            this.salario = parseFloat(salarioBase);
            this.total = 0;
        }

        calcularSalario(){
            this.total = this.salario + 100;
        }
           
        exibirSalario(){
            console.log(`Salário Base: R$ ${this.total}`)
        }
    }

    class Programador extends Funcionario {
        constructor(salarioBruto, salarioReceber) {
            this.salarioBruto = parseFloat(salarioBruto);
            this.salarioReceber = parseFloat(salarioReceber);
        }

        calcularSalario(){
            salarioReceber = salarioBruto + 300;
        }
    }