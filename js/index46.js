const userAndPassword ='pepito2017,12345';
const jsUserName='pepito2017';
const userName=userAndPassword.substr(0,jsUserName.length);
console.log(userName);

const jsPassword='12345';
const password=userAndPassword.substr(-5,jsPassword.length);

console.log(password);

console.log(`The user ${userName} has ${password} as password`);
