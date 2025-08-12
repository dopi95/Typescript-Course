//Alias and Interface
// type User = {id:number; name:string; isActive:boolean};
// const john:User ={
//     id:1,
//     name:'john',
//     isActive:true,
// };

// const susan: User = {
//     id:2,
//     name:'susan',
//     isActive:false,
// };

// function createUser(user: User): User {

//     console.log(`Hello there ${user.name.toLocaleUpperCase()}!!!`);
//     return user;
    
// }

// createUser(john);
// createUser(susan);

// type stringorNumber = string | number;

// let value: stringorNumber;
// value = 123;
// value = 'hello'

// type Theme = 'light' | 'dark';
// let theme:Theme;
// theme ='dark';
// theme = 'light';

// function setTheme(t: Theme){
//     theme= t;
//   console.log(theme);

// }
// setTheme('dark')

// //challange

// type Employee = {id:number; name:string; department:string};

// type Manager = {id:number; name:string; employess: Employee[] };

// type Staff = Employee | Manager;

// function PrintStaffDetails(staff: Staff):void{

//     if('employess' in staff){

//      console.log(`${staff.name} is a manager in the ${staff.employess.length} employees`);


//     } else{

//             console.log(`${staff.name} is an employee in the ${staff.department} department`);

//     }


// }


// const alice:Employee = {id:1, name:'alice', department: 'Sales'};
// const steve:Employee = {id:2, name:'steve', department: 'HR'};
// const bob:Manager = {id:1, name:'bobo',employess:[alice, steve]};

// PrintStaffDetails(alice)
// PrintStaffDetails(bob)

// //intersection
// type Book ={id: number; name: string; price:number};
// type DiscountedBook = Book & {discount:number};

// const book1: Book ={
//     id:1,
//     name: 'how to cook dragon',
//     price: 15,
// };

// const book2: Book ={
//     id:1,
//     name: 'the secret life of unicorns',
//     price: 18,
// };

// const discountedBook: DiscountedBook ={

//     id:3,
//     name:'Gnomes vs. Golins',
//     price: 25,
//     discount: 0.15,
// }

// const PropName = 'age'

// type Animal ={

//     [PropName]: number;
// };

// let tiger: Animal = {[PropName]: 5};
// console.log(tiger);

//interfaces
//  interface Book{

//     readonly isbn: number,
//              title: string,
//              author: string,
//              genere?: string,
//              //method
//              printAuthor(): void;
//              printTitle(message:string): string;

//  }

//  const deepWork: Book ={
//     isbn:123,
//     title:'deep work',
//     author: 'cal newport',
//     // genere:'self-help',
//     printAuthor(){
//         console.log(this.author);
        
//     }, 

//     printTitle(message) {

//         return `${this.title} ${message}`;
//     }
//  }

//  deepWork.printAuthor();
//  const result = deepWork.printTitle('is an awosome book');
//  console.log(result);
 
// //challenge

// interface Computer {
//     readonly id: number,
//     brand: string,
//     ram: number,
//     storage?: number,
//     UpgradeRam(upgrade:number):number,
// }

// const laptop: Computer = {

//     id: 1,
//     brand: 'HP',
//     ram: 8,
//     UpgradeRam(amount){

//       this.ram += amount;
//       return this.ram;
//     }

// }

// laptop.storage = 256;

// const upgraderam = laptop.UpgradeRam(8);
// console.log(upgraderam);

// //interface merge in- merge the interfaces

// interface Person{
//   name: string;
//   getDetails():string;
// };

// interface DogOwner{

//     dogName: string;
//     getDogDetails(): String;
// };

// interface Person{
//     age: number;
// };

// const person: Person = {
//     name: 'john',
//     age: 30,
//     getDetails(){

//         return `Name: ${this.name}, Age: ${this.age}`;
//     },
// };

// interface Employee extends Person{

//     employeeId:number;
// }

// const employee: Employee ={

//     employeeId:123,
//     name: 'jane',
//     age: 30,
//     getDetails(){

//         return `Employee ID: ${this.employeeId} Name: ${this.name}, Age: ${this.age}`;
//     },

// }

// const per = person.getDetails();
// console.log(per);

// console.log(employee.getDetails());

// interface Manager extends Person, DogOwner{
//     managePeople():void;
// }

// const manager: Manager={
//     name: 'bob',
//     age: 30,
//     dogName:'rex',
//     getDetails(){

//         return `Name: ${this.name}, Age: ${this.age}`;
//     },
//     getDogDetails(){

//         return `Name: ${this.dogName}`;
//     },
//     managePeople(){
//         console.log('managing people....');
        
//     }
// };

// manager.managePeople();
// console.log(manager.getDetails());

//challange

function getEmployee(): PerSon | Dogowner | MaNager {
  const random = Math.random();
     if(random < 0.33){

        return{
            name:'john',
        };

     } else if(random < 0.66){
        return{
            name: 'sarah',
            dogname: 'rex',
        };
     } else{
        return{
        name: 'bob',
        managepeople(){
          console.log('managing people....');
          
        },
        delegateTasks(){

            console.log('Delegating task....');
        
        }
        };
     }
}

interface PerSon{
    name:string;
}

interface Dogowner extends PerSon{
    dogname:string;

}

interface MaNager extends PerSon{
    managepeople(): void;
    delegateTasks(): void;

}

const employee: PerSon | Dogowner | MaNager = getEmployee();

function isManager(obj: PerSon | Dogowner | MaNager ): obj is MaNager{
    return 'managepeople' in obj;
};

if(isManager(employee)){
    employee.delegateTasks();
}


