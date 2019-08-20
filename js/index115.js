function getLongerText(param1,param2) {
    let str1 = param1
    let str2 = param2

    if (str1.length>str2.length) {
        return console.log(param1,str1.length)
    } else {
        return console.log(param2,str2.length)
    }
}

getLongerText("iss","Sw");
getLongerText("zerland","swit");