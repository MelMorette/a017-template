// //  Expressão padrão.
// function toSayHello() {
//    console.log("Hello World!");
// }

// toSayHello();

// function toSayName(nome) {
//    console.log(`Hello ${nome}!`);
// }

// -------------------------------------
// // Expressão de Função.
// const toSayName = function(nome) {
//    console.log(`Hello ${nome}!`);
// }

// toSayName("Mellissa");
// toSayName("Luna");
// toSayName("Ayumi");

// -------------------------------------
// function sumNumbers(n1, n2) {
//     return n1+n2
// }

// const retorno = sumNumbers(2, 5)

// console.log(retorno)

// -------------------------------------
// // Arrow function.
// const sumNumbers = (n1, n2) => {
//    return n1 + n2;
// };

// const retorno = sumNumbers(2, 5);

// console.log(retorno);

// -------------------------------------
// const printNumber = (arrayPush) => {
//     const newArray = [];

//     newArray.push(arrayPush[0], arrayPush[arrayPush.length -1]);

//     return newArray;
// };

// const retornoArray = printNumber([8,17,34,675,234,76]);

// console.log(retornoArray);

// -------------------------------------
// function returnPair(array){
//     const arrayPair = [];
//         for(let valor of array){
//             if(valor % 2 === 0){
//                 arrayPair.push(valor);
//             }
//             // valor%2===0 && newArray.push(valor); Outra forma de fazer o if (curto circuito). Verifica se o primeiro valor é verdadeiro, se for, executa o segundo.
//         }
//     return arrayPair;
// }

// console.log(returnPair([1,2,3,4,5,6,7,8,9,10]));

// -------------------------------------
function dividirNumero(arrayNumber) {
    let arrayDividido = [];

    arrayDividido.push (arrayNumber[0] / 2, arrayNumber[arrayNumber.length - 1] / 2);

    return arrayDividido;
}

console.log(dividirNumero([6, 2, 10]));
console.log(dividirNumero([50, 7, 30]));
