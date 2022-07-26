const removeFromArray = function(array,...remove) {
    for (let i=0; i<=remove.length-1; i++){
        if (array.includes(remove[i])){
            array.splice(array.indexOf(remove[i]),1);
            console.log(`${remove[i]} removed`);
        } else {
           console.error(`${remove[i]} not found`);
           continue;
        }
    }
    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
