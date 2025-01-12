let number = 15;
let string = number.toString();

// console.log(string,typeof(string));

let number2 = 9.656;
let Exponential = number2.toExponential(2);
Exponential = number2.toExponential(4);
Exponential = number2.toExponential(6);
//console.log(Exponential);

let number3 = 8.321;
let fixed = number3.toFixed(0);
fixed = number3.toFixed(2);
fixed = number3.toFixed(4);
fixed = number3.toFixed(6);
//console.log(fixed);

let number4 = 5.497;
let precision = number4.toPrecision();
precision = number4.toPrecision(2);
precision = number4.toPrecision(4);
precision = number4.toPrecision(6);
//console.log(precision);

//console.log(number4.valueOf());
//console.log(number2.valueOf());

let string2= "16";
let number5 = Number(string2);
//console.log(number5,typeof(number5));

let string3= "26";
let number6=parseInt(string3);
//console.log(number6,typeof(number6));

let string4 = "19";
let number7=parseFloat(string4);
//console.log(number7,typeof(number7));