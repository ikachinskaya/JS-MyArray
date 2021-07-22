function MyArrayProto() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
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
}

function MyArray() {
  this.length = 0;
}
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray();

myArray.push(0, 1, 2, 3, 4, 5, 6);
console.log(myArray);

console.log(myArray.pop());
console.log(myArray);

console.log(myArray.shift());
console.log(myArray);

console.log(myArray.unshift(5555));
console.log(myArray);
