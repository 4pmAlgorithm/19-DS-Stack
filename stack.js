// Definition of stack
// a LIFO (last in is the first out) data structure
// The last element added to the stack will be the first element removed from the stack.
// ex) pan cake stacks, undo/redo, commt+z

//ARRAY STACK
// let stack = [];
// .push .pop
// .unshift .shift (not good bc it moves everything)

//STACK CLASS single linked list
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value
    }
}