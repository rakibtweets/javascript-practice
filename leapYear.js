// write a programming using leap year.


function isLeapYear(year){

    if(year % 4 == 0){
        return ( year + ' is leap year.');
    }
    else{
       return ( year + ' is not leap year.')
    }
   

    
}

var inputYear = 2020;

console.log(isLeapYear(inputYear));