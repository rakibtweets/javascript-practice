/* Find the lowes elements in an array */

function lowestArrayElements(numbers) {

    let lowestElement = numbers[0];

    for (let i = 0; i < numbers.length; i++) {

        let lowest = numbers[i];
        if (lowest < lowestElement) {

            lowestElement = lowest;

        }
    }
    return lowestElement;
}

let ages = [23, 18, 22, 34, 15, 65, 89, 12];
let youngerAge = lowestArrayElements(ages);
console.log('Younger person Age ', youngerAge);