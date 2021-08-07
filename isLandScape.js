// write a program to find that is Landscape or nor.


//method if (width > height== true) its landscape. else potrait.

function isLandscape(width,height){
    if( width > height)
    return 'Image is in Landscape mode';
    else
    return 'Potrait Mode'

}
let width = 200;
let height = 500;
let isLandscapeMode = isLandscape(width,height);
console.log(isLandscapeMode);