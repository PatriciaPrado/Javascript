
//  DESESTRUTURAÇÃO DE ARRAY

// criando s variáveis
let a,b,resto;

// criando o array
const pessoas = ['Vinicius','Patrícia','Gabriel','Ygor'];

// pegando as duas primeiras posições
//  e pegando todo o resante utilizando ... (tres pontos)

[a,b, ...resto] = pessoas;

console.log(a);
console.log(b);
console.log(resto);


const pacp = ['do','Arantes','Cintra','Patrícia','Prado'];
[a,b,c,d,e] = pacp;
console.log(`${d} ${b} ${c} ${a} ${e}`);
