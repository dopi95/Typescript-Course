// //Tuples

// let person:[string,number] = ['john', 25];

// let date: readonly [number,number,number] =[12,17,2001];

// console.log(date);

// function getPerson():[string,number]{
//     return ['john', 25];
// }

// let randomperson = getPerson();

// console.log(randomperson[0]);
// console.log(randomperson[1]);

// let susan: [string,number?] =['elyas']

// //Enums
// enum ServerResponseStatus {
//     Success = 200,
//     Error = 500,
// };
// Object.values(ServerResponseStatus).forEach((value) => {
//     console.log(value);
//     if(typeof value === 'number'){
//         console.log(value);
        
//     }
// })

// interface ServerResponse {
//     result:ServerResponseStatus;
//     data: string[];
// };

// function getServerResponse(): ServerResponse {

//     return{
//         result: ServerResponseStatus.Success,
//         data: ['first item', 'second item'],
//     }
// }

// const response = getServerResponse();
// console.log(response);

//challange

enum UserRole {
    Admin,
    Manager,
    Employee,

}

type User = {
    id:number;
    name:string;
    role:UserRole;
    contact: [string,string];
};

function createUser(user: User): User{
    return user;
}

const user:User = createUser({
    id:1, 
    name:'john doe',
    role:UserRole.Admin,
    contact:['john@gmail.com','123-456-789'],

});
console.log(user);
