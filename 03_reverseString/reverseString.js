const reverseString = function(message) {
    return message.split("").reverse().join("");
    
    //Second Form
    const reverseStringV2 = function(message) {
        let msg = '';
        for (let i=message.length-1; i>=0; i--){
            msg += message[i];
        }
        return msg;
    };
};

// Do not edit below this line
module.exports = reverseString;
