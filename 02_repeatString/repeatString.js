const repeatString = function(myString, num) {
    returnString = "";
    if (num >= 0){
        for(let i = 0;i < num; i++){
            returnString = returnString + myString;
            console.log(returnString);
        }
        return returnString;
    }
    else {
        return "ERROR";
    }
}
module.exports = repeatString;
