const ftoc = function(fahrenheit){
  // C = (F-32)*(5/9)
  let convertion=parseFloat((fahrenheit-32)*(5/9));
  if ((convertion%(Math.floor(convertion))==0)
      ||(convertion==0)){
    return convertion;
  }
  return parseFloat(convertion.toFixed(1));
};

const ctof = function(celsius){
  // F = (C*(9/5))+32
  let convertion=parseFloat(((celsius*(9/5))+32));
  if ((convertion%(Math.floor(convertion))==0)
      ||(convertion==0)){
    return convertion;
  } 
  return parseFloat(convertion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
