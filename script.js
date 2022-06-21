
let user = {}; //Create an Empty Object
user.name = `John`; //Add a property (name) and set value to John
user.surname = `Smith`; //Add a property (surname) and set value to Smith
user.name = `Pete`; // Set the name property to `Pete`
delete user.name; //Delete the property "name"

let schedule = {}; //Create empty object

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//alert( isEmpty(schedule) ); //True.

schedule[`8:30`] = "Get Up!";

//alert( isEmpty(schedule) ); //False

let salaries = { //Create Salaries Object with some properties and values.
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0 

for (let key in salaries) { //Sum all properties in the Salaries Object. 
    sum += salaries[key];
}

console.log(sum);

let menu = {
    width: 200,
    height: 300,
    title: `My Menu!`,
};

function multiplyNumeric(obj){
    for ( let key in obj ) {
        if (typeof obj[key] == `number`) { //check the type of property for a number. 
            obj[key] *= 2;
        }
    }
};

multiplyNumeric(menu);

console.log(menu);


const person = {
    name: {
        first: `Bob`,
        last: `Smith`,
    },
    age: 32,
    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`)
    },
    introduceSelf() {
        console.log(`Hi I'm ${this.name.first}`);
    }
};

person.age = 42;
person[`name`][`last`] = `Cratchit`;
person[`eyes`] = `Hazel`;
person.farewell = function() {
    console.log(`Bye Everybody!`);
}

const myDataName = `height`;
const myDataValue = `1.75m`;

person[myDataName] = myDataValue;