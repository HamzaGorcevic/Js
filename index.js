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

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
      console.log(row);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
