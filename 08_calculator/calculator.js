const add = function(a,b) {
  return a+b;  
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arg) {
	return arg.reduce(function(total,current){ 
    return total + current},0);

  // or with arrow functions
      // return arg.reduce((total, current)=> total + current,0);
};

const multiply = function(arg) {
  return arg.reduce((mult,current)=> mult*current);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if (n===0){
    return 1;
  }
  return n*factorial(n-1);
};






let age = [4,24,54,32,15,74,13]
let elder = age.reduce((oldest,current)=> {
  if (current >= oldest){
     oldest = current;
  }
  return oldest;
},0);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
