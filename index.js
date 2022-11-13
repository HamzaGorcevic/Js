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

let input = document.querySelector("input");

input.addEventListener("change", (e) => {
  let value = e.target.value;
  max = Math.max(...value);
  value = value.replace(max, "");
  value = value[0] + max + value[1];
  console.log(value, value.split("").reverse().join(""));
});

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
