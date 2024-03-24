// A linked list is a linear data structure that includes a series of connected nodes
// Each node contains a data value and a pointer that points to the next node

// Advantages:
// The List elements can be easily inserted or removed without reallocation or reorganization of the entire structure

// Disadvantage:
// Random access of elements is not feasible and accessing an element has linear time complexity

// The Linked List data structure supports three main operations:
// a> Insertion: Adding element anywhere in the list at given index.
// b> Deletion: -||-
// c> Search: Searching -||-

// All applications of Stacks and Queues are applications of linked lists

// https://youtu.be/TjeTc1f3ebY?si=C9mmikGEuxpgbfwU

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        // this.size = 0
    }

    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    addLast(data){
        const newNode = new Node(data)

        //if list is empty
        if(!this.head){
            this.head = newNode
            return
        }

        //traversing the list till we get value of nest as false
        let current = this.head
        while (current.next) {
            current = current.next
        }

        current.next = newNode
    }

    size(){
        let count = 0
        let current = this.head
        while(current.next){
            current = current.next
            count++
        }
        return count
    }

    addAt(index, data){
        if(index<0 || index> this.size()){
            console.error('Invalid index');
            return
        }

        const newNode = new Node(data)

        if(index === 0){
            newNode.next = this.head
            this.head = newNode
            return
        }

        let current = this.head
        for (let i = 0; i < index -1 ; i++) {
            current = current.next
        }

        newNode.next = current.next
        current.next = newNode
    }

    removeTop(){
        if(!this.head){
            return
        }

        this.head = this.head.next
    }

    removeLast(){
        let current = this.head

        //stops executing at second last element
        while(current.next.next){
            current = current.next
        }
        current.next = null
    }

    removeAt(index){
        if(index<0 || index> this.size()){
            console.error('Invalid index');
            return
        }

        if(index === 0){
            this.head = this.head.next
            return
        }

        let current = this.head
        //can also removes the last index hence if condition
        for(let i = 0; i<index -1; i++){
            current = current.next
        }
        if(current.next){
        current.next = current.next.next
        }
    }

    print(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

let list = new LinkedList()

list.addFirst(5)
list.addFirst(3)
list.addFirst(8)
list.addLast(6)
list.removeTop()
list.addAt(2, 8)
list.removeLast()
list.removeAt(2)

list.print()
console.log('Size: ', list.size());
