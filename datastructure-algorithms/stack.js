function Stack() {
  this.dataStore = [];

  this.top = 0;

  this.push = function (element) {
    this.dataStore[this.top++] = element;
  };

  this.pop = function () {
    return this.dataStore[--this.top];
  };

  this.peek = function () {
    return this.dataStore[this.top - 1];
  };

  this.length = function () {
    return this.top;
  }

  this.clear = function () {
    this.top = 0;
  }
}

const s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
const popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());
