const removeFromArray = function(
    inputArray = [], ...args) 
{       
        let ogArray = inputArray;
        let allArgs = args;
        let toBePopped = [];
        for(arg of allArgs){
            let index = ogArray.indexOf(arg, 0);
            while (index >= 0){
                toBePopped.push(index);
                index = ogArray.indexOf(arg, index +1);
            }
        }
        toBePopped.sort((a, b) => b - a);

        for(index of toBePopped){
            ogArray.splice(index, 1);
        }

        return ogArray;
};

// Do not edit below this line
module.exports = removeFromArray;
