
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
// var maior = inteiros[0];

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

// //                      QUESTAO 5

// var A = [[],[],/*[],// []*/];
// var B = [[],[],/*[],//[],//[],//[]*/];
// //var produto = [[],[],[],[]];

// for ( var i =0; i< 2;i++){
//     for(var j =0; j< 2;j++){
//        A[i][j] = parseInt(prompt("digite um número"));
//     }
//     document.write("[ " + A[i] + "]" + "<br>");
// }

// document.write("<br>");

// for ( var i =0; i< 2;i++){
//     for(var j =0; j< 2;j++){
//        B[i][j] = parseInt(prompt("digite um número"));
//     }
//     document.write("[ " + B[i] + "]" + "<br>");
// }

// var multi = [[],[]];

// for ( var i =0; i< A.length; i++){
//     for (var j = 0; j< B[0].length; j++){
//         multi[i][j]=0;
//         for ( var k = 0; k < B.length; k++){
//             multi[i][j] = multi[i][j] + A[i][k] * B[k][j];
//             if (i == 1 && j == 1 && k==1){
//                 document.write("| " + multi[i-1] + " |" + "<br>" + "| " + multi[j] + " |");
//             }
//        }
//    }
// }

// //                      QUESTÃO 6 

// var A = parseInt(prompt("digite um número"));

// var V = [[],[],[]];
// var contagem=0;
// var X = [[],[],[]];
// var num = 0;

// // solicitar números
// for( var i = 0; i <3; i++){
//     for(var j = 0; j<3; j++){
//         var n = parseInt(prompt("digite um número para matriz"));
//         V[i][j] = n;
//     }
// }

// // contar quantas vezes o número aparece e, se não for o número, adicionar na matriz X
// for( var i = 0; i< 3;i++){
//     for (var j = 0; j<3; j++){
//         if(V[i][j] === A){
//             contagem = contagem+1;
//         } else if(V[i][j] !== A) {
//             X.push(V[i][j]);           
//         }
//     }
// }

// // função para exibir uma matriz
// function ExibirMatriz(matriz){
//    for ( var linha = 0; linha < matriz.length; linha++){
//         document.write("| ");
//         for ( var coluna = 0; coluna < matriz[0].length; coluna++){
//             document.write(matriz[linha][coluna] +" ");
//         }
//         document.write("|<br>");
//    }
// }

// ExibirMatriz(X);
// document.write("<br>");
// ExibirMatriz(V);

// // document.write(` o número ${A} aparece ${contagem} vezes`);

// var m = [1,2,3,4,5,6,7,8,9,10];

// function verArray(array){

//     for(var i =0; i< array.length; i++){
//         var n = array[i];
//         if(n <= 0){
//             document.write("array possui pelo menos um numero abaixo ou igual a zero" + "<br>")
//             break;
//         }
//         if(n == array.length){
//             document.write("array não possui nenhum item menor q zero");
//         }
//     }
    
// }

// verArray(m);



// function mediana(array){
//     var trocou = true;
//     while (trocou) {
//     trocou = false;
//     for (var i = 0; i < array.length-1;i++){
//         if(array[i] > array[i+1]){
//          var aux = array[i];
//          array[i]= array[i+1];
//          array[i+1]=aux;
//          trocou = true;
//         }
//     }
// }
// }


// var matriz = [1,8,3,6,5];

// function ordena(array) {

//    var trocou = true;

//    while (trocou) {
//        trocou = false;
//        for (var i = 0; i < array.length - 1; i++) {
//            if (array[i] > array[i + 1]) {
//                var aux = array[i];
//                array[i] = array[i + 1];
//                array[i + 1] = aux;
//                trocou = true;
//            }
//         }
//     }
// }

// function mediana(array){
//     ordena(array);
//     var pos = Math.floor(array.length/2);
//     if(array.length % 2 ==1 ){
//         return array[pos];
//     } else {
//         return (array [pos -1] + array [pos])/2;
//     }
// }

// document.write(mediana(matriz));

// function numeros(){
//     do {
//         var n = parseInt(prompt("digite um numero"));
//     } while( n < 1 || n > 6);
//     return document.write(n);
// }

// // numeros();

// function fibo(){
//     var num = parseInt(prompt("digite um número"));
//     var f1 = 1;
//     var f2 = 1;
//     for( var i = 0; i<num; i++){
//         var n = f1 +f2;
//         f1 = f2;
//         f2 = n;
//         document.write(n + "<br>");
//     }
// }











