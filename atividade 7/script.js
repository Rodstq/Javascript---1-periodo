
// //                               QUESTÃO 1

// var numeros = [];

// for(var i = 0; i < 5; i++){
//     var n = parseInt(prompt("digite um numero"));
//     numeros.push(n);
// }
// var distintos = [];
// var contagem = [];
// for (var i = 0; i < numeros.length; i++) {
//     var conta = 0;
//     for (var j = 0; j < numeros.length; j++) {
//         if (numeros[i] == numeros[j]) {
//             conta++;
//         }
//     }
//     var achou = false;
//     for (var k = 0; k < distintos.length; k++) {
//         if (numeros[i] == distintos[k]){
//             achou = true;
//             break;
//         }
//     }
//     if (!achou) {
//         distintos.push(numeros[i]);
//         contagem.push(conta);
//     }
// }
// document.write("o array principal é : " + numeros + "<br>");
// document.write("o array distinto é : " + distintos + "<br>");
// document.write("a contagem é : " + contagem + "<br>");

// //                              QUESTÃO 2 
// var A = [];

// for(var i = 0; i < 5; i++){
//     var n = parseInt(prompt("digite um numero"));
//     A.push(n);
// }

// document.write(A + "<br>");

// var numerosdeA = [];

// for(var i = 0; i<A.length;i++){
//     if(A[i]> 0){
//         numerosdeA.push(A[i]);
//     }
// }
// document.write(numerosdeA);

// //                          QUESTÃO 3

// var inteiros = [];

// for(var i = 0;i<10;i++){
//     var n = parseInt(prompt("digite o numero"));
//     inteiros.push(n);
// }
// var maior = inteiros[0];s

// for(var i= 1; i<inteiros.length;i++){
//    if(inteiros[i] > maior){
//      maior = inteiros[i];
//    }
//     document.write(inteiros[i] + "<br>");
// }
// document.write(`o maior é : ${maior}`);

// //                          QUESTAO 4

// var A = [];

// for(var i = 0; i < 5; i++){
//     var n = parseInt(prompt("digite um numero para A"));
//     A.push(n);
// }

// var B = [];

// for(var i = 0; i < 5; i++){
//     var n = parseInt(prompt("digite um numero para B"));
//     B.push(n);
// }

// document.write(`[${A}] [${B}] <br>`);

// var bUltimo = B.length-1;
// var n;
// var somas = [];

// for( var i = 0 ; i < A.length; i++){
//    n = A[i]+B[bUltimo];
//     somas.push(n);
//    bUltimo--;
// }

// document.write(`[${somas}]`);

//                      QUESTAO 4