class Casa {
    constructor (cor, qtdQuartos){
        this.cor = cor;
        this.qtdQuartos = qtdQuartos;
    }

    getInformacao(){
        console.log(`cor: ${this.cor} Qtd: ${this.qtdQuartos}`)
    }

    static abrirPortao(){
        console.log('Portão aberto!');
    }

    static abrirJanela(){
        console.log('Janela aberta!');
    }
}

module.exports = Casa;







// Arquivo do Vinicius

// Cria classe como casa
class Casa {
    // Construtor qdo a classe é instanciada
    // Atributos cor e qtdQuartos
    constructor (cor, qtdQuartos) {
        // Variaveis definadas para armazernar cor e qtdQuartos
        this.cor = cor;
        this.quarto = qtdQuartos;
    }

    //metodo não estático
    // retorno void
    getInformacao(){
        //concatenção de texto com variaveis
        console.log(`cor: ${this.cor} Qtd. Quartos: ${this.quarto}`)
    }

    //metodo estático
    // com retorno void
    static abrirPortao(){
        console.log('Portão aberto!');
    }

    //metodo não estático
    // com retorno
    abrirJanela()
    {
        return 'Abriu a janela'
    }
}
// exportando a classe para utilizar em outros lugares
module.exports = Casa; 