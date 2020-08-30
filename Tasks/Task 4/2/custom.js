// A) Explanation: In destructuring objects we have to use the same names as the object keys in the assigned varibales, because ....?



//////////////////////////////////////////////
////// B) Destructuring objects with different key names/////

// Whats does the colon do --> { what : goes where }


// -Without a previous object
const {name: n, age: a} = {name: 'John', age: 30};
console.log(n, a)


// -With a previous object
const obj = {
    name2: 'John',
    age2: 30
}
const {name2: n2, age2: a2} = obj;
console.log(obj, n2, a2);