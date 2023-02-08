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

// function compara(array){
//     var maior = array[0];
//     for(var i =0; i<array.length;i++){
//         if(array[i] > maior){
//             maior = array[i];
//         }
//     }
//     var menor = array[0];
//     for(var i = 0; i< array.length;i++){
//         if(array[i] < menor){
//             menor = array[i];
//         }
//     }
//     var diferenca = maior - menor;
//     document.write(diferenca);
// }
// var m = [1,5,20,50,300];

// compara(m);

/* 

QUESTÃO 3

*/

// function retorna (a,b){
//     for(;;){
//         var n = parseInt(prompt("digite um número"));
//         if( n >= a && n <= b){
//             document.write("o numero digitado foi :" + n);
//             break;
//         }
//     }
// }

// retorna(1,6);

/*

QUESTÃO 4

*/

function potencia(a,b){
    var ind = a;
    var c = a;
    if(b == 0){
        c = 1;
        document.write(c);       
    } else {
        for(var i = 1; i < b ; i++){
            c = c*ind;
        }
        document.write(`a base ${ind} multiplicada por indice ${b} é: ${c} <br>`);
    }
}

function potenciaR(a,b){
var c = 0;
    if(b<=1){
        return (b-1);
    } else {
        c = a * potenciaR(a-1);
        document.write(c + "<br>");
    }

}

potencia(10,2);
potenciaR(10,2);

