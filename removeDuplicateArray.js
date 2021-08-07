// Remove duplicate elements of an array.


function removeDuplicateArray(numbers) {

    let uniqueArray = [];

    for (let i = 0; i < numbers.length; i++) {

        const elements = numbers[i];

        if (uniqueArray.indexOf(elements) == -1) {


            uniqueArray.push(elements);

        }

    }
    return console.log(uniqueArray);

}

let numbers = [5, 5, 10, 15, 10, 9, 15, 29];

console.log(removeDuplicateArray(numbers))