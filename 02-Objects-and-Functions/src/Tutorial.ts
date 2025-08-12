// //objects and Functions
// let car: {brand: string; year: number} = {brand: "toyota", year: 2020};
// car.brand = 'ford';

// let car1: {brand: string; year: number} = {brand: "audi", year: 2020};
// car1.year = 2022;

// let book = {title:'book', cost: 20};
// let pen = {title:'pen', cost: 10};
// let notebook = {title:'notebook'};

// let items: { readonly title:string; cost?:number }[] = [book,pen,notebook];
// // items[0].title ='new book' - not to update because of readonly

// //challenge
// let laptop: {brand:string; year: number} = {brand:'Dell', year:2020};
// let laptop2: {brand: string; year?: number} = {brand: 'Hp'};


// let product1 = {title:'shirts', price:20};
// let product2 = {title: 'pants'};

// let products: {title:string; price?:number}[] =[product1,product2];
// products.push({title: 'shoes'});

// // Functions
// //   -any
// //   -config
// //  type

// function sayHi(name: string){
//     console.log(`Hello there ${name.toUpperCase()}`);
    
// }

// sayHi('john');

// function calculateDiscount(price: number): number {
//     const hasDiscount = true;
//     if(hasDiscount){
//         return price *0.9;
//     }
//       return price ;
// }
// const finalPrice= calculateDiscount(200);
// console.log(finalPrice);

// // challanges
//  let names: string[] = ['elyas','abel','rahel','rediet'];

//  function checkName(name: string):boolean{
//     return names.includes(name);

//  }

//  let nameToCheck = 'rahel'

//  if(checkName(nameToCheck)){

//     console.log(`${nameToCheck} is in the list`);

//  } else{
//         console.log(`${nameToCheck} is not the list`);

//  }

// // optional and default parameters in functions
//  function calculatePrice(price: number, discount?: number): number{
//     return price - ( discount || 0);
//  }
//  let priceAfterDiscount = calculatePrice(100,20)
//  console.log(priceAfterDiscount);

//  function calculateScore(initialScore: number, penalityPoint: number = 0):number{
//     return initialScore - penalityPoint;
//  }
 
//  let ScoreAfterPenality = calculateScore(100,20);
//  let scoreWithoutPenality = calculateScore(300);
//  console.log(ScoreAfterPenality);
//  console.log(scoreWithoutPenality);

//  function sum(message: string, ...numbers: number[]): string{

//     const doubled = numbers.map((num) => num*2);
//     console.log(doubled);

//     let total = numbers.reduce((previous,current) => {
//           return previous + current;
//     }, 0);

//     return(`${message} ${total}`)
   
//  }


//  let result = sum('The total is: ',  1,2,3,4,5);
//  console.log(result);
 
// //challange

// function processInput(input: string | number){

//     if(typeof input === 'number'){
//         console.log(input * 2);
        
//     } else{
//         console.log(input.toUpperCase());
        
//     }
    

// }

// processInput(10);
// processInput('Hello');

// // objects as a parameter
// function createEmployee({id}: {id:number}): {
//     id:number; 
//     isActive:boolean} {
//     return {id,isActive: id % 2 === 0}; 
// };

// const first = createEmployee({id:1});
// const second = createEmployee({id:2});
// console.log(first,second);

// function createStudent(student: {id:number, name:string}): void{

//     console.log(`Welcome to the course ${student.name}!!! your id is ${student.id} and your email is ${student.email}`);

// }

// const newStudent={
//     id: 5,
//     name: 'anna',
//     email: 'anna@gmail.com'
// };
// createStudent(newStudent);
// createStudent({id:1, name: 'bob', email:'bob@gmail.com'})

//challange

function processData(input: string | number, config:{reverse:boolean} = 
{reverse:false} ): string | number{
if(typeof input === 'number'){
    return input * input;
}
else{
    return config.reverse? input.toUpperCase().split('').reverse().join('') : input.toUpperCase();
}
}

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello', {reverse: true}));


