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
console.log(recFibo(19));
console.log(recFibo(20));

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
console.log(fibMemo(20));

//2. Написать функцию которая проверяет, является ли строка палиндромом.

function isPalindrom(str) {
  str = str.toLowerCase().replace(/\s+/g, '');
   return (str == str.split('').reverse().join(''));
}
console.log(isPalindrom('А роза упала на лапу Азора'));
console.log(isPalindrom("hello"));

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

let arr = [7, 10, 1, -12, 2, -158, 1000, 3, 4, 5, -132];
let minNumber = arr[0];
let currentMinArr = 1;
function minNumberArrayRec() {
  currentMinArr++;
  if (arr[currentMinArr] < minNumber) {
    minNumber = arr[currentMaxArr];
  }

  if (currentMinArr > arr.length) {
    return;
  }
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

  if (currentMaxArr > arr.length) {
    return;
  }
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

  if (currentNegativeArr > arr.length) {
    return;
  }
  negativeNumberRec();
  return negativeNumber.length;
}
console.log("Колличество отрицательных элементов в массиве: " + negativeNumberRec());

let positiveNumber = [];
let currentPositiveArr = 0;
function positiveNumbersRec() {
  currentPositiveArr++;
  if (arr[currentPositiveArr] > 0) {
    positiveNumber.push(arr[currentPositiveArr]);
  }
  if (currentPositiveArr > arr.length) {
    return;
  }

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
  if (currentZeroArr > arr.length) {
    return;
  }
  positiveNumbersRec();
  return zeroNumber.length;
}
console.log("Колличество нулевых элементов в массиве: " + zeroNumbersRec());

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

function memoFactorial(n, cache) {
  cache = cache || [1];
  if (cache[n]) {
    return cache[n];
  } else {
    cache[n] = n * memoFactorial(n-1, cache);
  }
  return cache[n];
}
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
console.log(customBind(getName, obj));
let getNameMyBind = customBind(getName, obj);
console.log(getNameMyBind());
console.log(customCall(getName, obj));

let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomArray1 = [45, 36, -10, 0, 21, 78];
function customMap(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] + 1;
  }
  return result;
}
console.log(customMap(randomArray));
console.log(customMap(randomArray1));

function customFilter(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) result.push(arr[i]);
  }
  return result;
}
console.log(customFilter(randomArray));
console.log(customFilter(randomArray1));

function customReduce(arr) {
  let sum = 0;
  for (const n of arr) {
    sum += n;
  }
  return sum;
}
console.log(customReduce(randomArray));

let arrForEach = ["zero", "one", "twoo", "three", "four"];
function customForEach(arr) {
  for (let i = 0; i < arr.length; i++) {
     console.log( `index ${i}: ${arr[i]}`);
  }
   return "it is custom forEach";
}
console.log(customForEach(arrForEach));
console.log(customForEach(randomArray));

let f = function(){};
let f2 = f.customCall({a: 10}, 2);
console.log(f2);