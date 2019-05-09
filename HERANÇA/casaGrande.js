const Casa = require('./casa');

class CasaGrande extends Casa {
    constructor(corCasaGrande, qtdQuartos){
        super(corCasaGrande, qtdQuartos)
    }

    getCor(){
        console.log(`Cor: ${this.cor}`);
    }
}

const casaGrande = new CasaGrande('PRETO', 2);
const casaPequena = new CasaGrande('AZUL', 4);
casaGrande.getInformacao();
casaGrande.abrirJanelaCasaGrande('CasaGrande');
casaPequena.abrirJanelaCasaPequena('CasaPequena');


casaGrande.getInformacao();


