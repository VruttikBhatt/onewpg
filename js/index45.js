let playerName="Patrik Laine is lame";
let team1=" New Jersey Devils";
let team2="New York Rangers";
let team3="Winnipeg jets";
let team4="Pittsburgh Penguins";
let message="Winnipeg is the best Canadian city, Go Winnipeg";

let result=playerName.slice(0,-4); 
let result1=team3.slice(9);
let result2=message.slice(12,-26);
let result3=message.slice(36,-9);

let template=`${result.toUpperCase()}${result2}${result1.toUpperCase()} player, ${result3} ${result1}`;


console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(template);
