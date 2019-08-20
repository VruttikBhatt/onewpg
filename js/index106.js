function getUserID() {
    let number = 10
    return number;
}
function isUserValid() {
    if (getUserID()>30) {
        return true
    } else {
        return false
    }
}
if (isUserValid()==true) {
    console.log("User Valid")
} else {
    console.log("User not valid")
}