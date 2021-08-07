// Convert celsius to Farenhit



function celsiusToFarenheit(celsius) {

    var celsius;
    let farenheit = (celsius * 9/5) + 32;

    return farenheit;
   
}

let todaysTemperature = 45;

let farenheitValue = celsiusToFarenheit( todaysTemperature);

console.log('Todays Temperature '+ todaysTemperature + ' in Farenheit is ' + farenheitValue);



let tomorrowsTemperature = 120;
farenheitValue = celsiusToFarenheit(tomorrowsTemperature);
console.log('Tomrrows Temperature '+ tomorrowsTemperature + ' in Farenheit is ' + farenheitValue);


