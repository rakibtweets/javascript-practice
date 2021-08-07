// Find the biggest Name in an array

function biggestName(names) {

    let largestNameLength = names[0].length;

    let longestName;

    for (let i = 0; i < names.length; i++) {

        let nameLength = names[i];

        if (nameLength.length > largestNameLength) {

            largestNameLength = nameLength.length;
            longestName = nameLength;
        }

    }
    return longestName;
}

let peoplesName = ['Rabbe Mia', 'Rakib Hasan', 'Ashiqur Rahman', 'Rezauzzaman Reza', 'Mamun'];

let largestName = biggestName(peoplesName);

console.log(largestName);