function MyArrayProto() {}

function MyArray() {
  this.length = 0;
}
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray();
