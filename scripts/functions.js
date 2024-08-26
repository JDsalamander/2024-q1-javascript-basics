//@ts-check
let sayhi = function(f, a) {
    let firstname = f
    let age = a
    let greeting =`"hello! my name is ${firstname} and I am ${age} years old.`
        //"Hello! my name is" + firstName + ", and I am" + age + "years old";
    console.log(greeting);
};

sayhi()