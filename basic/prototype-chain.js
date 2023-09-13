const person = {
    naming: "human",
    height: 180.0,
    weight: 78.0,

    sayname1: () => {
        // As an ARRAY FUNCTION, the following expression is not viable// console.log("Hey my name is " + naming)
    },

    sayName() {
        console.log("This is my name: " + this.naming)
    }
    
};

person.sayName()

const dogman = {
    sayname1(){
        console.log("I'm shithead")
    }
}

Object.setPrototypeOf(dogman, person)

dogman.sayname1()
dogman.sayName()