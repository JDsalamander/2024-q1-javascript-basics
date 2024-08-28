//@ts-check
// this varible is a number or numerical data
let intelligenceQuotient = 8;

// first name and last name are strings

let firstName = "Declan";
let lastName = "Crazy Pants";

//you can reassign a variable's value

firstName = "John";

//constants use snake casing and you can't change them

const MIN_IQ = 0;
const MAX_IQ = 500;

//MIN_IQ = 100;

// Booleanvalues are true or false
let isWillTheCoolest = true;

//this is an undefined variable
let dontKnow;

//null is value that has no value, null is undefined but you don't get the error
let inTheVoid = null

console.log(firstName, lastName, "has IQ", intelligenceQuotient)


// this is an object
let myPet ={
    type: "Aligator",
    color: "Green",
    name: "Franklin",
    ageInHumanYears: 1,
    hair: false,
    lengthInFeet: 2
}

// you can change variables inside of objects

myPet.color = "Dark Green";

//you can also add new variables to objects but it is dangerous because it can happen by misspelling
myPet.Color = "green";

console.log("myPet looks like this", myPet);