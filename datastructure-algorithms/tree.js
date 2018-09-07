function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.preOrder = preOrder;
  this.inOrder = inOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
}

function insert(data) {
  const n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    let current = this.root;
    let parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (node !== null) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data);
  }
}

function getMin() {
  let current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  let current = this.root;
  while (current.left !== null) {
    current = current.right;
  }
  return current.data;
}

function find(date) {
  let current = this.root;
  while (current !== null) {
    if (current.data === data) {
      return current;
    } else if (current.data > data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node === null) {
    return null;
  }
  if (data === node.data) {
    if (node.left === null && node.right === null) {
      // 没有节点
      return null;
    }
    if (node.left === null) {
      // 没有左节点
      return node.right;
    }
    if (node.right === null) {
      // 没有右节点
      return node.left;
    }
    let tmpNode = this.getMin(node.right);
    node.data = tmpNode.data;
    node.right = removeNode(node.right, tmpNode.data);
    return node;
  } else if (node.data > data) {
    node.left = removeNode(node.left, data);
    return node
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}
