/* program conditions
 if speed under 70 print ok.
 after 70 for ever 5 multiples get 1 point.
 if driver gets 12 or more points print lisense supended.

*/

function checkSpeedLimit(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) {
        console.log('OK');
        return;
    }

    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
        console.log('Lisense Suspended');
    }
    else {
        console.log('Points: ', points);
    }


}

let speed = 130
;
console.log(checkSpeedLimit(speed));