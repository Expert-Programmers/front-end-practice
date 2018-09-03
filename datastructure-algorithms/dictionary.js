function Dictionary() {
  this.add = add;
  this.datastore = {};
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
}

function add(key, value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  for (let key in this.datastore) {
    console.log(key + " -> " + this.datastore[key]);
  }
}

const pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
