const repeatString = function(message, num) {
    let msg=''; 
    if (num<0){
        return 'ERROR';
    }else {
        for (let i=1; i<=num; i++){
                msg += `${message}`;
        }
    }
    return msg;              
};

// Do not edit below this line
module.exports = repeatString;
