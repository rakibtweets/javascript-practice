/* Find largest element in an array */

function largestArrayElement(numbers) {

    let largestElement = numbers[0];

    for (let i = 0; i < numbers.length; i++) {

        let elements = numbers[i];

        if (elements > largestElement) {

            largestElement = elements;
        }

    }
    return largestElement;

}

let ages = [25, 55, 60, 76, 98]

let oldestAges = largestArrayElement(ages);

console.log('Oldest age ', oldestAges);