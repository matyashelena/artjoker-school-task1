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
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return recFibo(n-2) + recFibo(n-1)
  }
};
console.log(recFibo(19));

// мемоизированная функция высшего порядка для вычисления чисел фибоначчи

function memo(fun){
    let cache = {}
    return function (n){
        if (cache[n] != undefined ) {
          return cache[n];
        } else {
          let result = fun(n);
          cache[n] = result;
          return result;
        }
    }
}
const fiboMemoFunction = memo(recFibo);
console.log(fiboMemoFunction(19));

//2. Написать функцию которая проверяет, является ли строка палиндромом.

function isPalindrom(str) {
  str = str.toLowerCase().replace(/\s+/g, '');
  if (str == str.split('').reverse().join('')) {
    return "Yes, it is Palindrom"
  } else {
    return "No, it is not Palindrom"
  }
}
console.log(isPalindrom('А роза упала на лапу Азора'));

// 3. Реализовать вычисление, периметра/площади, для треугольника, прямоугольника и круга. Реализовать с помощью функций и с помощью классов.

class Triangle {
  constructor (base, length1, length2, length3) {
    this.base = base;
    this.length1 = length1;
    this.length2 = length2;
    this.length3 = length3;
  }
  square() {
    return (this.base * this.length1) / 2;
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
let triangle = new Triangle(10, 25, 15, 12);
let rectangle = new Rectangle(20, 50);
let circle = new Circle(10);
console.log("Площадь треугольника " + triangle.square());
console.log("Периметр треугольника " + triangle.perimeter());
console.log("Площадь прямоугольника " + rectangle.square());
console.log("Периметр прямоугольника " + rectangle.perimeter());
console.log("Площадь круга " + circle.square());
console.log("Длина окружности " + circle.circumference());


// 4. Найти минимальный, максимальный элемент массива. Подсчитать количество нулевых, положительных и отрицательных элементов массива. Написать соответствующие рекурсивные функции.

let arr = [7, 10, 1, -12, 2, -158, 1000, 3, 4, 5, -132];
let minNumber = arr[0];
let currentMinArr = 1;
function minNumberArrayRec() {
  currentMinArr++;
  if (arr[currentMinArr] < minNumber) {
    minNumber = arr[currentMaxArr];
  }

  if (currentMinArr > arr.length) return;
  minNumberArrayRec();
  return minNumber;
}

let maxNumberRec = arr[0];
let currentMaxArr = 0;
function maxNumberArrayRec() {
  currentMaxArr++;
  if (arr[currentMaxArr] > maxNumberRec) {
    maxNumberRec = arr[currentMaxArr];
  }

  if (currentMaxArr > arr.length) return;
  maxNumberArrayRec();
  return maxNumberRec;
}

console.log("Минимальное значение = " + minNumberArrayRec());
console.log("Максимальное значение = " + maxNumberArrayRec());

let negativeNumber = [];
let currentNegativeArr = 0;
function negativeNumberRec() {
  currentNegativeArr++;
  if (arr[currentNegativeArr] < 0) {
      negativeNumber.push(arr[currentNegativeArr]);
    }

  if (currentNegativeArr > arr.length) return;
  negativeNumberRec();
  return negativeNumber.length;
}
console.log("Колличество элементов чисел в массиве: " + negativeNumberRec());

let positiveNumber = [];
let currentPositiveArr = 0;
function positiveNumbersRec() {
  currentPositiveArr++;
  if (arr[currentPositiveArr] > 0) {
    positiveNumber.push(arr[currentPositiveArr]);
  }
  if (currentPositiveArr > arr.length) return;
  positiveNumbersRec();
  return positiveNumber.length;
}
console.log("Колличество положительных элементов в массиве: " + positiveNumbersRec());

let zeroNumber = [];
let currentZeroArr = 0;
function zeroNumbersRec() {
  currentZeroArr++;
  if (arr[currentZeroArr] > 0) {
    zeroNumber.push(arr[currentZeroArr]);
  }
  if (currentZeroArr > arr.length) return;
  positiveNumbersRec();
  return zeroNumber.length;
}
console.log("Колличество нулевых элементов в массиве: " + zeroNumbersRec());

// 5. Написать функцию преобразования целого числа из десятичной системы счисления в двоичную и наоборот.

function converterBinary(n) {
  let result = [];
  while (n > 0) {
    result.unshift(n % 2);
    n = Math.floor(n / 2);
  }
  return result.join('');
}

function converterDecimal(n) {
  if (typeof n === 'number') {
    n = String(n)
  }
  n = n.split('').reverse();
  let result = 0;
  let degree = 0;
  for (let i = 0; i < n.length; i++) {
    n[i] = +n[i] * (2 ** degree);
    result += n[i];
    degree++;
  }
  return result;
}

console.log(converterBinary(25));
console.log((25).toString(2));
console.log(converterDecimal(11001));
console.log(converterDecimal(1000))
console.log((8).toString(2));
console.log(parseInt(11001, 2));


// 6. Посчитать факториал числа. Написать рекурсивную функцию вычисления факториала числа. Написать мемоизированную функцию высшего порядка для вычисления факториала.

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
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
console.log(recFactorial(10));

const memoFactorial = memo(recFactorial);
console.log(memoFactorial(10));

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
  for (let i = 0; i < arr[0].length; i++) {
    resultTransMatrix[i] = [];
    for (let j = 0; j < arr.length; j++)
      resultTransMatrix[i][j] = arr[j][i];
    }
  return resultTransMatrix;
}
console.log(transMatrix(matrix1));

function sumMatrix(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result[i] = [];
    for ( let j = 0; j < arr1[0].length; j++) result[i][j] = arr1[i][j]+arr2[i][j];
  }
  return result;
}
console.log(sumMatrix(matrix1, matrix2));

// 8. Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы над и под главной диагональю.

 let matrix = [
   [24, 38, 0, 10],
   [12, 0, 72, 136],
   [99, 16, 33, 0],
   [458, 11, 0, 1]
 ];

 function averageAboveValue(arr) {
  let result = [];
   for (const n in arr) {
    result.push(...arr[n]
      .filter((element, index) => n < index));
  }
  return result;
 }
let resultAboveArray = averageAboveValue(matrix);

 function averageUnderValue(arr) {
  let result = [];
  let sum = 0;
  for (const n in arr) {
    result.push(...arr[n].filter((element, index) => n > index));
  }
  return result;
 }
let resultUnderArray = averageUnderValue(matrix);

 function sumMeanElemMatrix(arrResult) {
   let sum = 0;
   let meanValue = 0;
   for (let i = 0; i < arrResult.length; i++) {
     sum += arrResult[i];
   }
   meanValue = Math.round(sum / arrResult.length);

  return ["Сумма " + sum, "Среднее значение " + meanValue];
 }

 function zeroMatrix(arr) {
   let result = [];
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[0].length; j++) {
       if (arr[i][j] == 0) {
         result.push(arr[i][j]);
       }
     }
   }
   return result.length;
 } 
console.log(zeroMatrix(matrix));
console.log(resultAboveArray);
console.log(sumMeanElemMatrix(resultAboveArray));
console.log(resultUnderArray);
console.log(sumMeanElemMatrix(resultUnderArray));

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

function customBind(fn, context) {
  return function() {
    let unic = Date.now().toString();
    context[unic] = fn;
    let result = context[unic]();
    delete context[unic];
    return result;
  };
}

function customCall(fn, context, ...arg) {
  let unic= Date.now().toString();
  context[unic] = fn;
  let result = context[unic](...arg);
  delete context[unic];
  return result;
}
function getName() {
  return this.name;
}
let obj = {
  name: "Lisa",
  fn: 25
}
let getNameMyBind = customBind(getName, obj);
console.log(getNameMyBind());
console.log(customCall(getName, obj));

function customMap() {
  let a = [1, 2, 3, 4, 5];
  let b = [];
  for (let i = 0; i < a.length; i++) {
    b[i] = a[i] + 1;
  }
  return b;
}

function customFilter() {
  let a = [1, -1, 2, 3, -3, 4, 5, -5];
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= 0) b.push(a[i]);
  }
  return b;
}

function customReduce() {
  let a = [1, 2, 3, 4, 5];
  let sum = 0;
  for (const n of a) {
    sum += n;
  }
  return sum;
}

let arrForEach = ["zero", "one", "twoo", "three", "four"];
function customForEach(arr) {
  for (let i = 0; i < arr.length; i++) {
     console.log(`index ${i}: ${arr[i]}`);
  }
  return "it is custom forEach";
}
console.log(customForEach(arrForEach));