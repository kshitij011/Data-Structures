// A stack is a sequential collection elements that follow the principal of Last In First Out(LIFO)

//Stack is great when tracing back steps
//e.g: browser history tracking, Undo operation when typing.
//expression conversions: Infix to Postfix
//Used in Call stack in JS runtime

class Stack{
    constructor(){
        this.items = []
    }
    push(elements){
        this.items.push(elements)
    }
    pop(){
        if(this.items.length === 0){
            return 'Underflow'
        }
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0;
    }

}

let stack = new Stack;

console.log(stack.isEmpty());
console.log(stack.pop());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
