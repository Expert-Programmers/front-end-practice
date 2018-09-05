function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
}

function simpleHash(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  console.log('Hash value: ' + data + ' -> ' + total);
  return total % this.table.length;
}

function betterHash(data) {
  const H = 37;
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += H * total + data.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
}

function buildChains() {
  for (let i = 0; i < this.table.length; i++) {
    this.table[i] = new Array();
  }
}

function put(data) {
  const pos = this.betterHash(data);
  this.table[pos] = data;
}

function get(key) {
  return this.table[this.betterHash(key)];
}

function showDistro() {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log(i + ': ' + this.table[i]);
    }
  }
}


const someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
const hTable = new HashTable();
for (let i = 0; i < someNames.length; i++) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
