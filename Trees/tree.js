class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null
    }

    //adding new node to the tree
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
           if(root.left === null){
            root.left = newNode
           }else{
            this.insertNode(root.left, newNode)
           }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    //Searching the value through the tree
    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            } else if(value<root.value){
               return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }

    //Tree traversal techniques
    //traversing means simply visiting every node in the tree
    //DFS: Deapth First Search
    // Three types of DFS traversals:

    // Preorder: root, left child..., right child
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // InOrder: Leaf, parent, right, till root
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    // PostOrder: leaf left, leaf right, parent, parent cousine, till root (reverse BFS)
    preOrder(root){
        if(root){
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){
        //Use the optimised queue implementation
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }

    //Min-Max in a tree
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(null === root){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{      //here the value is equal, hence we found the element to be deleted
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}

const bst = new BinarySearchTree()

console.log('Is the tree empty? ',bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)


// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 32));
bst.levelOrder()
console.log('Min: ',bst.min(bst.root));
console.log('Max: ',bst.max(bst.root));

bst.delete(5)
bst.levelOrder()
