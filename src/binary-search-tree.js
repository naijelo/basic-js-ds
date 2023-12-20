const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor () {
    this.topRoot = null;
  }

  root() {
    return this.topRoot;
  }

  add(data) {
    this.topRoot = addNode(data, this.topRoot);

    function addNode(data, node) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(data, node.left);
      } else {
        node.right = addNode(data, node.right);
      }
      return node;
    }
  }

  has(data) {
    return hasNode(data, this.topRoot);

    function hasNode(data, node) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return hasNode(data, node.left);
      } else {
        return hasNode(data, node.right);
      }
    }
  }

  find(data) {
    return findNode(data, this.topRoot);

    function findNode(data, node) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return findNode(data, node.left);
      } else {
        return findNode(data, node.right);
      }
    }
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let node = this.topRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.topRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};