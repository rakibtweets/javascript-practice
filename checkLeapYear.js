// write a program to find leap year or not.


function checkLeapYear( year){

    if((year % 4 == 0) && ( year % 100 != 0) || (year % 400 == 0)){

        console.log( year + ' is leap year.');
    }
    else{

        console.log( year + ' is not leap year.');

    }
    

}

var year = 2100;

var myBirthYearIsLeapYear = checkLeapYear( year);

console.log( myBirthYearIsLeapYear);