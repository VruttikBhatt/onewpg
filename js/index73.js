let number =['*','*','*','*','*','*','*','*','*','*',];
let index = 10;
while (index>0) {
    number.shift('*');
    console.log(number);
    index=index - 1;
}