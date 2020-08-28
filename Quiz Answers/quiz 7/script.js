// "use strict";

//////////////////////////////
//////////Question 1//////////
//////////////////////////////
/*
// 1-
function parent(num) {
    let a = 3;

    return function inner(num2) {
        console.log(num + a + num2)
    }

}
let closuresTry = parent(5);
closuresTry(5);

// Explanation: An inner function has access to the outer function variables & parameters even after the function has returned (because even after a function returns & it's execution context is gone the variable object remains there and can be accessed).




// 2-
document.querySelector('h2').addEventListener('click', callback);
function callback() {
    console.log('callback function is working');
}


function main(callback2) {
    console.log('hey main');
    callback2();
}
function callback2() {
    console.log('callback2 function is working');
}
main(callback2);


// Explanation: A callback is a function that is passed as an argument to another function and runs inside of the function that it was passed into




// 3-
function recursionTry(x) {

    x = x - 1;
    
    if (x > 1) {
        console.log(x);
        recursionTry(x)
    } else {
        return false;
    }

}
recursionTry(11);

// Explanation: it's a way of iterating over an operation by having a function call itself repeatedly until it arrives at a result




// 4-
let one, two, three, four, five, six, seven, eight, nine, ten
function arrFunction() {
    return [1, 2, 3, 4];
}
[one, two, three, four] = arrFunction();
console.log(one, two, three, four);


let arr = [5, 6, 7, 8];
[five, six, seven, eight] = arr;
console.log(five, six, seven, eight);


let arr2 = [nine, ten] = [9, 10]
console.log(nine, ten)


// Explanation: it's a way of extracting multiple elements from an array and assigning every element into it's own variable




// 5-

"use strict"; //it doesn't work unless it's written at the top(I wrote one there you can remove the comment and see it for yourself)

m = 5;

// Explanation: it defines if the code should be executed in strict mode or not (one of what strict mode does is that it throughs an error if the variables aren't declared)
*/







//////////////////////////////
//////////Question 2//////////
//////////////////////////////


// 1-
//Answers:2, 12



// 2-
// Answers: true, false



// 3-
// Answers: 'John Doe'



// 4-
// Answers: [10, 10, 15]



// 5-
// Answers:
// [1, 2, 3, 4]
// [5, 4, 3, 2, 1]



//////////////////////////////
//////////Question 3//////////
//////////////////////////////


// 1-

class Question {
    constructor(question, number, when) {
        this.question = question;
        this.number = number;
        this.when = when; //the when is how many 'no' & 'yes' (in order) are needed to display the question
        this.answers = ['Yes', 'No'];
    }

    display() {
        console.log(`${this.number}) ${this.question}`);
        this.answers.forEach((cur, index) => console.log(`${(index + 1)}- ${cur}`));
        console.log('---------------------------------------------------\nTo Exit or to Start answering from the First Question type exit\n---------------------------------------------------')
    }
}


class Animal{
    constructor(name, fly, flyWild, underSea, wild) {
        this.name = name;
        this.fly = fly;
        this.flyWild = flyWild;
        this.underSea = underSea;
        this.wild = wild;
    }
    
    getAnswers() {
        let data = [this.fly, this.flyWild, this.underSea, this.wild]
        return data.filter(function( element ) {
            return element !== undefined;
         });
    }

}
const animals = [
    new Animal('Eagle', 'true', 'true'),
    new Animal('Parrot', 'true', 'false'),
    new Animal('Shark', 'false', 'true', 'true'),
    new Animal('Dolphin' ,'false', 'true', 'false'),
    new Animal('Lion' ,'false', 'false', 'true'),
    new Animal('Cat','false', 'false', 'false')
]


let arr = [], displayedArr = [], ans;


questions = [
    new Question('Do You Fly', 1, []),
    new Question('Are you Wild', 2, ['true']),
    new Question('Do you live under sea', 3, ['false']),
    new Question('Are you Wild', 4, ['false', 'true']),
    new Question('Are you Wild', 5, ['false', 'false']),
]



function check() {
    //choose the next question according to it's when
    questions.forEach(cur => {
        // pass the question [which it's when equals the arr content and length] as ask  argument
        if (cur.when.length == arr.length && cur.when.join(' ') == arr.join(' ')) {
            ask(cur);
            // display the animal name when it's answers are the same as the arr content(answers)
            animals.forEach(cur => {
                if (cur.getAnswers().join(' ') == arr.join(' ')) {
                    console.log(`The animal is: ${cur.name}`);
                }
            })

        }
    })
}

check();

function ask(choose) {
    // Display the question and answers
    choose.display()

    // check if answer is true/false and push it to the arr
    ans = prompt('Choose (answer with 1 or 2)');
    
    if (ans == 1 || ans ==2) {
        if (ans == 1) {
            arr.push('true');
            displayedArr.push('Yes');
        } else if (ans == 2) {
            arr.push('false')
            displayedArr.push('No')
        }
        console.log(`Total Answers till now: ${displayedArr}`)
    } else {
        console.log('Please answer with 1 or 2!!!');
    }
}




/*

// 2-
let obj = {
    a: 1,
    b: 2
}

let toArray = Object.entries(obj);
console.log(toArray)


// 3
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const c = new Circle(6);
console.log(c.getArea());
console.log(c.getPerimeter());


// 4
function getBudgets(objsArr) {
    let budgetSum = 0;
    objsArr.map(el => {
        budgetSum += el.budget
    });
    console.log(budgetSum)
}
getBudgets([
    {name: 'John', age: 21, budget: 23000},
    {name: 'Steve', age: 32, budget: 40000},
    {name: 'Martin', age: 16, budget: 2700}
]);
getBudgets([
    {name: 'John', age: 21, budget: 29000},
    {name: 'Steve', age: 32, budget: 32000},
    {name: 'Martin', age: 16, budget: 1600}
]);


// 5
function sum(baseNum) {
    return function(newNum) {
        return baseNum + newNum;
    }
}
const plusFive = sum(5)
console.log(plusFive(2));
console.log(plusFive(-8));

const plusTen = sum(10)
console.log(plusTen(0));
console.log(plusTen(188));

console.log(plusFive((plusTen(0))));
*/





//////////////////////////////
//////////Question 4//////////
//////////////////////////////

/*
// 1

let encapsulation = (function() {

    let scoped = 5;
    console.log(scoped);
    return {
        notScoped: 3
    }

})();
// console.log(encapsulation.scoped);
console.log(encapsulation.notScoped);

// Explanation:
//Encapsulation it's the idea of hiding the data of an object from the outside scope instead of accessing the data directly
//Abstraction: ??


// 2
function reverseSentenceWords(str, initial) {
    let strArr, reversed;
    str = str.toLowerCase();
    str = str.replace('.', '');
    initial = initial.toLowerCase();
    strArr = str.split(' ');

    reversed = new Array(strArr.length)

    strArr.forEach((el, index) => {
        if (el.startsWith(initial)) {
            reversed[index] = (el.split('').reverse().join('')) } else {
                reversed[index] = el;
            }
    });
    reversed = reversed.join(' ')
    console.log(reversed);

}
reverseSentenceWords('word searches are super fun', 's');
reverseSentenceWords('first man to walk on the moon', 'm');
reverseSentenceWords('peter piper picked peppers', 'p');
*/