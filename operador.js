const nome = 'Vinicius';
const idade = 24;

if(nome == 'Vinicius'){
    console.log('Operador: ==');
}

if(idade === '24'){
    console.log('Operador: ===');
}

if(idade != 24){
    console.log('Operador: !=');
}

if(idade !== '24'){
    console.log('Operador: !==');
}

if(nome !== '24'){
    console.log('Operador: !== 24 inteiro');
}

if('24' !== '24'){
    console.log('Operador: !== 24 texto');
}

if(idade > 24){
    console.log('Operador: >');
}

if(idade < 24){
    console.log('Operador: <');
}

if(idade >= 24){
    console.log('Operador: >=');
}

if(idade <= 24){
    console.log('Operador: <=');
}

// Operador lógico
if(idade == 24 || nome == 'Aline'){
    console.log('Operador: ou Aline');
}

if(idade == 24 && nome == 'Aline'){
    console.log('Operador: e Aline');
}

if(idade !== 24 || idade != '24'){
    console.log('Operador: ou 24');
}

if(idade == 24 || idade == '24'){
    console.log('Operador: ou 24 int e txt');
}

if(!idade == 24){
    console.log('! == -> entrou ou não');
}

if(idade == 24){
    console.log('== -> entrou ou não');
}

if(idade !== 24){
    console.log('!== -> entrou ou não');
}

if(idade == 24 && nome == 'Breno'){
    console.log('== && == -> Breno');
}

if(!idade == 24 && nome == 'Breno'){
    console.log('== && == -> Breno');
}

if(!(idade == 24 && nome == 'Breno')){
    console.log('!(== && ==) -> (Breno)');
}