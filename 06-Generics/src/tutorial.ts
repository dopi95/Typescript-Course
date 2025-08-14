// //Generics
// // let array: Array<string> = ['Apple', 'Banana', 'Mango'];

// function genericFunction<T>(arg: T): T{
//     return arg;

// }

// const someStringValue = genericFunction<string>('hello world');
// const someNumberValue = genericFunction<number>(2);

// interface GenericInterface<T>{
//     value: T;
//     getValue: () => T;
// }

// const genericString: GenericInterface<string> = {

//     value: 'Hello World',
//     getValue() {
//         return this.value
//     },
// };

// //Async function

// async function someFunc(): Promise<number> {
//     return 234;
// }
// const result = someFunc();
// console.log(result);

// //challanges

// function generateStringArray(length:number, value:string): string[]{
//     let result: string[] = [];
//     result = Array(length).fill(value);
//     return result;
// }

// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// let arrayStrings = createArray<string>(10,'hello');
// let arrayNumbers = createArray<number>(10,100);

// multiple variable types
function pair<T, U>(param1: T, param2: U): [T,U] {
    return [param1, param2]
}

let result = pair<number, string>(123, 'hello');