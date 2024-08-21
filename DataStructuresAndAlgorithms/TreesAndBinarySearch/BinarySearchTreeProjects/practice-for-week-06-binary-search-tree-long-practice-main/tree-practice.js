const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  while (rootNode.left !== null) {
    rootNode = rootNode.left;
  }
  return rootNode.val;
}

function findMaxBST(rootNode) {
  // Your code here
  while (rootNode.right !== null) {
    rootNode = rootNode.right;
  }
  return rootNode.val;
}

// use queue to find smallest/biggest node
function findMinBT(rootNode) {
  // Your code here
  if (rootNode === null) {
    return Infinity;
  }
  let min = rootNode.val;

  if (rootNode.left !== null) {
    let leftNode = findMinBT(rootNode.left);
    if (leftNode < min) {
      min = leftNode;
    }

  }
  if (rootNode.right !== null) {
    let rightNode = findMinBT(rootNode.right);
    if (rightNode < min) {
      min = rightNode;
    }

  }

  return min;
}

function findMaxBT(rootNode) {
  // Your code here
  let max = rootNode.val;
  if (rootNode.left !== null) {
    let leftNode = findMaxBT(rootNode.left);
    if (leftNode > max) {
      max = leftNode;
    }
  }
  if (rootNode.right !== null) {
    let rightNode = findMaxBT(rootNode.right)
    if (rightNode > max) {
      max = rightNode;
    }
  }
  return max;
}

function getHeight(rootNode) {
  // Your code here

  if (rootNode === null) {
    return -1;
  }
  let leftTree = getHeight(rootNode.left);
  let rightTree = getHeight(rootNode.right);
  return 1 + Math.max(leftTree, rightTree);
}

function countNodes(rootNode) {
  // Your code here
  if(rootNode === null){
    return 0;
  }
  return countNodes(rootNode.left)+1+countNodes(rootNode.right);
}

function balancedTree(rootNode) {
  // Your code here
  function checkBalance(rootNode){
    if(rootNode === null){
      return {height: 0, balanced: true};
    }
    let left = checkBalance(rootNode.left);
    let right = checkBalance(rootNode.right);

    let currentHeight =   Math.max(left.height, right.height)+1;

    let currentBalance = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;

    return {height: currentHeight, balanced: currentBalance};
  }

  return checkBalance(rootNode).balanced;
}


function getParentNode(rootNode, target) {
  // Your code here
  if(rootNode === null || rootNode.val === target){
    return null;
  }

  let queue = [rootNode];
  while(queue.length > 0){
    let currentNode = queue.shift();

    if(currentNode.left !== null){
      if(currentNode.left.val === target){
        return currentNode;
      }
      queue.push(currentNode.left);
    }

    if(currentNode.right !== null){
      if(currentNode.right.val === target){
        return currentNode;
      }
      queue.push(currentNode.right);
    }
  }

  return undefined;
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
  if(rootNode === null){
    return null;
  }

  let predecessor = null;
  let current = rootNode;

  while(current!== null){
    if(target > current.val){
      predecessor = current;
      current = current.right;
    }
    else if(target < current.val){
      current = current.left;
    }
    else{
      if(current.left !== null){
        predecessor = current.left;
        while(predecessor.right !== null){
          predecessor = predecessor.right;
        }
      }
      break
    }
  }

  return predecessor ? predecessor.val : null
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  
  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
