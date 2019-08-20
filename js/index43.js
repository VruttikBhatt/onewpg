const text="game of thrones";
const firstChar=text.charAt(0);
const secondChar=text.charAt(5);
// const thirdChar=text.charAt(1000); the result is still same in output.
const thirdChar=text.charAt(8);
const result=text.charAt(0)+''+text.charAt(5)+''+text.charAt(8);

console.log(result.toUpperCase());
console.log(`the final result is: ${result.toUpperCase()}`);

