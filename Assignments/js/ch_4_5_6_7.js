// Java-script assignments chapter 4, 5, 6, 7

// 1. declare a variable for Number 'a' for example a value is 2
// 2. declare a variable for Number 'b' for example b value is a++ + ++a - --a + a--
// 3 .print meassage in alert() variable a
// 4. print meassage in alert() variable b

// post increament: Post-increment (i++)
// pre increament: Pre-increment (++i)
// a++ + ++a - --a + a--


// post increament: Post-increment (i++)
// var a = 2;
// console.log("variable a: "+a); //2
// console.log("variable a: "+a++); //2
// console.log("variable a: "+a); //3
// console.log("variable a: "+a++) //3
// console.log("variable a: "+a++) //4

// pre increament: Pre-increment (++i)
// var a = 2;
// console.log("variable a: "+ ++a) //3
// console.log("variable a: "+ ++a) //4
// console.log("variable a: "+a) //4
// console.log("variable a: "+ ++a + a++) //6: not addition, 55
// console.log("variable a: "+a) //4


var a = 2; // a have increment OR decrement value
var b = a++ + ++a - --a + a--; //b have evaluating value of: 6; like resulting value

console.log("variable a: "+a);
console.log("variable b: "+b);
