let numbArr = []
let number = 0
    while (number<66) {
    if (number%2==0 && numbArr.length<20) {
    numbArr.push(number);
    } 
    number = number+1;
    }
    console.log("length of array",numbArr.length,"array",numbArr);