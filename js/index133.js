let  = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Magneto',
'Beast',
'Phoenix',
'Logan',
'Gambit'];

let i=0
let magVar
while (i<=8) {
    console.log(arr[i])
    if (arr[i] =='Magneto') {
        magVar = i
    break
  } 
  i = i+1
}
console.log(arr.indexOf('Magneto'))

let j=0
while (j<=7) {
    if ( arr[j] === "Magneto") {
        arr.splice(j, 1); 
      }
    console.log(arr[j].toLocaleUpperCase())    
  j = j+1
}