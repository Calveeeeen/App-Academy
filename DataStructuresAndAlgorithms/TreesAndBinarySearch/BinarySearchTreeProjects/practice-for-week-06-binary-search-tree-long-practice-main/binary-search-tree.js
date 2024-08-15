// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor(root = null, val) {
      // Your code here
      this.val = val;
      this.root = root;
      this.left = null;
      this.right = null;
    }

    insert(val, currentNode=this.root) {
      // Your code here
      if(this.root === null){
        this.root = new TreeNode(val);
        return this.root;
      }
      if(currentNode === null){
        return new TreeNode(val);
      }
      if(val < currentNode.val){
        currentNode.left = this.insert(val, currentNode.left);
      }
      else{
        currentNode.right = this.insert(val, currentNode.right);
      }
      // console.log(currentNode);
      return currentNode;
    }

    search(val) {
      // Your code here
      let currentNode = this.root;

      while(currentNode != null){
        if(currentNode.val === val){
          return true;
        }

        if(val < currentNode.val){
          currentNode = currentNode.left;
        }
        else{
          currentNode = currentNode.right;
        }
      }

      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      // Your code here
      console.log(currentNode.val);
      if(currentNode.left !== null){
        this.preOrderTraversal(currentNode.left);
      }
      if(currentNode.right !== null){
        this.preOrderTraversal(currentNode.right);
      }
    }


    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if(currentNode.left !== null){
        this.inOrderTraversal(currentNode.left);
      }
      console.log(currentNode.val);
      if(currentNode.right !== null){
        this.inOrderTraversal(currentNode.right);

      }
    }


    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if(currentNode.left !== null){
        this.postOrderTraversal(currentNode.left);
      }
      if(currentNode.right !== null){
        this.postOrderTraversal(currentNode.right);
      }
      console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // your code here
      if(this.root === null){
        return;
      }
      let queue = [this.root];

      while(queue.length > 0){
        let currentNode = queue.shift();
        console.log(currentNode.val);

        if(currentNode.left !== null){
          queue.push(currentNode.left);
        }
        if(currentNode.right !== null){
          queue.push(currentNode.right);
        }
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // your code here
      if(this.root === null){
        return;
      }

      let stack = [this.root];

      while(stack.length > 0){
        let currentNode = stack.pop();
        console.log(currentNode.val);

        if(currentNode.left !== null){
          stack.push(currentNode.left);
        }
        if(currentNode.right !== null){
          stack.push(currentNode.right);
        }
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
