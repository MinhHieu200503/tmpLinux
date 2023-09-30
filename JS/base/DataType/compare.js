// let a = 2;
// let b = "2"; b == a true||a ===b false
// let c = a    c == a true||c ===a true
// console.log(a === b)

let a = [1,2,3];
let b = [1,2,3];// b == a  false||a===b false
let c = a; // c == a and c === a
var result = (c === b)

var object = {
    a,
    b,
    c,
    age:12
}

// console.log("a ===b = "+a === b)
// console.log(a.length)
console.log(Object.keys(object).length)