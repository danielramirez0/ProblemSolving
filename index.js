"use strict";
//////////PART 1////////////////
// Reverse a string
const reverseStringManual = (string) => {
  let revStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    revStr += string[i];
  }
  return revStr;
};

console.log(reverseStringManual("This is backwards"));

const reverseStringBuiltInMethods = (str) =>
  str.split("").reverse().join("").toLowerCase();

console.log(reverseStringBuiltInMethods("This is backwards"));

// Capitalize first letter of each word separated by a space
function capitalizeAllFirstLetters(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word = word[0].toUpperCase() + word.slice(1);
    words[i] = word;
  }
  return words.join(" ");
}

console.log(capitalizeAllFirstLetters("Let's capitalize some words!"));

// Compress a string of characters
const compressString = function (str) {
  let letter;
  let compressed = "";
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    let j = i + 1;
    while (letter === str[j]) {
      i++;
      j++;
      counter++;
    }
    compressed = compressed + counter + letter;
    counter = 1;
  }
  return compressed;
};

console.log(compressString("aaabbbcccdddeeefff"));
console.log(compressString("abcdaabbccddaaabccdeefggg"));

// Check if word is palindrome (same backwards as it is forward)
const isPalindrome = function (str) {
  let reverse = reverseStringBuiltInMethods(str);
  return str.toLowerCase() === reverse.toLowerCase() ? true : false;
};

console.log("Nope is a palindrome:" + " " + isPalindrome("Nope"));
console.log("Mom is a palindrome:" + " " + isPalindrome("mom"));
console.log("Mom Mom is a palindrome:" + " " + isPalindrome("mom mom"));
console.log("Dad Daddad is a palindrome:" + " " + isPalindrome("dad daddad"));
console.log("Dad Dad Dad is a palindrome:" + " " + isPalindrome("Dad dad dad"));

//////////PART 2////////////////
// Check if number is happy or sad
// Happy number = start with positive #, replace it with sum of squares of its digits, repeat until number equals 1, i.e. 19 is happy
const getSumFromIntegersSquared = function (num) {
  let sum = 0;
  let nums = num.toString().split("");
  for (let i = 0; i < nums.length; i++) {
    let square = Math.pow(nums[i], 2);
    sum = sum + square;
  }
  return sum;
};

const numberIsHappy = function (num) {
  let sums = [];
  let newNum = getSumFromIntegersSquared(num);
  while (!sums.includes(newNum)) {
    sums.push(newNum);
    newNum = getSumFromIntegersSquared(newNum);
  }
  return newNum === 1 ? "Happy!" : "Sad";
};

console.log(numberIsHappy(19));
console.log(numberIsHappy(2));

// Check if number is prime (only divisible by 1 and itself)
// Print all prime numbers between 1 and 100
const isPrime = (num) => {
  if (num <= 3) {
    return num > 1;
  }
  if (num === 5 || num === 7 || num === 11) {
    return true;
  }
  if (
    num <= 1 ||
    num % 2 === 0 ||
    num % 3 === 0 ||
    num % 5 === 0 ||
    num % 7 === 0 ||
    num % 11 === 0
  ) {
    return false;
  } else {
    return true;
  }
};

const listPrimes = (arr) => {
  return arr.filter((e) => isPrime(e));
};

let oneToOneHundred = [];
for (let i = 0; i < 100; i++) {
  oneToOneHundred.push(i + 1);
}
console.log(listPrimes(oneToOneHundred));

// Fibonacci sequence
const fibonacciSequence = (num, maxLength) => {
  let sequence = [];
  let number = num;
  let previous = 0;
  let i = 0;
  sequence.push(num);
  while (sequence.length < maxLength) {
    i++;
    sequence.push(number + previous);
    previous = number;
    number = sequence[i];
  }
  return sequence;
};

console.log(fibonacciSequence(1, 10));

//////////PART 3////////////////
// Return indices where when added they reach a speficied target
const sumOfElementsEqualsTarget = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (j === i) {
        continue;
      } else {
        const b = arr[j];
        if (a + b === target) {
          return `${a} and ${b} equal ${target}`;
        }
      }
    }
  }
  return "Target not found";
};

console.log(sumOfElementsEqualsTarget([5, 17, 77, 50], 55));
console.log(sumOfElementsEqualsTarget([5, 17, 77, 55], 55));
console.log(sumOfElementsEqualsTarget([10, 11, 101, 100], 111));
console.log(sumOfElementsEqualsTarget([10, 11, 101, 100], 101));
console.log(sumOfElementsEqualsTarget([10, 11, 101, 100], 110));

// Prompt for string, test for palindrome
function promptPalindrome() {
  let str = String(
    prompt("Type the string to test if it is a palindrome: ")
      .split(" ")
      .join("")
  );
  alert(isPalindrome(str) === true ? "It sure is!" : "Nope!");
}

// Can array form a sequence of incrementing positive numbers
function canFormIncSequence(arr) {
  let sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] + 1 === sorted[i + 1]) continue;
    else return false;
  }
  return true;
}

console.log(canFormIncSequence([17, 15, 20, 19, 21, 16, 18]));
console.log(canFormIncSequence([5, 7, 3, 8, 6]));

// Return the count of possitive integers in and the sum of the negative integers
function getPositiveCountNegativeSum(arr) {
  let positives = [];
  let negatives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      negatives.push(arr[i]);
    } else {
      positives.push(arr[i]);
    }
  }
  return [negatives.reduce((a, b) => a + b), positives.length];
}

console.log(
  getPositiveCountNegativeSum([7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21])
);

// Return highest and lowest in string of numbers
function getHighLowFromString(str) {
  let arr = [];
  str.split(" ").forEach((num) => {
    arr.push(num);
  });
  arr.sort((a, b) => a - b);
  return String(arr[0] + " " + arr.slice(-1)[0]);
}

console.log(getHighLowFromString("22 11 33 44"));

// Check for valid email address
function isEmailAddress(str) {
  const re = new RegExp(/\b[\w-]+@[\w-]+\.[A-Za-z]{2,}\b/);
  return re.test(str);
}

console.log(isEmailAddress("mike1@gmail.com"));
console.log(isEmailAddress("gmail.com"));

// Replace letters with position in alphabet
function swapLettersToAlphabetPosition(str) {
  return str
    .split("")
    .map((char) => char.toLowerCase().charCodeAt(0) - 96)
    .join(" ");
}
console.log(swapLettersToAlphabetPosition("abc"));
console.log(swapLettersToAlphabetPosition("ABC"));
console.log(swapLettersToAlphabetPosition("ZxY"));

// Rolling 4 digit lock
function getNumberOfTurns(current, target) {
  let turns = 0;
  let start = current.toString().split("");
  let targets = target.toString().split("");
  for (let i = 0; i < start.length; i++) {
    let a = Number(start[i]);
    const b = Number(targets[i]);
    while (a != b) {
      if (a < b) {
        a++;
        turns++;
      } else {
        a--;
        turns++;
      }
    }
    console.log(a, b);
  }
  return turns;
}

console.log(getNumberOfTurns(3893, 5296));

// Return reciprocal as float
const floatReciprocol = function (num) {
  let reciprocal = reverseStringBuiltInMethods(num.toString());
  return 1 / parseInt(reciprocal);
};

console.log(floatReciprocol(17));

//////////PART 4////////////////
// Print next 20 leap years
function showNextTwentyLeapYears(current) {
  let leapYears = [];
  let newYear = current + 1;
  let counter = 0;
  while (counter < 20) {
    if (newYear % 4 === 0) {
      if (newYear % 100 === 0) {
      } else if (newYear % 400 === 0) {
        leapYears.push(newYear);
        counter++;
      } else {
        leapYears.push(newYear);
        counter++;
      }
    }
    newYear++;
  }
  return leapYears;
}

console.log(showNextTwentyLeapYears(2021));

// Return longest palindromic substring
function findPalindromicSubstrings(str) {
  let palindromes = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      let temp = str.substring(i, j).toLowerCase();
      if (isPalindrome(temp) && !palindromes.includes(temp)) {
        counter++;
        palindromes.push(temp);
      }
    }
  }
  return palindromes;
}

function getLongestString(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(getLongestString(findPalindromicSubstrings("google")));
console.log(getLongestString(findPalindromicSubstrings("Google")));

// Convert number to hours and minutes
function convertNumToHM(num) {
  let hrs;
  let min;
  let t = "AM"
  let nums = num.toString().split(".");
  hrs = nums[0];
  if (hrs > 24 || hrs >= 13) {
    hrs = hrs - 12;
    t = "PM"
  }
  if (nums.length === 1) {
    min = "00";
  } else {
    min = parseInt(nums[1])
    min = min * 60 
  }
  return hrs + ":" + min.toString().substring(0, 2) + " " + t;
}

console.log(convertNumToHM(8));
console.log(convertNumToHM(14.255));
