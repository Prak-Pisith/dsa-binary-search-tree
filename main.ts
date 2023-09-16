/* 
  Tree Node Class
*/

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor (value: T) { 
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


/* 
  Binary Search Tree
    - TreeNode Object
    - Insert tree
    - Search tree
    - Remove
    - Print
*/

class BinarySearchTree {

  private root: TreeNode<number> | null = null;

  // Insert
  insert (value: number): void {
    
    const newNode: TreeNode<number> | null = new TreeNode<number>(value);
    if (!newNode) throw new Error('Cannot insert null value into a TreeNode')

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }

    }
  }

  // Print - In Order
  print(): void {
    this._print(this.root);
  }

  private _print(node: TreeNode<number> | null): void {
    if (!node) return;
    this._print(node.left);
    console.log(node.value);
    this._print(node.right);
  }
}


/* 
  Initalizes the BinarySearchTree
*/

const bst = new BinarySearchTree();
bst.insert(7);
bst.insert(5);
bst.insert(9);

bst.print();