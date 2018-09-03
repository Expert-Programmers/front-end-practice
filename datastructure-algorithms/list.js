function List() {
  this.dataStore = []; // 初始化一个空数组来保存列表元素

  // 辅助方法,用于查找要删除的元素的位置
  this.find = function (element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  };

  // 判断给定的值是否在列表中
  this.contains = function (element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  };

  this.listSize = 0; // 列表元素的个数
  this.pos = 0; // 列表当前的位置

  // 返回列表中元素的个数
  this.length = function () {
    return this.listSize;
  };

  // 清空列表中的所有元素
  this.clear = function () {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  };

  //返回列表的字符串形式
  this.toString = function () {
    return this.dataStore.toString();
  };

  // 在现有元素后插入元素
  this.insert = function (element) {
    const insertPos = this.find(element);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  };

  // 在列表的末尾添加新元素
  this.append = function (element) {
    this.dataStore[this.listSize++] = element;
  };

  // 从列表中删除元素
  this.remove = function (element) {
    const foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  };

  // 将列表的当前位置移动到第一个元素
  this.front = function () {
    this.pos = 0;
  };

  // 将列表的当前位置移动到最后一个元素
  this.end = function () {
    this.pos = this.listSize - 1;
  };

  // 将当前位置后移一位
  this.prev = function () {
    if (this.pos > 0) {
      --this.pos;
    }
  };

  // 将当前位置前移一位
  this.next = function () {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  };

  // 返回列表的当前位置
  this.currPos = function () {
    return this.pos;
  };

  // 将当前位置移动到指定位置
  this.moveTo = function (position) {
    this.pos = position;
  };

  // 返回当前位置的元素
  this.getElement = function () {
    return this.dataStore[this.pos];
  };
}

const names = new List();
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.prev();
console.log(names.getElement());
