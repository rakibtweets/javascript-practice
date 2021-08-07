// Grading system using switch case.

function gradingSystem(marks) {

    switch (true) {

        case ((marks >= 80) && (marks <=100)):
            console.log(marks, 'Grade : A+');
            break;

        case ((marks >= 70) && (marks <= 79)):
            console.log(marks, 'Grade : A');
            break;

        case ((marks >= 60) && (marks <= 69)):
            console.log(marks, 'Grade : A-');
            break;

        case ((marks >= 50) && (marks <= 59)):
            console.log(marks, 'Grade : B');
            break;

        case ((marks >= 40) && (marks <= 49)):
            console.log(marks, 'Grade : C');
            break;

        case ((marks >= 33) && (marks <= 39)):
            console.log(marks, 'Grade : D');
            break;
        case (marks >100):
            console.log('Invalid Input');
            break;

        default  :
            console.log('Sorry !! You failed.')
            break;
    }

}

let marks = 88;
let myGrade = gradingSystem(marks);
console.log(myGrade);