//@ts-check

//functions can't be called untill declared.





let sayHi = function (firstName = "Captain No Name", age = 100000000) {
    let greeting = `Hello! My name is ${firstName} and I am ${age} years old`;
    console.log(greeting);
};

// call with different parameters
sayHi();
// call with default age
sayHi("Declan", 53)
firstName = "John"
sayHi(firstName, 19)



function multiply(a, b) {
    let answer = a * b;
    return answer;
}

console.log (multiply(10927459873498570, 50027345973409750));


//add can be called before it is defined because it is hoisted to the global scope
add(1, 2);

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


console.log(person);
wearBarneyShirt(person);
console.log(person);