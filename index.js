// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(b);
//     }
//     return a;
//   };
// }

// function remove(c) {
//   return c;
// }

// console.log(add(5)(2)(), "he;");
// console.log(remove(2));

// function Anagma(word, words) {
//   let nes = words.filter(
//     (el) => el.split("").sort().join() === word.split("").sort().join()
//   );
//   return nes;
// }

// console.log(Check("racer", ["crar", "acerr", "wood", "rain", "rcear"]));
// function myFunction(a, b) {
//   console.log(a[b], "dsad");
//   if (Object.keys(a).includes(b) && a[b]) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(myFunction({ x: "a", b: "b", z: undefined }, "z"));

// function myFunction(a, b) {
//   return { a: b };
// }

// console.log(myFunction("a", "b"));

// function calc(expr) {
//   expr = expr.split(" ");
//   broj = expr[1];
//   operator = expr[2];
//   expr[1] = operator;
//   expr[2] = broj;

//   return eval(expr.join(""));
// }
// console.log(calc("2.5"));

// function calc(expr) {
//   if (expr !== "") {
//     expr.splice(2, 1, expr[2]);
//     return eval(expr.join(""));
//   }
//   return 0;
// }

// calc(["2 3 -"]);

// const sum = () => {
//   console.log(arguments);
//   const args = [...arguments];
//   console.log(args);
//   return args.reduce((a, b) => a + b, 0);
// };

// console.log(sum(0, 2, 10, 12));

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [
//     result.failure.map((el) => `<liclass="text-warning">${el}</li>`),
//   ];
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log(failuresList);

// class Thermostat {
//   constructor(F) {
//     this._temperature = F;
//   }
//   get temperature() {
//     return (this._temperature = (5 / 9) * (this._temperature - 32));
//   }
//   set temperature(updatedF) {
//     this._temperature = updatedF;
//     console.log(this._temperature);
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// console.log(temp);
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// console.log(temp);

// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//       console.log(row);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);
// Setup
// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop === "artist") {
//     records[id][prop] = value;
//   } else if (prop === "tracks") {
//     records[id][prop]
//       ? records[id][prop].push(value)
//       : (records[id][prop] = [value]);
//   } else if (prop === "albumTitle") {
//     records[id][prop] = value;
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, "tracks", "ABBA"));

// Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// // Setup
// let total = 0;
// // Only change code below this line
// for (i of myArr) {
//   total += i;
// }

// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   var nes;
//   contacts.map((el) => {
//     if (el.firstName === name) {
//       if (el.hasOwnProperty(prop)) {
//         nes = el[prop];
//       } else {
//         ("No such property");
//       }
//     }
//     console.log(nes);
//   });

//   // Only change code above this line
// }

// console.log(lookUpProfile("Akira", "likes"), "nes");

// const a = 22;
// const b = 22;
// var c;
// function program() {
//   let a = 66;
//   c = a + b;

//   console.log(c);
// }
// program();

// class Promise {
//   constructor(name, age) {
//     console.log(name, this.age);
//   }
// }

// console.log(new Promise("hamza", 123));
// console.log(new Promise());

// console.log([[[[[[[22]]]]]]] == 22);

// let input = document.querySelector("input");

// input.addEventListener("change", (e) => {
//   let value = e.target.value;
//   max = Math.max(...value);
//   value = value.replace(max, "");
//   value = value[0] + max + value[1];
//   console.log(value, value.split("").reverse().join(""));
// });

// solution in c
// #include <stdio.h>

// int main()
// {
//     int n;
//     printf("unesite broj");
//     scanf("%d",&n);

//     int first ,second,last;
//      first = n / 100;
//      second = n / 10 % 10;
//      last = n % 100 % 10;

//      if(first  > second && first > last){
//          printf("%d%d%d \n",second,first,last);
//          printf("%d%d%d \n",last,first,second);
//      };
//      if(second  > first && second > last){
//     printf("%d%d%d \n",last,second,first);
//     printf("%d%d%d \n",first,second,last);
//      };
//      if(last  > second && last > first){
//     printf("%d%d%d \n",first,last,second);
//     printf("%d%d%d \n",second,last,first);
//      };

//     return 0;
// }
// n = 2;
// for (i = 2; i < 600; i++) {
//   for (j = 0; j < 600; j++) {
//     if (j % i == 0) {
//       console.log(i);
//     }
//   }
// }

// medium exercise from leet code

// function topKFrequent(nums, k) {
//     let mapper = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (mapper.has(nums[i])) {
//             let temp = mapper.get(nums[i]);
//             temp++;
//             mapper.set(nums[i], temp);
//         } else {
//             mapper.set(nums[i], 1);
//         }
//     }
//     const entries = [...mapper.entries()];

//     let sorted = entries.sort((a, b) => b[1] - a[1]);
//     const result = sorted.slice(0, k).map((el) => el[0]);
//     return result;
// }

// console.log(topKFrequent([1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5], 2));

// medium exist exercice
// NOT FINISHED!
// function exist(board, word) {
//     let wordLen = word.length;
//     let path = [];
//     let neigbours = [
//         [-1, 0],
//         [1, 0],
//         [0, 1],
//         [0, -1],
//     ];

//     path = [0, 0];

//     console.log("path", path, wordLen);
//     let l = 0;
//     let attempt = 0;
//     let copy = wordLen;
//     while (wordLen > 0) {
//         while (attempt < 4) {
//             path[0] += neigbours[attempt][0];
//             path[1] += neigbours[attempt][1];
//             attempt++;

//             if (
//                 path[0] > -1 &&
//                 path[1] > -1 &&
//                 path[0] < board.length &&
//                 board[0].length > path[1]
//             ) {
//                 break;
//             }
//         }
//         console.log(board[path[0]][path[1]]);
//         if (board[path[0]][path[1]] == word[l]) {
//             wordLen--;

//             l++;
//         }

//         copy--;
//         if (attempt >= 4) {
//             attempt = 0;
//         }
//         l++;
//     }
//     console.log(wordLen);

//     return wordLen <= 0;
// }

// console.log(
//     exist(
//         [
//             ["A", "B", "C", "E"],
//             ["S", "F", "B", "S"],
//             ["A", "D", "E", "E"],
//         ],
//         "ABCB"
//     )
// );

function isValidSudoku(board) {
    let mapper = new Map();

    let str1 = [];
    let str2 = [];
    let str3 = [];

    board.map((el) => {
        str1.push(el.slice(0, 3));

        str2.push(el.slice(3, 6));
        str3.push(el.slice(6, 9));
    });

    str1.filter((el) => el != ".");
    // console.log(str1);
    // console.log(str2);
    // console.log(str3);

    nes1 = [];
    nes2 = [];
    nes3 = [];

    for (let i = 0; i < 9; i++) {
        if (i % 3 == 0) {
            nes1.push("!");
            nes2.push("!");
            nes3.push("!");
        }
        nes1.push(str1[i]);
        nes2.push(str2[i]);
        nes3.push(str3[i]);
    }
    // console.log(nes1);
    // console.log(nes2);
    // console.log(nes3);
    let counter = 0;
    let niz = [];
    const filteredNes1 = nes1.filter((el) => {
        if (el != "!") {
            return el;
        }
    });

    console.log("NES!", filteredNes1);
}

isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
