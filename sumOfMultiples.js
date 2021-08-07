/* Write a program that will sum all the multiples of both 3 and 5 upto certai limit */

function sumOfMultiples(limit) {

    let sum = 0;


    for (let i = 0; i <= limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i;

        }

    }

    console.log('sum of multiples of 3 and 5 : ', sum);

}
console.log(sumOfMultiples(30));