//Split = Transforma string em um array//
//push = Adiciona um elemento ao final do array//
//Pop = remove o ultimo elemento do array e o retorna//
// Unshift = adiciona um elemento ao inicio de um array//
//shift = remove o primeiro elemento do array//
// slice = Copia um array, não modifica os dados originais, nova array//
//Sort = ordena em ordem semi alfabetica//
// Splice = Remove um elemento em uma posição especifica da array//
// index = localiza o indice//
// Includes = localiza se um elemento existe na array, sem retorna com um booleano
// Reverse = inverte a ordem do array

let nomes = "Amanda', Priscila";
let alunas = nomes.split(",")
alunas.push("Adriana")
alunas.push("Maria")
alunas.pop();
alunas.unshift("Adriana")
alunas.splice(3,1);
alunas.sort();
//alunas.shift();
//console.log(alunas.indexOf("Adriana"))
console.log(alunas.includes("Eliza"))
alunas.reverse();
//var copia = alunas.slice(1,3)

//Join = Transforma array em string//

alunas = alunas.join(",");

console.log(alunas)

