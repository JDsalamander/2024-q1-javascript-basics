//@ts-check

let firstName = "Declan";

let sayHi = function (f, a) {
    let firstName = f;
    let age = a;
    let greeting = `Hello! My name is ${firstName} and my age ${age}`;
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