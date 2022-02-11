"use strict"

// 1. Написать итерируемый объект для получения чисел фибоначчи. Написать рекурсивную функцию вычисления чисел фибоначчи. Написать мемоизированную функцию высшего порядка для вычисления чисел фибоначчи.

function* fibonachi() {
  let previous = 0;
  let next = 1;
  yield previous;
  yield next;

  while(true) {
    const newNumber = previous + next;
    yield newNumber;
    previous = next;
    next = newNumber;
  }
}

const sequence = fibonachi();
for (let i = 0; i < 20; i++) {
  console.log(sequence.next().value);
}

const recFibo = (n) => {
  if (n < 0) {
    return console.error("Введено некоректное значение")
  } else if (n <= 1) {
    return n;
  } else {
    return recFibo(n-2) + recFibo(n-1)
  }
};

// мемоизированная функция вычисления чисел фибоначчи
function fibMemo(n, cache) {
  cache = cache || [];
  if (n <= 1) {
    return n;
  } else if (cache[n]) {
    return cache[n];
  } else {
    cache[n] = fibMemo(n-2, cache) + fibMemo(n-1, cache);
  }
  return cache[n];
}

//2. Написать функцию которая проверяет, является ли строка палиндромом.

function isPalindrom(str) {
  str = str.toLowerCase().replace(/\s+/g, '');
  let reverseStr = '';
  for (let i = 0; i < str.length; i++) {
    reverseStr += str[(str.length - 1) - i];
  }
  return (str == reverseStr);
}

// 3. Реализовать вычисление, периметра/площади, для треугольника, прямоугольника и круга. Реализовать с помощью функций и с помощью классов.

class Triangle {
  constructor (length1, length2, length3) {
    this.length1 = length1;
    this.length2 = length2;
    this.length3 = length3;
  }
  square() {
    function squareroot(n) {
      let root = 1;
      for (let i = 0; i < n+1; i++) {
        root = (n / root + root) / 2;
      }
      return root;
    }
    let halfPerimetr = (this.length1 + this.length2 + this.length3) / 2;
    let result = halfPerimetr * (halfPerimetr - this.length1) * (halfPerimetr - this.length2) * (halfPerimetr - this.length3);
    let resultSquare = squareroot(result);
    return Math.floor(resultSquare);
  }
  perimeter() {
    return this.length1 + this.length2 + this.length3;
  }
}

class Rectangle {
  constructor (height, width) {
    this.height = height;
    this.width = width;
  }
  square() {
    return this.height * this.width;
  }
  perimeter() {
    return 2 * (this.height + this.width);
  }
}

class Circle {
  constructor (radius) {
    this.radius = radius
  }
  square() {
    return Math.floor(Math.PI * (this.radius ** 2));
  }
  circumference() {
    return Math.ceil(2 * Math.PI * this.radius);
  }
}

let triangle = new Triangle(5, 8, 11);
let rectangle = new Rectangle(20, 50);
let circle = new Circle(10);
console.log("Площадь треугольника " + triangle.square());
console.log("Периметр треугольника " + triangle.perimeter());
console.log("Площадь прямоугольника " + rectangle.square());
console.log("Периметр прямоугольника " + rectangle.perimeter());
console.log("Площадь круга " + circle.square());
console.log("Длина окружности " + circle.circumference());


// 4. Найти минимальный, максимальный элемент массива. Подсчитать количество нулевых, положительных и отрицательных элементов массива. Написать соответствующие рекурсивные функции.

let anyArray = [7, 10, 1, -12, 2, -158, 1000, 3, 4, 5, -132];
console.log(anyArray);
console.log(Math.min.apply(Math, anyArray));
console.log(Math.max.apply(Math, anyArray));

function minNumberArrayRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr[0] > arr[1]) {
    return minNumberArrayRec(arr.slice(1));
  } else {
    return minNumberArrayRec([arr[0]].concat(arr.slice(2)));
  }
}

function maxNumberArrayRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr[0] < arr[1]) {
    return maxNumberArrayRec(arr.slice(1));
  } else {
    return maxNumberArrayRec([arr[0]].concat(arr.slice(2)));
  }
}

let negativeNumber = [];
let currentNegativeArr = 0;
function negativeNumberRec(arr) {
  currentNegativeArr++;
  if (arr[currentNegativeArr] < 0) {
      negativeNumber.push(arr[currentNegativeArr]);
    }
  if (currentNegativeArr > arr.length) {
    return;
  }
  negativeNumberRec(arr);
  return negativeNumber.length;
}

let positiveNumber = [];
let currentPositiveArr = 0;
function positiveNumbersRec(arr) {
  currentPositiveArr++;
  if (arr[currentPositiveArr] > 0) {
    positiveNumber.push(arr[currentPositiveArr]);
  }
  if (currentPositiveArr > arr.length) {
    return;
  }
  
  positiveNumbersRec(arr);
  return positiveNumber.length;
}

let zeroNumber = [];
let currentZeroArr = 0;
function zeroNumbersRec(arr) {
  currentZeroArr++;
  if (arr[currentZeroArr] === 0) {
    zeroNumber.push(arr[currentZeroArr]);
  }
  if (currentZeroArr > arr.length) {
    return;
  }
  positiveNumbersRec(arr);
  return zeroNumber.length;
}

console.log("Минимальное значение = " + minNumberArrayRec(anyArray));
console.log("Максимальное значение = " + maxNumberArrayRec(anyArray));
console.log("Колличество положительных элементов в массиве: " + positiveNumbersRec(anyArray));
console.log("Колличество отрицательных элементов в массиве: " + negativeNumberRec(anyArray));
console.log("Колличество нулевых элементов в массиве: " + zeroNumbersRec(anyArray));

// 5. Написать функцию преобразования целого числа из десятичной системы счисления в двоичную и наоборот.

function converterBinary(number) {
  let result = [];
  while (number > 0) {
    result.unshift(number % 2);
    number = Math.floor(number / 2);
  }
  return result.join('');
}

function converterDecimal(number) {
  if (typeof number === 'number') {
    number = String(number)
  }
  number = number.split('').reverse();
  let result = 0;
  let currentToExponentiation = 0;
  for (let i = 0; i < number.length; i++) {
    number[i] = +number[i] * (2 ** currentToExponentiation);
    result += number[i];
    currentToExponentiation++;
  }
  return result;
}


// 6. Посчитать факториал числа. Написать рекурсивную функцию вычисления факториала числа. Написать мемоизированную функцию высшего порядка для вычисления факториала.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(4));

function recFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * recFactorial(n-1);
  }
}

function memoFactorial(n) {
  let cache = {};
  if (n === 2) {
    return 2;
  } else {
    if (n in cache) {
      return cache[n];
    } else {
      return cache[n] = n * memoFactorial(n-1);
    }
  }
}

// 8. Транспонировать матрицу, сложить две матрицы.

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let matrix2 = [
  [3, 6, 8],
  [3, 2, 1],
  [8, 5, 7]
];
function transMatrix(arr) {
  let resultTransMatrix = [];
  if (arr.length == 0) {
    return false;
  }
  for (let i = 0; i < arr[0].length; i++) {
    resultTransMatrix[i] = [];
    for (let j = 0; j < arr.length; j++)
      resultTransMatrix[i][j] = arr[j][i];
    }
  return resultTransMatrix;
}

function sumMatrix(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result[i] = [];
    for ( let j = 0; j < arr1[0].length; j++) result[i][j] = arr1[i][j]+arr2[i][j];
  }
  return result;
}

// 9. Удалить из матрицы тот столбец который имеет хотя бы один нулевой элемент. Аналогично для строки.
let zeroArrRow = [
  [1, 2, 3],
  [5, 6, 0],
  [9, 6, 3]
];
function deleteZeroRowMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) arr.splice(i, 1);
    }
  }
  return arr;
}

let zeroArrCol = [
  [1, 8, 3],
  [6, 2, 0],
  [5, 6, 3]
];

function deleteZeroColMatrix(arr) {
  return transMatrix(
    transMatrix(arr).filter(
      (column) => !(column.indexOf(0) + 1) && column.reduce((a, b) => a + b) > 0
    )
  );
}
console.log(deleteZeroRowMatrix(zeroArrRow));
console.log(deleteZeroColMatrix(zeroArrCol));

// 10. Написать свою реализацию функций bind, call, map, filter, reduce, forEach.Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции.

Function.prototype.customCall = function(someThis, ...arg){
  let unicID = Date.now().toString();
  someThis[unicID] = this;
  let result = someThis[unicID](...arg);
  delete someThis[unicID];
  return result;
}
Function.prototype.customBind = function(fn) {
  const args = Array.from(arguments).slice(1);
  const self = this;
    return function() {
      return self.customCall(fn, ...args);
    }
}

let a = {c: 42};
function someThis() {
  return this.c;
}
let getName = function getName() {
  return this.name;
}
let obj = {
  name: "Lisa",
  fn: 25
}
console.log(getName.customBind(obj)());
console.log(getName.customCall(obj));
console.log(someThis.customBind(a)());
console.log(someThis.customCall({c: 100}));

let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.customMap = function(callback) {
  let arr = this;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i], i, arr);
  }
  return result;
}

Array.prototype.customFilter = function(callback) {
  let arr = this;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

Array.prototype.customReduce = function(callback, result) {
  let arr = this;
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = arr[0];
  }
  for (; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
}


let arrForEach = ["zero", "one", "twoo", "three", "four"];

Array.prototype.customForEach = function(callback) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
arrForEach.customForEach((element, index, arr) => {
  console.log('a[' + index + '] = ' + element);
});
arrForEach.forEach((element, index, array) => {
  console.log('a[' + index + '] = ' + element);
});
