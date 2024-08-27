//@ts-check

let firstName = "Declan";

let sayHi = function (f, a) {
    let firstName = f;
    let age = a;
    let greeting = `Hello! My name is ${firstName} and I am ${age} years old`;
    console.log(greeting);
};

sayHi("John", 53)
sayHi(firstName, 19)



function multiply(a, b) {
    let answer = a * b;
    return answer;
}

console.log (multiply(10927459873498570, 50027345973409750));



function add(a, b) {
    let answer = a + b;
    return answer;
}

console.log (add(100, 5000));



function divide(a, b) {
    let answer = a / b;
    return answer;
}

console.log (divide(25, 5));


function subtract(a, b) {
    let answer = a - b;
    return answer;
}

console.log (subtract(50, 20));

let runMyStuff = (x, y, f) => {
    let answer = f(x, y);
    return answer
}

runMyStuff("Billy", 5, sayHi);


let person = {
    isWearingBarneyShirt: false,
    isTotallyAwesome: false
};


function wearBarneyShirt(person) {
    person.isWearingBarneyShirt = true;
    person.isTotallyAwesome = true;
}


console.log (person);
console.log (wearBarneyShirt);
console.log (person);