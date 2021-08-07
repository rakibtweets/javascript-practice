// Find the cheaptest phone in an Array object.


const phones = [

    { brandName: 'Apple', Price: 120000, camera: 12, storage: 128 },
    { brandName: 'One Plus', Price: 80000, camera: 12, storage: 128 },
    { brandName: 'Samsumg', Price: 65000, camera: 12, storage: 128 },
    { brandName: 'Oppo', Price: 28000, camera: 12, storage: 128 },
    { brandName: 'Xaomi', Price: 15000, camera: 12, storage: 128 },
    { brandName: 'Walton', Price: 11050, camera: 12, storage: 128 },

]

let cheaptest = phones[0];

for ( let i = 0; i < phones.length; i++){  /* or for ( let phone of phones) */

    let phone = phones[i]

    if(  phone.Price < cheaptest.Price){
        cheaptest = phone;
    }

    
}

console.log(cheaptest);