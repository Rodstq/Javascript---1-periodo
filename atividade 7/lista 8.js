// QUESTAO 1

var ma = [ 
    [1,0,0,0], 
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1]
];
    
function exibeMatriz(matriz){ 

for (var i = 0 ; i < matriz.length; i++){
    document.write("| ");
    for( var j = 0; j< matriz[0].length; j++){
        document.write(matriz[i][j] + " ");
    }
   document.write(" |<br>");
    }
}

exibeMatriz(ma);


// QUESTÃO 2

var m = [ [2,3,6],
[6,3,2]
];


var n = [ [2,6],
[3,3],
[6,2]
];

C = [];

function multMatriz (A,B){

if ( A[0].length == B.length){
    for( var i = 0; i< A.length; i++){
    document.write("| ");
    C[i]=[];
        for(var j = 0; j<B[0].length; j++){
            C[i][j]=0;
            for(var k = 0; k<B.length;k++){
                C[i][j] = C[i][j] + A[i][k]*B[k][j];
            } 
        }
        document.write(C[i] +" |<br>");
    }
} else { 
    document.write(" matrizes não são multiplicáveis ");
}

}

multMatriz(m,n);



//  QUESTAO 3

var m = [[1,2],
[8,4],
[5,6]
];

function matrizT (matriz){

var mT = [];

for (var i = 0 ; i < matriz[0].length; i++){
    mT[i]=[];
    document.write("| ");
    for( var j = 0; j < matriz.length; j++){
        mT[i][j] = matriz[j][i];
        document.write( mT[i][j] + " ");
    }
        document.write(" | <br>");
    }
}

matrizT(m);


// QUESTÃO 4

var m = [[1,2],
[4,5]
];

var n = [[2,1],
[5,4]
];


function somaMatriz(A,B){

var c = [];

for(var i = 0; i < A.length; i++){
    c[i]=[];
    document.write("| ");
        for(var j = 0; j < A[0].length; j++){
            c[i][j] = A[i][j] + B[i][j];
        }
    document.write(c[i] + " |<br>");
    }
}

somaMatriz(m,n);

// QUESTÃO 5

function subMatriz(A,B){

var c = [];

for(var i = 0; i < A.length; i++){
c[i]=[];
document.write("| ");
    for(var j = 0; j < A[0].length; j++){
        c[i][j] = A[i][j] - B[i][j];
    }
    document.write(c[i] + " |<br>");
    }
}

subMatriz(m,n);