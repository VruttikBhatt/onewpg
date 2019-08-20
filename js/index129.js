let iceCreamFlavors =[]
iceCreamFlavors.unshift('mint')
iceCreamFlavors.unshift('chocolate chips')
iceCreamFlavors.unshift('raspberry')
iceCreamFlavors.unshift('vanilla')
iceCreamFlavors.unshift('spicy')

let i = iceCreamFlavors.length-1;
let j = 0;
while (j<=i) {
    console.log(iceCreamFlavors[j]);
    j=j+1;
}