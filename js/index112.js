function showNumbers(start,end) {
    let i = start;
    arr=[]
    if (isNaN(start) || isNaN(end)) {    
        return console.log("not a number")  
    } else if (start>end) {
        while (i>=end) {
            arr.push(i)
            i = i-1
        }
        return console.log(arr);
    } else if (start<=end) {
        while (i<=end) {
            arr.push(i)
            i = i+1
        }
        return console.log(arr) 
    }
}
showNumbers("a","s");
showNumbers(5,1);