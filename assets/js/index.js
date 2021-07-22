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
