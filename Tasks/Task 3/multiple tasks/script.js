/////////////////////////
///2-
function checkPalindrome(str) {
    let strArr;

    //1. Reverse the string

    //turn the string into an array
    strArr = str.split('')

    //loop over the array and create a new array containing the reversed string
    reversedStrArr = strArr.map((cur, index) => {
        // console.log(cur, index)
        if (index === 0) {
            //return the last element of the string (as the first element of the new arr)
            return strArr[strArr.length - 1]
        } else {
            //return the rest of the letters from end to start
            return strArr[strArr.length - (index + 1)]
        }
    })


    //2. check if the string is plaindrome or not
    if (strArr.length === reversedStrArr.length && 
        strArr.every((val, index) => val === reversedStrArr[index]) ) {
        console.log('String is plaindrome');
    } else {
        console.log('String is\'nt plaindrome');
    }

}
// checkPalindrome('mada')




/////////////////////////
///2-
function checkAnagram(str, str2) {
    let anagram;

    //1. Create an array containing string characters
    let strArr = str.split('');
    let str2Arr = str2.split('');

    //2. Check if every character of the second aray is in the first String
    str2Arr.forEach(cur => {

        if (str.includes(cur) && strArr.length === str2Arr.length) {
            anagram = true
        } else {
            anagram = false
        }

    });

    //3. log if string is anagram or not
    anagram ? console.log('String is anagram') : console.log('String is not anagram')
}
// checkAnagram('listen', 'silent');
// checkAnagram('abc', 'def');




/////////////////////////
///3-

function sum() {
    return function() {
        return function() {
            return function() {
                return 25;
            }
        }
    }
}
// console.log(sum(5)(5)(5)(5));




/////////////////////////
///4-

function reverseStr(str) {
    let strArr, reverseStrArr, reversedStr;

    //turn the string into an array
    strArr = str.split('')

    //loop over the array
    reverseStrArr = strArr.map((cur, index) => {

        if (index === 0) {
            //return the last letter of the string (at the beginning of the array)
            return strArr.slice(-1)[0]
        } else {
            //return every element(letter) of the array in the last empty(unused) position of the array
            return strArr[strArr.length - (index + 1)];
        }

    })

    //Join the reversed string
    reversedStr = reverseStrArr.join('')

    //Display the string in the console
    console.log(reversedStr);

}
// reverseStr('hello');




/////////////////////////
///5-

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
MyObject.prototype.getName = function() {
    return this.name;
}

MyObject.prototype.getMessage = function() {
    return this.message;
}




/////////////////////////
///6-

// function checkPrime(num) {
//     let isPrime;
//
//
//
// }
// checkPrime(86);




/////////////////////////
///7-

function fibonacciSeries(num) {
    let series;

    //turn the number into an array with an extra element(for the initial [0, 1] of the first element)
    series = new Array(num+=1)

    //loop over the empty array
    for(let i = 0; i < series.length; i++) {

        if (i === 0 || i === 1) {
            //write the initial [0, 1] of the series
            [series[0], series[1]] = [0, 1];
        } else {
            //write the rest of the series if the num is more than 1
            series[i] = series[i - 1] + series[i - 2]
        }

    }

    //Display the series in the console
    console.log(series);

}
// fibonacciSeries(8);




/////////////////////////
///7-

function calcPower(baseValue, exponet) {
    let ans = 1;
    
    //Multiply the baseValue by itself as much as the number of the exponet
    for (let i = 0; i < exponet; i++) {
        ans *= baseValue;
    }
    
    //Display the baseValue and the exponet and the answer
    console.log(`The value of ${baseValue} to the power of ${exponet} is : ${ans}`);

}

// calcPower(5, 3);