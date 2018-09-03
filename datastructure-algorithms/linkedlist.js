function Node(element) {
  this.element = element;
  this.next = undefined;
}

function LinkedList() {
  this.head = new Node('head');
  this.find = find;
  this.findPrevious = findPrevious;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

function find(item) {
  let curNode = this.head;
  while (curNode.element !== item) {
    curNode = curNode.next;
  }
  return curNode;
}

function insert(newElement, item) {
  const newNode = new Node(newElement);
  const current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display() {
  let curNode = this.head;
  while (!(curNode.next === undefined)) {
    console.log(curNode.next.element);
    curNode = curNode.next;
  }
}

function findPrevious(item) {
  let curNode = this.head;
  while (!(curNode.next !== undefined && curNode.next.element !== item)) {
    curNode = curNode.next;
  }
  return curNode;
}

function remove(item) {
  const preNode = this.findPrevious(item);
  if (preNode.next !== undefined) {
    preNode.next = preNode.next.next;
  }
}

const cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.remove("Carlisle");
cities.display();
