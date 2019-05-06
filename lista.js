// Tipo ARRAY vazio
let listaVazia = [];

// Tipo ARRAY Valores definidos (com conteúdo)
let listaValor = [0,1,2,3, 'Patrícia'];

// Mostra array
console.log(listaValor);

// Mostra só o terceiro valor
console.log(listaValor[2]);

// Buscar - retorna valor dentro do ARRAY
let item = listaValor.find(f => f == 'Patrícia');
console.log(item);

// Buscar - retorna a posição dentro do ARRAY
item = listaValor.findIndex(f => f == '2');
console.log(item);

// Filtrar - retorna o ARRAY com o valor procurado
// - - - - - - - - - - - - - - - - - - - - - - - -
// Retorna o ARRAY com os dados que interessa
let novaLista = listaValor.filter(i => i == 'Patrícia');
console.log(novaLista);

// Mostra o que está na terceira posição
console.log(listaValor[3]);

// Informa o tamanho do ARRAY
console.log(listaValor.length);

// Adiciona itens na Fila
listaValor.push('Ana');
console.log(listaValor);

// Remove o último item na Fila
listaValor.pop();
console.log(listaValor);

// Remove a partir de determinada posição na Fila, tudo o que tiver até o final - passa o valor, não a posição
let index = listaValor.indexOf(2);
console.log(listaValor.splice(0,index));

// "Zerando a lista..."
listaValor = [0,1,2,3, 'Patrícia',4,5,6,7,8,9];
console.log(listaValor);

// Remove determinada posição na Fila - passa o valor, não a posição - tem que usar um laço de repetição
listaValor = listaValor.filter(f => f != 2);
console.log(listaValor);

// Remove determinada posição na Fila - passa o valor, não a posição - tem que usar um laço de repetição
listaValor = listaValor.filter(f => f < 3 || f > 5);
console.log(listaValor);

// "Voltando para a lista original..."
listaValor = [0,10,20,3,1,30, 'Patrícia',40,5,60,74,3,8,9,2];
console.log(listaValor);

// Remove determinada posição na Fila - passa o valor, não a posição - tem que usar um laço de repetição
listaValor = listaValor.filter(f => f < 3 || f > 5);
console.log(listaValor);

