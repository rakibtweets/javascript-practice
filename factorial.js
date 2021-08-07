// Factorial Number.

function factorialNumber(inputNumber) {

    let factorialNO = 1;
    for (var i = 1; i <= inputNumber; i++) {


        factorialNO = factorialNO * i;
    }

    return factorialNO;
}

var myInputNumber = 5;
let factorial = factorialNumber(myInputNumber)
console.log(myInputNumber + ' factorial is : '+ factorial);


var ashiqInputNumber = 7 ;
let ashiqFactorial = factorialNumber( ashiqInputNumber);
console.log(ashiqInputNumber + ' factorial is : '+ ashiqFactorial);

