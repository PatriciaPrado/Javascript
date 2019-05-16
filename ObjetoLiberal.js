
// DESESTRUTURAÇÃO DE OBJETO

// Objeto Literal
// criando uma classe com objeto literal
// não tem herança

//    =>   arrow function
// função anonima só pode chamar dentro do objeto

const Pessoa = {
    nome: 'Patrícia',
    idade: 24,
    cpf: '244.134.467-25',
    sexo: 'F',
    compararSexo: function(){
        if (this.sexo == 'M') {
            console.log(`${this.nome} é do sexo masculino.`)
        } else {
            console.log(`${this.nome} é do sexo feminino.`)
        }
    }
}

const Pessoa2 = {
    nome: 'Gabriel',
    idade: 24,
    cpf: '244.134.467-25',
    sexo: 'M',
    compararSexo: function(){
        if (this.sexo == 'M') {
            console.log(`${this.nome} é do sexo masculino.`)
        } else {
            console.log(`${this.nome} é do sexo feminino.`)
        }
    }
}

Pessoa.compararSexo();
Pessoa2.compararSexo();