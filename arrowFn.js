//3.a) print odd num in array

let oddNum = ((...arr) => {            //Anonymous Function
    var result = [];
    for (let num of arr) {

        if (num % 2 !== 0) {
            result.push(num)
        }
    }
    return result;
})
console.log(oddNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 55, 97));

//3.b) Convert all Strings to Tittle caps in string Array

let capsArr = [];
let titleCaps = ((st) => {            // IIFE

    let res = st.split(" ").reduce((a, b) => a + " " + (b.charAt(0).toUpperCase() + b.slice(1) + " "), ' ');
    capsArr.push(res);
    return capsArr;
})("hello im logan");
console.log((capsArr));

//3.c) Sum of all numbers in array

let addNum = ((num) => {     //Anonymous Function
    let arr = [];
    let sum = 0;
    for (let val of num) {
        sum = sum + val;
    }
    arr.push(sum)
    return arr;
})
console.log(addNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 5]));

//3.d) Return all prime Numbers in Array
primearray = [];
nonprimearray = [];
let isPrime = ((array) => {                    //anonymous func
    for (var iterator of array) {
        for (var i = 2; i < iterator; i++) {
            var a = i;
            if (iterator % i == 0) {
                nonprimearray.push(iterator);
                break;
            }
        }
        if (iterator % a !== 0) {
            primearray.push(iterator);
        }
    }
    return primearray;
})
console.log(isPrime([1, 3, 7, 9, 15, 21, 56, 11]));

// 3.e) Return all the palindromes in Array
let arr;
let palindrome = ((input) => {          // Anonymous Fn
    arr = [];
    for (let key of input) {
        let val = key.split("").reverse().join("");
        if (val == key) {
            arr.push(val);
        }
    }
    return arr;
})
console.log(palindrome(["hello", "mam", "malayalam"]));



