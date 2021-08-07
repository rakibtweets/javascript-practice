// String Reverse

const learnigToptic = 'I am learning Javascript.'

function reverseString(text){

    let newReverseTopic = '';

    for ( let letters of text){


     newReverseTopic = letters + newReverseTopic;


    }

    return newReverseTopic;
}


let reversedLine = reverseString(learnigToptic);

console.log(reversedLine);