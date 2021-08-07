// print fabonacci seris.
// 0 1 1 2 3 5 8 13 21 .......

function fibonacciSeries(limitNO) {

    let firstNo = 0;
    let secondNo = 1;
    let sum = firstNo + secondNo;
    console.log(firstNo);
    console.log(secondNo);

    for (let i = 2; i <= limitNO; i++) {

        firstNo = secondNo;
        secondNo = sum;
        console.log(sum);
        sum = firstNo + secondNo;

    }
    return sum;
}

let limit = 10;

let fibonacciNumbers = fibonacciSeries(limit);
console.log(fibonacciNumbers);