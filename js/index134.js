let array = [1,2,3,4,5,6,7,8,9,10];
let i=0;
while (i<=9) {
    if (array[i]%2!==0) {
        console.log(array[i]);
    } 
    i=i+1
    if (array[i]==9) {
        console.log("good job");
        break;
    }
}