let array2 = ["Carlos","Joao","Marcos","Lonely"];
array2.push("Jamille");
array2.unshift("Barbara","Caua");
array2.pop();
array2.shift();
array2.splice(1,2,"Martins"); 
let array1 = [1,2.5,5,89,65.4,98,7,998,10.2];
const array3 = [1, 2, [3, 4], [5, [6, [7, 8]]]];
const flat = array3.flat(2);
const array4 = [1, 2, 3, 4, 5];
array4.copyWithin(1, 0, 2); 
//console.log(array4); // [1, 4, 3, 4, 5]
//console.log("With Flat:",flat); 
//console.log("Array3 Without Flat:",array3);
let concat = array1.concat(array2);
let join = array1.join("||");
let array1Str = array1.toString();
let Lenght = array1.length;
let at = array1.at(3);
//console.log(join);
let names = ["First","Second","Third","Four","Five","Six","Seven"];
delete names[4];
//console.log(names);
//console.log(includes);
const includes = names.includes("Nine"); 
const LastIndSearch = names.find((value)=>{ return value.length > 5;})
const findIndSearch = names.findIndex((value,index)=>{return index % 2 == 0 ; });
const lastInSearch = names.lastIndexOf("Five");
const search = names.indexOf("Third");

let map2 = new Map([
    ["firstname", "sumit"],
    ["lastname", "ghosh"],
    ["website", "geeksforgeeks"]
]);
map2.set("Series","Grey's Anatomy");
Keys_Map = map2.keys();
console.log(Keys_Map);

Entries_Map = map2.entries();
Has_Map = map2.has("ghost");
Get_Map = map2.get("Series");
Values_Map = map2.values() ;
Size_Map = map2.size;