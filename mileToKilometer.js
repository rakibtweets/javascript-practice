// convert miles to kilometer.

function milesToKilometer(miles){

    let kilometers = miles * 1.609;

    return kilometers.toFixed(2);
}

let myRunningMiles = 5 ;
let kilometers = milesToKilometer(myRunningMiles);
console.log(' My Running miles into Kilometer : ' + kilometers + ' Km');


let friendsMiles = 4 ;
kilometers = milesToKilometer( friendsMiles);
console.log(' My Running miles into Kilometer : ' + kilometers + ' Km');
