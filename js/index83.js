let number =['*','*','*','*','*','*','*','*','*','*',];
let index = 10;
do{
    number.shift('*');
    console.log(number);
    index=index - 1;
}while (index>0) 
