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

  this.unshift = function (elements) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length += arguments.length;
    return this.length;
  };

  this.concat = function () {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this[i];
    }

    for (let i = 0; i < arguments.length; i++) {
      for (let j = 0; j < arguments[i].length; j++) {
        newArray[newArray.length] = arguments[i][j];
      }
    }
    //newArray.length = this.length + arguments.length;
    return newArray;
  };

  this.reverse = function () {
    for (let i = 0; i < this.length-i-1; i++) {
      //debugger
      let temp = this[i];
      this[i] = this[this.length - i-1];
      this[this.length - i -1] = temp;
      console.log(i);
    }
    return this;
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

  this.isMyArray = function () {
    return this instanceof MyArrayProto;
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

let myArray2 = new MyArray(111, 222, 333, 444, 555, 666, 777, 888, 999);
console.log(myArray2);
console.log(myArray2.reverse());
