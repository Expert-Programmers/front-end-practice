function Set() {
  this.dataStore = [];
  this.containes = containes;
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}

function containes(data) {
  return this.includes(data);
}

function add(data) {
  if (!this.dataStore.includes(data)) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}

function remove(data) {
  if (this.dataStore.includes(data)) {
    const pos = this.dataStore.indexOf(data);
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}

function show() {
  return this.dataStore.toString();
}

function union(set) {
  const tmpSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    tmpSet.add(this.dataStore[i]);
  }
  for (let i = 0; i < set.length; i++) {
    if (!tmpSet.containes(set.dataStore[i])) {
      tmpSet.add(set.dataStore[i]);
    }
  }
  return tmpSet;
}

function intersect(set) {
  const tmpSet = new Set();
  for (let i = 0; i < set.dataStore.length; i++) {
    if (this.containes(set.dataStore[i])) {
      tmpSet.add(set.dataStore[i]);
    }
  }
  return tmpSet;
}

function size() {
  return this.dataStore.length;
}

function subset(set) {
  if (this.size() < set.size()) {
    return false;
  }
  for (let i = 0; i < set.size(); i++) {
    if (!this.containes(set.dataStore[i])) {
      return false;
    }
  }
  return true;
}

function difference(set) {
  const tmpSet = new Set();
  for (let i = 0; i < this.size(); i++) {
    if (!set.containes(this.dataStore[i])) {
      tmpSet.add(this.dataStore[i]);
    }
  }
  return tmpSet;
}
