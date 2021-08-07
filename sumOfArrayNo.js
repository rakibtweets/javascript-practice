/* Summation of Array numbers */

function sumOfArrays(arrayList) {

    let sum = 0;

    for (let i = 0; i < arrayList.length; i++) {

        sum = sum + arrayList[i];

    }

    console.log('Summation of Array No ', sum);

}

let numbersList = [65, 45, 78, 89, 34];

let summationOfArrays = sumOfArrays(numbersList);

console.log(summationOfArrays);