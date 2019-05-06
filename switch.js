// case - pode ser usado ao invés do IF ... IF ELSE ... IF ELSE ... IF ELSE ... ELSE

const opcao = 1;

switch(opcao){
    case 1: {
        console.log('opcao 1');
        break;
    }
    case 2: {
        console.log('opcao 2');
        break;
    }
    default: {
        console.log('Este é o padrão, caso não atendido...');
    }
}