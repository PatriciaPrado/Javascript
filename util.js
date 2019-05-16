// Util com string

let nome = 'Vinicius Augustus Silva Melin';

// SPLIT serve para separar conforme parametro
console.log(nome.split(' '));

nome = nome.split(' ');
console.log(nome);

// REPLACE serve para substituir o que for passado como parametro (primeiro sai, segundo entra) para no primeiro que encontrar
nome = 'Vinicius Augustus Silva Melin';
console.log(nome.replace('Vinicius','Breno'));

// REGEXP serve para substituir o que for passado como parametro (primeiro sai, segundo entra) faz todos
nome = 'Vinicius Augustus Silva Melin';
console.log(nome.replace(new RegExp(' ','g'), '_'));

nome = 'Vinicius_Augustus_Silva_Melin';
console.log(nome.replace(new RegExp('_','g'), ' '));

// REPEAT texto.repeat a variável 
const texto = 'abc ';
console.log(texto.repeat(3));

nome = 'Vinicius Augustus Silva Melin';

// SUBSTR para pegar parte de um texto - a partir da 10a posição, pegar as próximas 12 posições
console.log(nome.substr(10,12));

// SLICE (ou SUBSTRING) pega de terminada posição até determinada posição - a partir da 10a posição, até a 12a posição
console.log(nome.slice(10,12));

// SUBSTRING (ou SLICE) para pegar parte de um texto -  a partir da 10a posição, até a 12a posição
console.log(nome.substring(10,12));

// STARTSWITH  inicia com uma determinada palavra - retorna um boolean
// CaseSensitive
console.log(nome.startsWith('Vinicius'));
console.log(nome.startsWith('vinicius'));

// ENDSWITH  termina com uma determinada palavra - retorna um boolean
// CaseSensitive
console.log(nome.endsWith('Melin'));
console.log(nome.endsWith('melin'));
console.log(nome.endsWith('lin'));

nome = 'Patrícia Arantes Cintra do Prado'
// LENGTH determina o tamanho da nossa string
console.log(nome.length);

// NUMBER
// ------

const numero1 = 5683.96409305989058;

// TOPRECISION - limita o número de casas, inclui os inteiros
// arredondamento da última casa, dependendo do próximo número, se colocar 3, até 4 só corta.
console.log(numero1.toPrecision(6));

// TOFIXED - limita o número de casas decimais depois da vírgula
// arredondamento da última casa, dependendo do próximo número, se colocar 3, até 4 só corta.
console.log(numero1.toFixed(6));

// ISNAN - verifica se é número - se é número dá falso, se é texto dá verdadeiro
console.log(isNaN(numero1));
console.log(isNaN(nome));

// DATE no JavaScript
let date = new Date();
console.log(date);

// DATETIME
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getFullYear());

// Dia da semana - domingo é 0
console.log(date.getDay());

console.log(date.getTimezoneOffset());





