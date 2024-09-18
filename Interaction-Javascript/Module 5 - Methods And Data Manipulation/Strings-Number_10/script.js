let nome = "Escreve aí seu nome !";
let tamanho = nome.length;
//console.log(tamanho);

let string2 = "Bla_Bla_Bla_Bla_Bla_";
let char = string2.charAt(0);
let CharAtCode = string2.charCodeAt("_");
console.log(CharAtCode);

let string3 = "Hello Programmer";
let parts = string3.slice(6,14);
let tamanho2 = string3.length;
//console.log(parts);

let string4 = "I Like Fruits";
let parts1 = string4.substring(8,2) ;
//console.log(parts1);

let string5 = "High Letter";
let string6 = "Down Letter";
let Upper = string5.toUpperCase();
let Lower = string6.toLowerCase();
//console.log("Upper Case:",Upper);
//console.log("Lower Case:",Lower);

let text1 = "Rare";
let text2 = "Exeception";
let concat = text1.concat(" ",text2);
let concatPlus = text1 + " " + text2;
//console.log(concatPlus);

let text3 ='  Mi_Mi_Mi_Mi_Mi_Mi_Mi_Mi_Mi                             ';
let trin = text3.trim();
//console.log("Without White Spaces:",text3);
//console.log("With White Spaces:",trin);

let text4 = "                      _bla_bla_bla_bla_bla_bla_bla_bla_bla                        ";
let StarTrin= text4.trimStart();
//console.log("Without White Spaces In Begin:",StarTrin);
//console.log("With White Spaces In Begin:",text4);

let text5 = "  LOL_LOL_LOL                                              ";
let EndTrin = text5.trimEnd();
//console.log("Without White Spaces In End:",EndTrin);
//console.log("With White Spaces In End:",text5);

let text6 = "Hello";
let StarPad = text6.padStart(10, ",Hello,"); 
let EndPad = text6.padEnd(8, ",Bye");
//console.log("Add Hello In Begin:", StarPad);
//console.log("Add Bye In End:", EndPad);

let number = "15,";
let repeat = number.repeat(6);
//console.log(repeat);

let message = "Please, don't forget your cellllophane !";
let replace = message.replace("cellllophane !", "cellphone !");
//console.log(replace);

let sending = "What do you do ?";
let End = sending.endsWith("?");
//console.log(End);

let Start = sending.startsWith("What");
let includes = sending.includes("What");
let AllMatch = sending.matchAll();
let match = sending.match();
let Search = sending.search("do");
let lastIndex = sending.lastIndexOf("you");
let indexOf = sending.indexOf("What");