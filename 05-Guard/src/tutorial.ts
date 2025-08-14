// //Type Guard
// //1. Typeof
// type valueType = string | number | boolean;
// let value: valueType;
// const random = Math.random();
// value = random < 0.33 ? 'hello' : random < 0.66 ? 123.456 : true;

// function checkValue(value:valueType):void{

//     if(typeof value === 'string'){
//         console.log(`string : ${value.toUpperCase()}`);
//         return;
        
//     }
//     else if(typeof value === 'number'){
//         console.log(`number : ${value.toFixed(2)}`);
//         return;
        
//     }
//     else{
//     console.log(`boolean : ${value}`);

//     }

// }

// checkValue(value);

// //2.equality narrowing type guard
// type Dog = {type: 'dog'; name: string; bark: () => void}
// type Cat = {type: 'cat'; name: string; meow: () => void}
// type Animal = Dog | Cat;

// function makeSound(animal:Animal){
//     if('bark' in animal){
//         animal.bark();
        
//     }
//     else{
//         animal.meow();
//     }
// }

//3. truthy / falsy guard

// function printLength(str: string | null | undefined){
//     if(str){
//         console.log(str.length);
//     }
//     else{
//         console.log('no string provided');
        
//     }
// }
// printLength('hello');
// printLength(undefined);
// printLength(null);
// printLength('');

// type predicate function

type Student = {
    name:string;
    study: () => void;
}

type User = {
    name:string;
    login: () => void;
}

type Person = Student | User;

const randomPerson = (): Person =>{

    return Math.random() > 0.5
    ?{name: 'john', study: () => console.log('Studying..') }
    : {name: 'mary', login: () => console.log('Loging in..') }
}

const person = randomPerson();

function isStudent(person:Person): person is Student{
    return (person as Student).study !==undefined;
}

if(isStudent(person)){
    person.study();
} else{
    person.login();
}
