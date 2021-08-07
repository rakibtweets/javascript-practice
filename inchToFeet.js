// convert inch to feet.

function inchToFeet(inches){

  let  feetNo = inches / 12;

    return feetNo;
}

let myInches = 25;
let feetNo = inchToFeet(myInches) ;
console.log( myInches + ' inch = ' + feetNo.toFixed(3) +' feet');


let dadaInches = 156;
 feetNo = inchToFeet(dadaInches);
console.log( dadaInches + ' inch = ' + feetNo.toFixed(3) +' feet');


let naniInches = 500;
 feetNo = inchToFeet(naniInches);
console.log( naniInches + ' inch = ' + feetNo.toFixed(3) +' feet');

