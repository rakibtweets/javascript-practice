// Simple interest.

// 

function simpleInterest(priciple, rate, time){

    let totalInterest = (priciple*rate*time) / 100;

    return (totalInterest);

}

let myPrinciple = 5000;
let rateOfInterest = 15;
let durationTimeMonthly = 1;
let myInterestRate = simpleInterest(myPrinciple,rateOfInterest,durationTimeMonthly);

console.log(myPrinciple  + ' taka interestest of '+ rateOfInterest +'% every' , durationTimeMonthly + 'days =', myInterestRate);