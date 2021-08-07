// Average of Arrays.

function averageOfNumbers(numberList) {

    let avrgNo = 0;
    let sum = 0;

    for (let i = 0; i < numberList.length; i++) {

        sum = sum + numberList[i];
        avrgNo = sum / numberList.length;
    }
    return avrgNo.toFixed(2);
}

let numbers = [60, 85, 54, 75];

let myAvrgMarks = averageOfNumbers(numbers);

console.log('Average of Array numbers ', myAvrgMarks);