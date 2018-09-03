function Queue() {
  this.dataStore = [];

  // 向队列尾添加一个元素
  this.enqueue = function (element) {
    this.dataStore.push(element);
  };

  // 删除队首元素
  this.dequeue = function () {
    return this.dataStore.shift();
  };

  // 读取队首元素
  this.front = function () {
    return this.dataStore[0];
  };

  // 读取队尾元素
  this.back = function () {
    return this.dataStore[this.dataStore.length - 1];
  }

  this.toString = function () {
    let res = '';
    for (let i = 0; i < this.dataStore.length; i++) {
      res += this.dataStore[i] + '\n';
    }
    return res;
  };

  this.empty = function () {
    if (this.dataStore.length === 0) {
      return false;
    } else {
      return true;
    }
  };
}

const q = new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue:", q.front());
console.log("Back of queue:", q.back());
