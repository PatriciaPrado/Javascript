// WHILE
// DO WHILE


// while (entra todas as vezes)
// não pode usar constante
// Contador no fim -> começa no 1
// Contador na segunda linha -> começa no 2


// Contador
let contador = 1;

while(contador < 10){
    contador++;
    console.log(contador);
    if(contador == 8){
        break;
    }

if(contador == 7)
    console.log('Entrou e continuou');
    continue;
} 


// do while - primeiro executa e depois verifica a condição
// Entra no mínimo uma vez

let contador1 = 1;

do {
    console.log(`do while1: ${contador1}`);
} while (false);

let contador2 = 12;

do {
    console.log(`do while2: ${contador2}`);
    contador2++;
} while (contador2 <= 20);


//  FOR - executa enquanto for verdadeiro

for(let x = 1; x <= 10; x++){
    console.log(`for: ${x}`);
}