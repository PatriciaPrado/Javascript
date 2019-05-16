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


const funcionario = new Funcionario(200);
funcionario.calcularSalario();
funcionario.exibirSalario();

module.exports = Funcionario;
