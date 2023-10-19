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

// function findId(str) {
//     let niz = [];
//     let setter = true;
//     str.forEach((el, i) => {
//         el.forEach((e) => {
//             if (e != ".") niz.push(e);
//         });

//         if ((i + 1) % 3 == 0) {
//             let helper = new Set(niz);
//             if (niz.length != helper.size) {
//                 setter = false;
//                 return;
//             }
//             niz = [];
//             setter = true;
//             // return;
//         }
//     });
//     return setter;
// }
// function isValidSudoku(board) {
//     let str1 = [];
//     let str2 = [];
//     let str3 = [];

//     board.map((el) => {
//         str1.push(el.slice(0, 3));
//         str2.push(el.slice(3, 6));
//         str3.push(el.slice(6, 9));
//     });
//     for (let i = 0; i < 9; i++) {
//         let niz = [];
//         for (let j = 0; j < 9; j++) {
//             if (board[i][j] != ".") {
//                 niz.push(board[i][j]);
//             }
//         }
//         let help = new Set(niz);
//         if (niz.length != help.size) {
//             return false;
//         }
//     }

//     for (let i = 0; i < 9; i++) {
//         let niz = [];
//         for (let j = 0; j < 9; j++) {
//             if (board[j][i] != ".") {
//                 niz.push(board[j][i]);
//             }
//         }
//         let help = new Set(niz);
//         if (niz.length != help.size) {
//             return false;
//         }
//     }
//     return findId(str1) && findId(str2) && findId(str3);
// }

// console.log(
//     isValidSudoku([
//         ["5", "3", "4", ".", "7", ".", "0", ".", "."],
//         ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//         [".", "9", "8", ".", ".", ".", "9", "6", "."],
//         ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//         ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//         ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//         [".", "6", ".", ".", ".", ".", "2", "8", "."],
//         [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//         [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//     ])
// );

// function longestConsecutive(nums) {
//     if (nums.length == 0) {
//         return 0;
//     }
//     nums = nums.sort((a, b) => a - b);
//     let counter = 0;
//     let mapper = new Map();
//     let nes = 0;
//     console.log(nums);

//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] == nums[i + 1]) {
//             continue;
//         }
//         if (nums[i] + 1 == nums[i + 1]) {
//             counter++;
//             nes++;
//         } else {
//             nes++;
//             mapper.set(counter, counter);
//             counter = 0;
//         }
//     }

//     if (Math.max(...mapper.values()) < counter) {
//         return counter + 1;
//     }
//     return Math.max(...mapper.values()) + 1;
// }

// console.log(longestConsecutive([1, 2, 0, 1]));
// function isValid(s) {
//     const stack = [];
//     let combination = { "(": ")", "{": "}", "[": "]" };
//     let combination2 = { ")": 1, "}": 2, "]": 3 };

//     for (let i = 0; i < s.length; i++) {
//         if (combination[s[i]]) {
//             stack.push(combination[s[i]]);
//         } else if (combination2[s[i]]) {
//             if (stack.pop() != s[i]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(isValid("()"));

// function isOperator(token) {
//     return token === "+" || token === "-" || token === "*" || token === "/";
// }
// function evalRPN(tokens) {
//     const stack = [];
//     let counted = "";
//     for (let i = 0; i < tokens.length; i++) {
//         if (isOperator(tokens[i])) {
//             let temp = stack.pop();
//             counted = eval(
//                 "(" + stack.pop() + ")" + tokens[i] + "(" + temp + ")"
//             );
//             stack.push(counted);
//             console.log("c:", counted);
//             counted = "";
//             continue;
//         }

//         stack.push(tokens[i]);
//     }
//     return parseInt(stack.pop());
// }
// console.log(
//     evalRPN([
//         "-78",
//         "-33",
//         "196",
//         "+",
//         "-19",
//         "-",
//         "115",
//         "+",
//         "-",
//         "-99",
//         "/",
//         "-18",
//         "8",
//         "*",
//         "-86",
//         "-",
//         "-",
//         "16",
//         "/",
//         "26",
//         "-14",
//         "-",
//         "-",
//         "47",
//         "-",
//         "101",
//         "-",
//         "163",
//         "*",
//         "143",
//         "-",
//         "0",
//         "-",
//         "171",
//         "+",
//         "120",
//         "*",
//         "-60",
//         "+",
//         "156",
//         "/",
//         "173",
//         "/",
//         "-24",
//         "11",
//         "+",
//         "21",
//         "/",
//         "*",
//         "44",
//         "*",
//         "180",
//         "70",
//         "-40",
//         "-",
//         "*",
//         "86",
//         "132",
//         "-84",
//         "+",
//         "*",
//         "-",
//         "38",
//         "/",
//         "/",
//         "21",
//         "28",
//         "/",
//         "+",
//         "83",
//         "/",
//         "-31",
//         "156",
//         "-",
//         "+",
//         "28",
//         "/",
//         "95",
//         "-",
//         "120",
//         "+",
//         "8",
//         "*",
//         "90",
//         "-",
//         "-94",
//         "*",
//         "-73",
//         "/",
//         "-62",
//         "/",
//         "93",
//         "*",
//         "196",
//         "-",
//         "-59",
//         "+",
//         "187",
//         "-",
//         "143",
//         "/",
//         "-79",
//         "-89",
//         "+",
//         "-",
//     ])
// );

// medium zagrade backtracking

// function generateParenthesis(n) {
//     let stack = [];
//     let niz = [];

//     function recursive(open, closed) {
//         console.log(open == closed && closed == n);
//         if (open == closed && closed == n) {
//             console.log("we are in");
//             niz.push(stack.join(""));
//             return;
//         }
//         if (open < n) {
//             stack.push("(");
//             recursive(open + 1, closed);
//             stack.pop();
//         }
//         if (closed < open) {
//             stack.push(")");
//             recursive(open, closed + 1);
//             stack.pop();
//         }
//     }
//     recursive(0, 0);
//     return niz;
// }

// console.log(generateParenthesis(3));

// function dailyTemperatures(temperatures) {
//     let answers = [];
//     for (let i = 0; i < temperatures.length; i++) {
//         for (let j = i + 1; j < temperatures.length; j++) {
//             if (temperatures[i] < temperatures[j]) {
//                 answers.push(j - i);
//                 break;
//             }
//         }
//         if (answers.length < i + 1) {
//             answers.push(0);
//         }
//     }
//     return answers;
// }

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// function carFleet(targe, position, speed) {
//     let mapper = new Map();

//     for (let i = 0; i < position.length; i++) {
//         let counted = position[i] + speed[i];
//         if (mapper.has(counted)) {
//             continue;
//         } else {
//             mapper.set(counted, counted);
//         }
//     }
//     console.log(mapper);
//     return mapper.size;
// }

// console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
// console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));

// function largestRectangleArea(heights) {
//     let max = 0;
//     let stack = [];

//     heights.forEach((el, i) => {
//         let start = i;
//         while (stack.length > 0 && stack[stack.length - 1][1] > el) {
//             let [index, height] = stack.pop();
//             start = index;
//             max = Math.max(max, height * (i - index));
//         }
//         stack.push([start, el]);
//     });
//     for (let [i, el] of stack) {
//         max = Math.max(max, el * (heights.length - i));
//     }
//     return max;
// }
// console.log(largestRectangleArea([2, 4]));

// function twoSum(numbers, target) {
//     let last = numbers.length - 1;
//     let niz = [];

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             console.log(i != j, target, "==", numbers[i], numbers[j]);
//             if (i != j && numbers[i] + numbers[j] == target) {
//                 return [i + 1, j + 1];

//             }
//         }
//     }
//     return niz;
// }

// console.log(twoSum([2, 7, 1, 2, 4], 9));

// threesum O(n^3) , bad solution
// function threeSum(nums) {
//     let niz = [];
//     let mapper = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             for (let k = 0; k < nums.length; k++) {
//                 if (
//                     nums[i] + nums[j] + nums[k] == 0 &&
//                     i != j &&
//                     j != k &&
//                     i != k
//                 ) {
//                     let temp = [i, j, k].sort((a, b) => a - b).join("");
//                     let helper = [nums[i], nums[j], nums[k]]
//                         .sort((a, b) => a - b)
//                         .join(",");

//                     if ([...mapper.values()].includes(helper)) {
//                         continue;
//                     } else {
//                         mapper.set(temp, helper);
//                         let help = [];
//                         for (let i of helper.split(",")) {
//                             help.push(parseInt(i));
//                         }
//                         niz.push(help);
//                         help = [];
//                     }
//                     temp = "";
//                     helper = "";
//                 }
//             }
//         }
//     }
//     return niz;
// }

// function threeSum(nums) {
//     let niz = [];

//     const target = 0;

//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] == nums[i - 1]) {
//             // console.log(nums[i], nums[i - 1]);
//             continue;
//         }
//         // console.log(nums[i]);
//         let l = i + 1;

//         let r = nums.length - 1;

//         while (l < r) {
//             console.log(l, r);
//             let sum = nums[i] + nums[l] + nums[r];
//             if (sum < 0) {
//                 l++;
//             } else if (sum > 0) {
//                 r--;
//             } else {
//                 niz.push([nums[i], nums[l], nums[r]]);
//                 l++;
//                 while (l < r && nums[l] === nums[l - 1]) l++;
//             }
//         }
//     }

//     return niz;
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// max area exercise
// function maxArea(height) {
//     let l = 0;
//     let r = height.length - 1;
//     let max = 0;
//     let mapper = new Map();

//     for (let i = 0; i < height.length; i++) {
//         mapper.set(i, height[i]);
//     }

//     while (l < r) {
//         console.log(height[l], height[r]);
//         let width = r - l;
//         let counted = Math.min(height[l], height[r]) * width;

//         max = Math.max(counted, max);

//         if (height[l] < height[r]) {
//             l++;
//         } else {
//             r--;
//         }
//     }
//     return max;
// }
// console.log(maxArea([1, 8, 100, 2, 100, 4, 8, 3, 7]));
// function trap(height: number[]): number {
//     let l = 0;
//     let r = height.length - 1;
//     let leftMax = 0;
//     let rightMax = 0;
//     let trapped = 0;

//     while (l < r) {
//         if (height[l] < height[r]) {
//             if (height[l] > leftMax) {
//                 leftMax = height[l];
//             } else {
//                 trapped += leftMax - height[l];
//             }
//             l++;
//         } else {
//             if (height[r] > rightMax) {
//                 rightMax = height[r];
//             } else {
//                 trapped += rightMax - height[r];
//             }
//             r--;
//         }
//     }
//     return trapped;
// }
// let height = [4, 2, 3, 5, 1, 9, 9, 6];

// console.log(trap(height));

// let bd = document.querySelector("body");
// for (let i = 0; i < height.length; i++) {
//     let div = document.createElement("div");
//     div.style.width = "50px";
//     div.style.background = "red";
//     div.style.border = "1px solid black";
//     div.innerHTML = `${height[i]}`;
//     div.style.height = `${height[i] * 80}px`;
//     bd.append(div);
// }

// function threeSum(nums) {
//     let niz = [];

//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] == nums[i - 1]) {
//             continue;
//         }

//         let l = i + 1;
//         let r = nums.length - 1;
//         console.log(i, nums[i]);
//         while (l < r) {
//             let sum = nums[i] + nums[l] + nums[r];
//             console.log(nums[i], nums[l], nums[r], sum);
//             if (sum > 0) {
//                 r--;
//             } else if (sum < 0) {
//                 l++;
//             } else {
//                 niz.push([nums[i], nums[l], nums[r]]);
//                 l++;
//             }
//         }
//     }

//     return niz;
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// let arr = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60],
// ];

// console.log(...arr);
// function searchMatrix(matrix, target) {
//     let l = 0;
//     let r = matrix.length - 1;
//     let checker = false;

//     while (l <= r) {
//         let m = (l + r) / 2;

//         let result = matrix[m].reduce((a, b) => a + b, 0);
//         for (let i = 0; i < matrix[m].length; i++) {
//             if (matrix[m][i] == target) {
//                 reutrn true
//             }
//         }
//         if (result < target) {
//             l = m + 1;
//         } else {
//             r = m - 1;
//         }
//     }
//     return checker;
// }

// console.log(
//     searchMatrix([
//         [1, 3, 5, 7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 60],
//     ])
// );

// let arr = [
//     [1, 4],
//     [3, 4],
//     [3, 10],
// ];
// let result = [1, k10];
// function solution(arr) {
//     let value = [];

//     if (
//         arr[0][0] != arr[1][0] &&
//         arr[0][0] != arr[2][1] &&
//         arr[0][0] != arr[1][0]
//     ) {
//         value.push(arr[0][0]);
//     } else {
//         value.push(arr[1][0]);
//     }

//     console.log(value);
// }
// console.log(solution(arr));

// let given = [
//     [1, 3, 1],
//     [3, 5, 0],
//     [5, 4, 0],
//     [2, 5, 0],
// ];

// function solution(given, n) {
//     let mapper = new Map(Array.from({ length: n }, (_, i) => [i + 1, "?"]));
//     let i = 2;
//     while (i > 0) {
//         i--;
//         for (let i of given) {
//             if (i[2] === 1) {
//                 mapper.set(i[0], "O");
//                 mapper.set(i[1], "O");
//             } else {
//                 if (mapper.get(i[0]) == "O") {
//                     mapper.set(i[1], "X");
//                 } else if (mapper.get(i[1] == "O")) {
//                     mapper.set(i[0], "X");
//                 }
//             }
//         }
//     }
//     let string = "";
//     for (i of mapper.values()) {
//         string += i;
//     }
//     return string;
// }

// //

// given = [
//     [5, 6, 0],
//     [1, 3, 1],
//     [1, 5, 0],
//     [7, 6, 0],
//     [3, 7, 1],
//     [2, 5, 0],
// ];

// console.log("returend ", solution(given, 7));

// #include <iostream>
// #include <vector>
// #include <unordered_map>
// #include <string>

// using namespace std;

// string solution(vector<vector<int>>& given, int n) {
//     unordered_map<int, char> mapper;
//     for (int i = 1; i <= n; i++) {
//         mapper[i] = '?';
//     }

//     int i = 2;
//     while (i > 0) {
//         i--;
//         for (auto& item : given) {
//             int x = item[0];
//             int y = item[1];
//             int z = item[2];

//             if (z == 1) {
//                 mapper[x] = 'O';
//                 mapper[y] = 'O';
//             } else {
//                 if (mapper[x] == 'O') {
//                     mapper[y] = 'X';
//                 } else if (mapper[y] == 'O') {
//                     mapper[x] = 'X';
//                 } else if (mapper[y] == '?' && mapper[x] == 'O') {
//                     mapper[y] = 'X';
//                 } else if (mapper[x] == '?' && mapper[y] == 'O') {
//                     mapper[x] = 'X';
//                 }
//             }
//         }
//     }

//     string result = "";
//     for (int i = 1; i <= n; i++) {
//         result += mapper[i];
//     }

//     return result;
// }

// function solution(delivery, n) {
//     let obj = {};

//     for (let i = 1; i <= n; i++) {
//         obj[i] = [0];
//     }

//     for (let i = 0; i < delivery.length; i++) {
//         if (obj.hasOwnProperty(delivery[i][0])) {
//             let help = obj[delivery[i][0]];

//             if (delivery[i][1] == -1) {
//                 help.pop();
//             } else {
//                 help.push(delivery[i][1]);
//             }
//             obj[delivery[i][0]] = help;
//         }
//     }
//     console.log(obj);

//     let sortedArray = Object.keys(obj).sort(
//         (a, b) => obj[b][obj[b].length - 1] - obj[a][obj[a].length - 1]
//     );

//     return sortedArray.map(Number);
// }

// console.log(
//     solution(
//         [
//             [4, 120],
//             [3, 200],
//             [4, 220],
//             [4, 150],
//             [4, 250],
//             [2, 150],
//             [4, -1],
//             [4, -1],
//             [2, 200],
//             [4, 300],
//             [4, 200],
//             [2, 150],
//             [4, -1],
//             [2, -1],
//             [4, 100],
//             [4, -1],
//             [3, -1],
//             [2, -1],
//             [4, -1],
//             [4, -1],
//         ],

//         4
//     )
// );

// function solution(n, arr) {
//     let matrix = [];
//     let helper = [];

//     for (let i = 0; i < arr.length; i++) {
//         helper.push(arr[i]);
//         if (helper.length === n) {
//             matrix.push(helper);
//             helper = [];
//         }
//     }
//     let levels = separate(n);
//     console.log(levels);

//     let x = Math.floor(n / 2);
//     let y = Math.floor(n / 2);
//     let visited = [];
//     for (let i = 0; i < n; i++) {
//         visited[i] = [];
//         for (let j = 0; j < n; j++) {
//             visited[i][j] = false;
//         }
//     }

//     visited[x][y];

//     let sum = matrix[x][y];
//     function check(x, y) {
//         let directions = [
//             [1, 0],
//             [0, 1],
//             [-1, 0],
//             [0, -1],
//         ];

//         let min = 999;
//         let helpX, helpY;

//         for ([i, j] of directions) {
//             let novix = x + i;
//             let noviy = y + j;

//             if (novix < 0 || novix >= n || noviy < 0 || noviy >= n) {
//                 return sum;
//             }

//             // Calculate the maximum steps in the X and Y directions
//             let maxXSteps = Math.abs(novix - x);
//             let maxYSteps = Math.abs(noviy - y);

//             // Calculate the minimum of maxXSteps and maxYSteps
//             let minSteps = Math.min(maxXSteps, maxYSteps);

//             if (
//                 min > matrix[novix][noviy] &&
//                 !visited[novix][noviy] &&
//                 novix != noviy
//             ) {
//                 visited[novix][noviy] = true;
//                 min = matrix[novix][noviy];
//                 helpX = novix;
//                 helpY = noviy;
//             }
//         }

//         sum += min;
//         return check(helpX, helpY);
//     }

//     return check(x, y);
// }

// const random7x7Array = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
// ];

// const Matricerandom7x7Array = [
//     1, 2, 3, 4, 1, 6, 7, 8, 9, 0, 2, 1, 3, 4, 5, 6, 7, 3, 0, 1, 5, 2, 3, 2, 5,
//     6, 1, 8, 9, 0, 5, 0, 3, 1, 8, 0, 7, 8, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0,
// ];
// const arr = [
//     9, 3, 9, 9, 9, 5, 2, 7, 8, 9, 8, 1, 5, 8, 9, 6, 1, 8, 7, 9, 9, 9, 8, 9, 9,
// ];

// console.log(solution(5, arr));

// function separate(n) {
//     const nizNivoa = [];

//     for (let i = 0; i < n / 2; i++) {
//         let level = "";
//         for (let j = i; j < n - i; j++) {
//             level += i;
//             level += j + ",";
//             // level.push([i, j]);
//         }
//         for (let j = i + 1; j < n - i - 1; j++) {
//             level += j;
//             level += n - i - 1 + ",";
//             // level.push([j, n - i - 1]);
//         }
//         for (let j = n - i - 1; j >= i; j--) {
//             level += n - i - 1;
//             level += j + ",";
//             // level.push([n - i - 1, j]);
//         }
//         for (let j = n - i - 2; j > i; j--) {
//             level += j;
//             level += i + ",";
//             // level.push([j, i]);
//         }
//         nizNivoa.push(level);
//     }

//     return nizNivoa;
// }

//lg

//

// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */

// var searchMatrix = function (matrix, target) {
//     let l = 0;
//     let r = matrix.length - 1;

//     while (l <= r) {
//         let m = Math.floor((l + r) / 2);
//         let result = matrix[m][0];
//         let lI = 0;
//         let rI = matrix[m].length - 1;
//         while (lI <= rI) {
//             let mI = Math.floor((lI + rI) / 2);
//             console.log(mI);
//             if (matrix[m][mI] < target) {
//                 lI = mI + 1;
//             } else if (matrix[m][mI] > target) {
//                 rI = mI - 1;
//             } else {
//                 return true;
//             }
//         }

//         if (result < target) {
//             l = m + 1;
//         } else if (result > target) {
//             r = m - 1;
//         } else {
//             return true;
//         }
//     }

//     return false;
// };

// console.log("result is=", searchMatrix([[1]], 0));

// var minEatingSpeed = function (piles, h) {
//     let l = 0;
//     let r = Math.max(...piles);

//     while (l < r) {
//         let m = Math.floor((r + l) / 2);
//         let counter = 0;
//         for (let i of piles) {
//             counter += Math.ceil(i / m);
//         }

//         if (counter > h) {
//             l = m + 1;
//         } else {
//             r = m - 1;
//         }
//     }
//     return l;
// };

// console.log(minEatingSpeed([3, 6, 7, 11], 8));

//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/

// var search = function (nums, target) {
//     let l = 0;
//     let r = nums.length - 1;
//     if (nums[0] == target) {
//         return 0;
//     }

//     while (l <= r) {
//         let m = Math.floor((l + r) / 2);
//         if (nums[m] == target) {
//             return m;
//         }
//         if (nums[l] < nums[m]) {
//             if (target < nums[l] || target > nums[m]) {
//                 l = m + 1;
//             } else {
//                 r = m - 1;
//             }
//         } else {
//             if (target == nums[r]) {
//                 return r;
//             }
//             if (target > nums[r] || target < nums[m]) {
//                 r = m - 1;
//             } else {
//                 l = m + 1;
//             }
//         }
//     }
//     return -1;
// };
// console.log(search([5, 1, 2, 3, 4], 1));

// class TimeMap {
//     constructor() {
//         this.mapper = new Map();
//     }

//     set(key, value, timeStamp) {
//         if (this.mapper.has(key)) {
//             let temp = this.mapper.get(key);
//             temp.push([value, timeStamp]);
//         } else {
//             this.mapper.set(key, [[value, timeStamp]]);
//         }

//         // arr.push({key:[value,timeStamp]})
//     }
//     get(key, timeStamp) {
//         if (this.mapper.has(key)) {
//             let temp = this.mapper.get(key);
//             let l = 0;
//             let r = temp.length - 1;
//             let min = ["", 999];
//             if (temp[0][1] > timeStamp) {
//                 return "";
//             }
//             while (l <= r) {
//                 let m = Math.floor((l + r) / 2);

//                 if (temp[m][1] <= timeStamp) {
//                     min = [temp[m][0], Math.min(min[1], temp[m][1])];
//                     l = m + 1;
//                 } else if (temp[m][1] > timeStamp) {
//                     r = m - 1;
//                 }
//             }
//             return min[0];
//         } else {
//             return "";
//         }
//     }
// }

// const testinTime = new TimeMap();
// testinTime.set("foo", "bar", 1);
// testinTime.get("foo", 1);

// testinTime.get("foo", 3);
// testinTime.set("foo", "bar2", 4);
// testinTime.get("foo", 4);

// testinTime.get("foo", 5);
// testinTime.set("foo", "zigzag", 7);
// testinTime.set("foo", "conundrum", 8);
// testinTime.set("foo", "hyperbole", 9);
// testinTime.set("foo", "silhouette", 10);

// testinTime.set("foo", "blasphemy", 11);

// console.log(testinTime.get("foo", 13));

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function (nums1, nums2) {
//     let merged = [];
//     let i = 0,
//         j = 0;

//     while (i < nums1.length && j < nums2.length) {
//         if (nums1[i] < nums2[j]) {
//             merged.push(nums1[i++]);
//         } else {
//             merged.push(nums2[j++]);
//         }
//     }

//     while (i < nums1.length) merged.push(nums1[i++]);
//     while (j < nums2.length) merged.push(nums2[j++]);

//     let mid = Math.floor(merged.length / 2);
//     if (merged.length % 2 === 0) {
//         return (merged[mid - 1] + merged[mid]) / 2;
//     } else {
//         return merged[mid];
//     }
// };
// console.log(findMedianSortedArrays([3], [-2, -1]));

// function createCounter(n) {
//     return function () {
//         return ++n;
//     };
// }

// Window Sliding Technique is a computational technique which aims to reduce the use of nested loop and replace it with a single loop, thereby reducing the time complexity.
// The Sliding window technique can reduce the time complexity to O(n).
// console.log(createCounter(createCounter(10)())());

// var maxProfit = function (prices) {
//     let min = prices[0];
//     let overall = 0;

//     for (let i = 0; i < prices.length; i++) {
//         if (min > prices[i]) {
//             min = prices[i];
//         } else if (prices[i] - min > overall) {
//             overall = prices[i] - min;
//         }
//     }

//     return overall;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4], 2));

// function sumOfK(prices, k) {
//     let sum = 0;
//     let max = 0;
//     for (let j = 0; j < k; j++) {
//         sum += prices[j];
//         max = sum;
//     }

//     console.log(sum);
//     for (let i = k; i < prices.length; i++) {
//         sum += prices[i] - prices[i - k];

//         if (sum > max) {
//             max = sum;
//         }
//     }

//     return max;
// }

// console.log(sumOfK([3, 4, 1, 6, 8, 9, 2, 3], 3));
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//     let checker = new Set();
//     let leng = 0;
//     let left = 0;
//     let max = 0;

//     for (let i = 0; i < s.length; i++) {
//         while (checker.has(s[i])) {
//             checker.delete(s[left]);
//             left++;
//         }
//         checker.add(s[i]);
//         console.log(checker);
//         max = Math.max(max, checker.size);
//     }

//     return max;
// };

// console.log(lengthOfLongestSubstring("dvdf"));
// unfinished
// var characterReplacement = function (s, k) {
//     let l = 0;
//     let r = 0;
//     let dict = {};
//     let max = 0;

//     for (r = 0; r < s.length; r++) {
//         dict[s[r]] = dict[s[r]] + 1 || 1;
//         max = Math.max(max, dict[s[r]]);

//         if (r - l + 1 - max > k) {
//             dict[s[l]]--;
//             l++;
//         }
//     }
//     return r - l;
// };

// // console.log(characterReplacement("ABAB", 1));

// function charRelacement(s, k) {
//     let obj = {};

//     let max = 0;

//     let l = 0;
//     let r = 0;

//     for (r = 0; r < s.length; r++) {
//         obj[s[r]] = obj[s[r]] + 1 || 1;
//         max = Math.max(max, obj[s[r]]);
//         if (r + 1 - l - max > k) {
//             obj[s[l]]--;
//             l++;
//         }
//     }

//     return r - l;
// }

// console.log(charRelacement("AABABBB", 2));
// return 4

//bad solution

// function customCharCodeAt(str, index) {
//     const char = str[index];
//     let modifiedValue = 0;

//     switch (char) {
//         case "a":
//             modifiedValue = str.charCodeAt(index) + 100;
//             break;
//         case "b":
//             modifiedValue = str.charCodeAt(index) - 10;
//             break;
//         case "c":
//             modifiedValue = str.charCodeAt(index) + 200;
//             break;
//         case "d":
//             modifiedValue = str.charCodeAt(index) - 20;
//             break;
//         case "e":
//             modifiedValue = str.charCodeAt(index) + 300;
//             break;
//         case "f":
//             modifiedValue = str.charCodeAt(index) - 30;
//             break;
//         case "g":
//             modifiedValue = str.charCodeAt(index) + 400;
//             break;
//         case "h":
//             modifiedValue = str.charCodeAt(index) - 40;
//             break;
//         case "i":
//             modifiedValue = str.charCodeAt(index) + 500;
//             break;
//         case "j":
//             modifiedValue = str.charCodeAt(index) - 50;
//             break;
//         case "k":
//             modifiedValue = str.charCodeAt(index) + 601;
//             break;
//         case "l":
//             modifiedValue = str.charCodeAt(index) - 60;
//             break;
//         case "m":
//             modifiedValue = str.charCodeAt(index) + 700;
//             break;
//         case "n":
//             modifiedValue = str.charCodeAt(index) - 70;
//             break;
//         case "o":
//             modifiedValue = str.charCodeAt(index) + 800;
//             break;
//         case "p":
//             modifiedValue = str.charCodeAt(index) - 80;
//             break;
//         case "q":
//             modifiedValue = str.charCodeAt(index) + 900;
//             break;
//         case "r":
//             modifiedValue = str.charCodeAt(index) - 90;
//             break;
//         case "s":
//             modifiedValue = str.charCodeAt(index) + 1000;
//             break;
//         case "t":
//             modifiedValue = str.charCodeAt(index) - 100;
//             break;
//         case "u":
//             modifiedValue = str.charCodeAt(index) + 1100;
//             break;
//         case "v":
//             modifiedValue = str.charCodeAt(index) - 110;
//             break;
//         case "w":
//             modifiedValue = str.charCodeAt(index) + 1200;
//             break;
//         case "x":
//             modifiedValue = str.charCodeAt(index) - 120;
//             break;
//         case "y":
//             modifiedValue = str.charCodeAt(index) + 1300;
//             break;
//         case "z":
//             modifiedValue = str.charCodeAt(index) - 130;
//             break;

//         default:
//             modifiedValue = str.charCodeAt(index); // Use the default value for other characters
//     }

//     return modifiedValue;
// }

// var checkInclusion = function (s1, s2) {
//     let sum = 0;
//     for (let i = 0; i < s1.length; i++) {
//         sum += customCharCodeAt(s1, i);
//     }

//     console.log(sum);
//     for (let i = 0; i < s2.length; i++) {
//         let newSum = 0;

//         for (let j = i; j < i + s1.length; j++) {
//             newSum += customCharCodeAt(s2, j);
//         }
//         if (newSum - sum === 0) {
//             return true;
//         }
//     }
//     return false;
// };

// console.log(checkInclusion("kitten", "sitting"));

// linked lists

// merge two linked list
// function ListNode(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
// }

// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function (list1, list2) {
//     if (list1 == null) {
//         return list2;
//     } else if (list2 == null) {
//         return list1;
//     } else if (list2.val > list1.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// };

// // senior S Eng interview , https://www.youtube.com/watch?v=yju4zwKSriI

// class Dictonary {
//     constructor(wordsARray) {
//         this.dict = wordsARray;
//     }

//     isInDict(word) {
//         return this.dict.some((dictWord) => {
//             const regexTemplate = word.replaceAll("*", ".");
//             const regex = new RegExp(`^${regexTemplate}`);
//             return regex.test(dictWord);
//         });
//     }
// }
// const test = new Dictonary(["cat", "bat", "dog"]);

// console.log("returned val", test.isInDict("*a*"));

// linked list

// function ListNode(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
// }

// /**
//  * @param {ListNode} head
//  * @return {void} Do not return anything, modify head in-place instead.
//  */
// var reorderList = function (head) {
//     if (!head) {
//         return;
//     }
//     let stack = [];
//     let follower = head;
//     while (follower) {
//         stack.push(follower);
//         follower = follower.next;
//     }
//     let len = stack.length;
//     follower = head;
//     for (let i = 0; i < len; i++) {
//         if (i % 2 == 0) {
//             follower.next = stack.shift();
//         } else {
//             follower.next = stack.pop();
//         }
//         follower = follower.next;
//         console.log(follower.val);
//     }
//     follower.next = null;
//     console.log(head);
// };
// const nodeList = new ListNode(
//     1,
//     new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );

// // console.log(reorderList(nodeList));

// var removeNthFromEnd = function (head, n) {
//     let temp = head;
//     let i = 0;
//     while (temp != null) {
//         i++;
//         temp = temp.next;
//     }
//     temp = head;
//     let cnt = 0;
//     if (temp.next == null) {
//         return head;
//     }
//     while (temp) {
//         if (cnt == i - n - 1) {
//             temp.next = temp.next.next;
//         } else {
//             temp = temp.next;
//         }
//         cnt++;
//     }
//     // console.log(head);
// };
// removeNthFromEnd(nodeList, 2);

// add two linked lists as integers first attemp;
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
    let str1 = "";
    let str2 = "";

    while (l1) {
        str1 += l1.val;
        l1 = l1.next;
    }
    while (l2) {
        str2 += l2.val;
        l2 = l2.next;
    }

    str1 =
        str1.split("").reverse().join("") +
        "+" +
        str2.split("").reverse().join("");
    let result = "" + eval(str1);
    result = result.split("").reverse();

    // Initialize the linkedResult with the first digit.
    let linkedResult = new ListNode(parseInt(result[0]));
    let current = linkedResult;

    // Loop through the rest of the digits and create new nodes.
    for (let i = 1; i < result.length; i++) {
        let temp = new ListNode(parseInt(result[i]));
        current.next = temp;
        current = current.next;
    }

    return linkedResult;
};
//
\/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let mapper = new Map;
    while(head){
        if(mapper.get(head)){
            return true;
        }else{
            mapper.set(head,true)
        }
        head = head.next;
    }
    return false;
    
};