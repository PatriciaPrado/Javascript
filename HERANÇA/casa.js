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