const Funcionario = require('./Funcionario');

class Programador extends Funcionario {

    // Não precisa ter aqui, herda da classe Funciobnario
    // constructor(salarioBase) {
    //     super(salarioBase);
    // }

    calcularSalario(){
        super.calcularSalario();
        this.total = this.total + 300;
    }

    exibirSalario(){
        console.log(`Salário progamador: R$ ${this.total}`)
    }
}

const programador = new Programador(500);
programador.calcularSalario();
programador.exibirSalario();
