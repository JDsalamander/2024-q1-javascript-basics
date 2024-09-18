//@ts-check


class CheeseClass {
    constructor(type,) {
        this.type = type;
        this.age = 0;
        this.shape = "wheel";
        this.color = "yellow";
        this.cost = 0.0;
    }

    eat() {
        console.log (`Nom nom nom ${this.type} is good`)
    }
}

let cheddar = new CheeseClass("Cheddar");
cheddar.shape = "fish";
cheddar.eat
let swiss = new CheeseClass("Swiss");
swiss.color = "white";
swiss.eat
let gouda = new CheeseClass("gouda");
gouda.age = 500;
gouda.eat