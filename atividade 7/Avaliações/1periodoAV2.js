/* 
               
QUESTÃO 1

Desenvolva uma função que dado um array de números inteiros, informe se todos os números deste array são múltiplos de 3 e de 5 ou não são. */

// function multiplos (array){
//     var multiplos = true;
//     for(var i = 0; i<array.length;i++){
//         if(array[i] % 3 == 0 || array[i] % 5 == 0){
//             multiplos = true;
//         } else {
//             multiplos = false;
//             break;
//         }
//     }

//     if(multiplos){
//         document.write("todos os números são multiplos de 3 ou 5");
//     } else {
//         document.write("pelo menos um número não é multiplo de 3 ou 5");
//     }
// }

// var ar = [3,5,20,12,30];

// multiplos(ar);

/*

QUESTÃO 2

*/

function compara(array){
    var maior = array[0];
    for(var i =0; i<array.length;i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    var menor = array[0];
    for(var i = 0; i< array.length;i++){
        if(array[i] < menor){
            menor = array[i];
        }
    }
    var diferenca = maior - menor;
    document.write(diferenca);
}
var m = [1,5,20,50,300];

compara(m);