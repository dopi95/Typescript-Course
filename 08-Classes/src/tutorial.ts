//classes
// class Book {
//     private checkedOut: boolean = false;

//  constructor(
//         readonly title: string,
//         public author: string,
//         private someValue: number
//     ){}

// public getSomeValue(){
//     return this.someValue;
// }
   
// };


// const deepWork = new Book('Deep Work', 'cal Newport',45);
// console.log(deepWork.getSomeValue());

// getters and setters

// class Book {
//     private checkedOut: boolean = false;

//     constructor(readonly title:string, public author: string){}

//     get info(){
//         return `${this.title} by ${this.author}`;
//     }

//     private set checkOut(checkedOut:boolean){
//         this.checkedOut = checkedOut;

//     }

//     get checkOut(){
//         return this.checkedOut;
//     }

//     public get someInfo(){
//         this.checkOut = true;
//         return `${this.title} by ${this.author}`;
//     }

// }

// const deepWork = new Book('Deep Work', 'Cal Newport')
// console.log(deepWork.info);

// console.log(deepWork);
// console.log(deepWork.someInfo);
// console.log(deepWork.checkOut);

//interfaces in class

interface Iperson{
    name: string;
    age: number;
    greet(): void;
}

class Person implements Iperson{
    constructor(public name:string, public age:number){}
    greet(): void{
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
        
    }
}

const hipster = new Person('shakeAndBake', 100);
hipster.greet()