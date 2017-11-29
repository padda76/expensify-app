//Object destructuring

const person = {
    name: 'Odd Andreas',
    age: 41,
    location: {
        city: 'Bergen',
        temp: 3
    }
};

console.log(`${person.name} is ${person.age} years old.`);

const {name = 'Gunnar', age} = person;   // Object destructuring! - giving name std value.

console.log(`${name} is ${age} years old.`);

if(person.location.city && person.location.temp){
    console.log(`It's ${person.location.temp} in ${person.location.city}.`);
}

const {city : sted, temp} = person.location;  //destructuring - giving city new name
if(sted && temp){
    console.log(`It's ${temp} in ${sted}.`);
}

const book = {
    title: 'The Snowman',
    author: 'Jo Nesbø',
    publisher: {
        //name: 'Gyldendal'
    }
};

const{name:publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

//Array destructuring

const address = ['Flaktveitvegen','Flaktveit','Norge','5134'];
console.log(`You are in ${address[1]} ${address[2]}.`);

//const [street, city, country, pnr] = address;
const [, city, country] = address; // leave those you don't need, keep commas - can use std values
console.log(`You are in ${city} ${country}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, ,price] = item;
console.log(`A medium ${product} costs ${price}`);