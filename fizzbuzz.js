// Write a program that print the numbers from 1 - 50.
// But the multiples of three print "Fizz" instead of numbers
// and the multiples of five prind "Buzz" instead of numbers.
// if the numbers is multiples of both three and five the print "FizzBuzz".


function fizzBuzz() {

    for( let i =1; i <=50; i++){
        if((i%3 == 0) && (i%5==0)){
            console.log( i,'FizzBuzz');
        }

        else if( i%3==0){
            console.log(i,'Fizz');
            
        }
        else if( i%5==0){
            console.log(i,'Buzz');
            
        }
       
    }
    
}
console.log(fizzBuzz());