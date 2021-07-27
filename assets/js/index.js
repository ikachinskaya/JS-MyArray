function MyArrayProto() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  };

  this.pop = function () {
    let removedElement = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return removedElement;
  };

  this.shift = function () {
    let removedElement = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return removedElement;
  };

  this.unshift = function () {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length += arguments.length;
    return this.length;
  };

  this.concatValue = function () {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this[i];
    }

    for (let i = 0; i < arguments.length; i++) {
      newArray[newArray.length] = arguments[i];
    }
    newArray.length = this.length + arguments.length;
    return newArray;
  };

  this.concatArray = function () {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this[i];
    }
    let argumentLength = 0;
    for (let i = 0; i < arguments.length; i++) {
      for (let j = 0; j < arguments[i].length; j++) {
        newArray[newArray.length] = arguments[i][j];
        argumentLength++;
      }
    }
    newArray.length = this.length + argumentLength;
    return newArray;
  };

  /*Кажется, получилось))))*/ 
  this.concatValueAndArrays = function () {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this[i];
    }
    let argumentLength = 0;

    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "object") {
        for (let j = 0; j < arguments[i].length; j++) {
          newArray[newArray.length] = arguments[i][j];
          argumentLength++;
        }
      } else {
        newArray[newArray.length] = arguments[i];
        argumentLength++;
      }
    }
    newArray.length = this.length + argumentLength;
    return newArray;
  };

  this.reverse = function () {
    for (let i = 0; i < this.length - i - 1; i++) {
      let temp = this[i];
      this[i] = this[this.length - i - 1];
      this[this.length - i - 1] = temp;      
    }
    return this;
  };

  this.forEach = function (func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i], i, this);
    }
  };

  this.map = function (func) {
    for (let i = 0; i < this.length; i++) {
      this[i] = func(this[i], i, this);
    }
  };

  this.some = function (func) {
    for (let i = 0; i < this.length; i++) {
      const result = func(this[i], i, this);
      if (result) {
        return true;
      }
    }
    return false;
  };

  this.every = function (func) {
    for (let i = 0; i < this.length; i++) {
      const result = func(this[i], i, this);
      if (!result) {
        return false;
      }
    }
    return true;
  };
}

function MyArray() {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }

  this.isMyArray = function (arg) {
    return arg instanceof MyArray;
  };
}
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray();

// myArray.push(0, 1, 2, 3, 4, 5, 6);
// console.log(myArray);

// console.log(myArray.pop());
// console.log(myArray);

// console.log(myArray.shift());
// console.log(myArray);

// console.log(myArray.unshift(5555));
// console.log(myArray);

// const myArray2 = new MyArray(44, 55, 66, 77, 88, 99);
// const myArray3 = new MyArray("a", "b", "c", "d");
// let newArr2;
// newArr2 = myArray2.concat(myArray3);
// console.log(newArr2);

//let myArray2 = new MyArray(111, 222, 333, 444, 555, 666, 777, 888, 999);
// console.log(myArray2);
// console.log(myArray2.reverse());

// function showElements(element) {
//   console.log(element);
// }
// myArray2.forEach(showElements);

// function sumElements(element) {
//   console.log(element + 1000000);
// }
// myArray2.map(sumElements);

// const array1 = new MyArray(1, 2, 3, 4);
// const array2 = new MyArray(11, 22, 33, 44);
// const arrayValueConcat = array1.concatValue(array2, 999999);
// console.log(arrayValueConcat);

// const array3 = new MyArray(111, 222, 3333, 4444);
// const array4 = new MyArray(11111, 22222, 33333, 44444, 0, 0, 0, 0, 0, 0);
// const arrayConcat = array3.concatArray(array4);
// console.log(arrayConcat);

const array5 = new MyArray(111, 222, 3333, 4444);
const array6 = new MyArray(11111, 22222, 33333, 44444);
const arrayValueAndArraysConcat = array5.concatValueAndArrays(
  array6,
  0,
  0,
  0,
  0,
  ["string"],
  [9, 9, 9, 9],
  ["test"],
  [74, 74, 74],
  666
);
console.log(arrayValueAndArraysConcat);
