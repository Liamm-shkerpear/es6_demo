import logo from './logo.svg';
import './App.css';

//arrow function
const tong = (a, b) => a+b;
//template literal
const name = "Hello";
console.log(`${name}`);
//destructuring assignment
const [x, y] = [1, 2];
const {a, b} = {a:1, b:2};
//class 
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
//module
//file lib.js
// export const sqrt = Math.sqrt;
// import {sqrt} from 'lib';
//enhanced array manipulation
const number = [1, 2, 3]; //co the xu ly bang map, filter, reduce
const double = number.map(n => n*2);
console.log(double);
//promise xu ly cac thao tac bat dong bo 
const promise = new Promise((res, rej) => {
  //Thuc hien cac cong viec va loi goi ham
});
//enhanced object manipulation
const obj1 = {a:1};
const obj2 = {b:2};
const obj3 = Object.assign({}, obj1, obj2);
//defaut parameter
function log(mes="no mess"){
  console.log(mes);
//ex1: arrow function
let greet = (name, timeOfDay) => {
  console.log(`Hello ${name}. Good ${timeOfDay}!`);
};
greet("Bob", "Morning");
greet("Vini", "Evening");
}
log();
//ex2: arrow function
let square = num => {
  return num * num;
};
//ex3: arrow function with obj literal
const person = {
  name: 'Trung Thanh',
  age: 20,
  greet: function() {
    console.log(`Heloo, my name is ${this.name}. I'm ${this.age}.`);
  }
}
person.greet();
console.log(square(5));
//rest parameter
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total +=number;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));
const sumAll = (...numbers) => {
  return numbers.reduce((sum, current) => sum+current,0)
};
console.log(sum(10, 20, 30));
//destructing assignment
const numbers = [1,2,3,4,5];

const [i1, i2, ...num] = numbers;
console.log(i1);
console.log(i2);
console.log(num);
function App() {
  return (
    <>

    </>
  );
}

export default App;
