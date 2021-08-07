// Find prime number on intervel.


function primeNumber(startNO,endNo) {
    
    for( let i = startNO; i <= endNo ; i++){
        if((i / i == 1) && (i / 1 == i)){
             console.log(i,' is prime number.');
        }
        

    }

}

let startNO = 11;
let endNo = 47;
console.log(primeNumber(startNO,endNo));