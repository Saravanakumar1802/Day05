//1.a(1)print odd num in array

let oddNum = function (arr) {            //Anonymous Function
  var result = [];
  for (let num of arr) {

    if (num % 2 !== 0) {
      result.push(num)
    }
  }
  return result;
}
console.log(oddNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 55, 97]));

//1.a(2)
var arr = [];
((num) => {            // IIFE

  for (let val of num) {
    if (val % 2 !== 0) {
      arr.push(val);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 55, 97])

console.log(arr);


//1.b(1) Convert all Strings to Tittle caps in string Array

let titleCaps = (function (input) {           // Anonymous Function
  let capsArr1 = [];
  let res1 = input.split(" ").reduce((a, b) => a + " " + (b.charAt(0).toUpperCase() + b.slice(1) + " "), ' ');
  capsArr1.push(res1);
  return capsArr1;
});
console.log(titleCaps("hello im logan"));


//1.b(2) 

let capsArr = [];
((st) => {            // IIFE

  let res = st.split(" ").reduce((a, b) => a + " " + (b.charAt(0).toUpperCase() + b.slice(1) + " "), ' ');
  capsArr.push(res);
  return capsArr;
})("hello im logan");
console.log((capsArr));



//1.c(1) Sum of all numbers in array

let addNum = (function (num) {     //Anonymous Function
  let arr = [];
  let sum = 0;
  for (let val of num) {
    sum = sum + val;
  }
  arr.push(sum)
  return arr;
})
console.log(addNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 5]));


//1.c(2) 

let arr = [];
((num) => {                     //IIFE

  let sum = 0;
  for (let val of num) {
    sum = sum + val;
  }
  arr.push(sum)
  return arr;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 5]);
console.log(arr);


//1.d(1) Return all prime Numbers in Array
primearray = [];
nonprimearray = [];
let isPrime = (function (array) {                    //anonymous func
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


//1.d(2)

primearray1 = [];
nonprimearray1 = [];
((array) => {                                 // IIFE
  for (var key of array) {
    for (var i = 2; i < key; i++) {
      var a = i;
      if (key % i == 0) {
        nonprimearray1.push(key);
        break;
      }
    }
    if (key % a !== 0) {
      primearray1.push(key);
    }
  }
  return primearray1;
})([1, 3, 7, 9, 15, 21, 56, 11]);
console.log(primearray1);


//1.e(1) Return all the palindromes in Array
let arr;
let palindrome = (function (input) {          // Anonymous Fn
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

///1.e(2)

let arr1;
((input) => {       // IIFE
  arr = [];
  for (let key of input) {
    let val = key.split("").reverse().join("");
    if (val == key) {
      arr.push(val);
    }
  }
  return arr;
})(["hello", "mam", "malayalam"])
console.log(arr);

// 1.f(1)Return median of two sorted array of the same size.

let median = (function (val, val2) {
  let concat = [...val, ...val2].sort();
  console.log(`Concat of Array : ${concat}`);
  let length = concat.length;

  if (length % 2 === 1) {
    return concat[(length / 2) - .5];
  }
  else {
    return (concat[length / 2] / 2 + concat[(length / 2)] / 2 + 5);
  }
})
console.log(`Median Value of Two Array : ${median([10, 40, 70, 80, 110], [20, 50, 90, 100, 110])}`);


//1.f(2)

((val, val2) => {
  let concat = [...val, ...val2].sort();           //IIFE
  console.log(`Concat of Array : ${concat}`);
  let length = concat.length;

  if (length % 2 === 1) {
    console.log(`Median Value of Two Array : ${concat[(length / 2) - .5]}`);
  }
  else {
    console.log(`Median Value of Two Array :${(concat[length / 2] / 2 + concat[(length / 2)] / 2 + 5)}`);
  }
})([10, 40, 70, 80, 60], [20, 50, 90, 100, 30])


//1.g(1)Remove Duplicates from an Array (Method 1)

let duplicate = (function (arr) {           // Anonymous Function
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]] = 1;
  }
  return Object.keys(res).map(val => +val);
})
console.log(duplicate([100, 2, 3, 99, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 99]));   // => OUTPUT [1, 2,  3, 4, 5, 60, 70]


//1.g(2)

((arr) => {           // IIFE
  res = {};
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]] = 1;
  }
  console.log(Object.keys(res).map(val => +val));
})([100, 2, 3, 99, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 99]);    // => OUTPUT [1, 2,  3, 4, 5, 60, 70]




