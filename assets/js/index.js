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

  this.unshift = function (element) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + 1] = this[i];
    }
    this[0] = element;
    this.length++;
    return this.length;
  };

  this.unshiftTwo = function () {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }

    this.length = this.length + arguments.length;
    return this.length;
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
}
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray();

myArray.push(0, 1, 2, 3, 4, 5, 6);
console.log(myArray);

// console.log(myArray.pop());
// console.log(myArray);

// console.log(myArray.shift());
// console.log(myArray);

// console.log(myArray.unshift(5555));
// console.log(myArray);

console.log(myArray.unshiftTwo(11, 22, 33, 44, 55, 66, 77));
console.log(myArray);

console.log(myArray.unshift(1111));
console.log(myArray);

console.log(myArray.unshiftTwo(11111111));
console.log(myArray);
