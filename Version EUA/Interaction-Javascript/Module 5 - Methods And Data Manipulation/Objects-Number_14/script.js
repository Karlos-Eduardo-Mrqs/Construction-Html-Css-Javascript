const Person = {
    name: "Karl",
    age:30,
    Student:true,
    Speak:()=>{
        console.log(`Hello, my name is ${this.name}`);
    }
}
/*const Person2 = new Object();
Person2.name = "Luis";
Person2.age = 19; 
Person.Student = true;
Person2.Speak = ()=>{
    console.log(`Hello, my name is ${this.name}`);
};
//console.log(Person2);
*/
function Person3(name,age,Student){
    this.name = name;
    this.age = age;
    this.Student = Student;
}
const Prs3 = new Person3("John",21,false);
//console.log(Prs3);
function Animal(name,species,type){
    this.name = name;
    this.species = species;
    this.type = type;
}
let Animal1 = new Animal("Lion","feline","predator");
Animal1.name = "Dog";
Animal1.species = "canine";
Animal1.type = "domestic";
//console.log(Animal1);
/*
for (chave in Animal1) {
    console.log(`${chave} = ${Animal1[chave]}`);
}
let FirstCharactherist = Animal1.name;
console.log(FirstCharactherist);

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  }; 
  const me = Object.create(person);
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  console.log(person,me);
*/
/*
const Father = {
    ColorHair:"Brown",
    IsTall:true,
    Determined:true,
    Furious:false
 }

 const Mother = {
    ColorEyes:"Green",
    IsIntelligent:true,
    LikeRead:true,
    Carismatic:true
}

const child = Object.assign(Father,Mother);

*/
//console.log(Object.entries(child));
//console.log(child);

const person = {
    name: 'John',
    age: 30,
};

person.propertyIsEnumerable()
//console.log(person.propertyIsEnumerable('name'));
// Object.getOwnPropertyDescriptor()
//const descriptor = person.getOwnPropertyDescriptors(person, 'name');
//console.log(descriptor); 
// Output: { value: 'John', writable: true, enumerable: true, configurable: true }

//const descriptors = person.getOwnPropertyDescriptors(person);
//console.log(descriptors);
// Object.getOwnPropertyDescriptors()
/* Output:
{
    name: { value: 'John', writable: true, enumerable: true, configurable: true },
    age: { value: 30, writable: true, enumerable: true, configurable: true }
    }
    */
//Object.hasOwnProperty();
//console.log(person.hasOwnProperty('name')); 
//console.log(person.hasOwnProperty('address')); 

const Ciclano = [["name","Ciclano"],["age",20],["city","Rio De Janeiro"],["have work",true],["is tall",false]];
const Abject = Object.fromEntries(Ciclano) ;
//console.log(Abject);

let IS = Object.is("name","Ciclano") ;
//console.log(IS);

let string = Object.prototype.toString.call(Ciclano);
//console.log(string);

const Objt = {name:"Carlos"};
const newProto = { sayHello: function() { console.log('Hello Guys!'); } };
Object.setPrototypeOf(Objt, newProto);
Objt.sayHello(); 

/*
function Personal() {}
const personal = new Personal();
console.log(Object.getPrototypeOf(personal) === Personal.prototype); 
*/
/*
Object.freeze(Objt);
Objt.age = 19;
console.log(Objt);
*/
//console.log(Object.isSealed(Objt));
/*Object.seal(Objt);
Objt.age = 19;
delete Objt.name;
console.log(Objt);
*/

//let Extense = Object.isExtensible(Objt);
//console.log(Extense);
//Object.preventExtensions(Objt);
Objt.name = "SeiLa";