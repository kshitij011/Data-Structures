//queue is the sequential collection of elements that follow the proncipal of First In First Out(FIFO)
//The first element inserted into the queue is the first element to be removed
//A queue of people. People enter the queue at one end(rear/tail) and the queue from the other end(front/head)
//enque: adds element to rear or tail of the collection
//dequeue: removes the element from the rear or tail
class Queue{
    constructor(){
        this.queue = []
    }

    enque(element){
        this.queue.push(element)
        console.log(`${element} added to queue`);
    }

    deque(){
        if(this.queue.length ===0){return}
        let lastVar = this.queue[0]
        this.queue.shift()
        return console.log(`${lastVar} removed from the list`);
    }

    front(){
        return console.log(`${this.queue[0]}`);
    }

    rear(){
        return console.log(`${this.queue[this.queue.length - 1]}`);
    }

    isEmpty(){
        if(this.queue.length === 0){
            return console.log('Empty');
        }
        return console.log(false);
    }

    size(){
        return console.log(`size ${this.queue.length}`);
    }
}

let queue = new Queue();

queue.enque(10)
queue.enque('hi')
queue.enque(false)
queue.enque(11)


queue.size()
queue.isEmpty()
queue.rear()
queue.front()
console.log(`index element ${queue.queue[2]}`);
queue.deque()
queue.front()
