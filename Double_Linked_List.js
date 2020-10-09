class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // the steps
    // A
    // A -> B
    // A <- B
    // B = tail
    const newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    // the steps
    // A <-> B <-> C
    // A <-> B <- C
    //this.tail.prev.next = null

    if (this.length === 0) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }
  shift() {
    //the steps
    // A <-> B <-> C
    // A <-> B <-> C
    // set head to A.next
    // set new head node prev to null
    // set old head node next to null

    //edge case

    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    if (this.length === 0) return this.push(val);
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      console.log('out of bounds');
      return undefined;
    }
    let i;
    let current;
    const middle = Math.floor(this.length / 2);
    if (index > middle) {
      i = this.length;
      current = this.tail;
      while (i !== index + 1) {
        current = current.prev;
        i--;
      }
      console.log(current.val);
    } else {
      i = 0;
      current = this.head;
      while (i !== index) {
        current = current.next;
        i++;
      }
      console.log(current.val);
    }
    return current;
  }
  insert(index, val) {
    //A B<->(F)<-> C D E
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let insertpoint = this.get(index);
    if (insertpoint !== null) {
      const newNode = new Node(val);
      newNode.prev = insertpoint;
      newNode.next = insertpoint.next;
      insertpoint.next.prev = newNode;
      insertpoint.next = newNode;
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  set(index, val) {
    const setPoint = this.get(index);
    if (setPoint != null) {
      setPoint.val = val;
      return true;
    } else {
      return false;
    }
  }
  remove(index) {
    // A B<->(C)<->D E
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    const indexToRemove = this.get(index);
    if (indexToRemove !== null) {
      indexToRemove.next.prev = indexToRemove.prev;
      indexToRemove.prev.next = indexToRemove.next;
      indexToRemove.prev = undefined;
      indexToRemove.next = undefined;
      this.length--;
      return true;
    }
  }
  print() {
    let current = this.head;
    const arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

const list = new DoubleLinkedList();

list.push('A');
list.push('B');
list.push('C');
list.push('D');
list.push('E');
list.push('F');
//list.unshift('33');
//list.unshift('CAB');
//list.print();
list.get(0);
list.get(1);
list.get(2);
list.get(3);
list.get(4);
list.get(5);
list.get(6);
list.get(7);
list.get(-7);
list.set(5, 'SET');
list.insert(2, 'INSERT');
list.insert(0, 'First');
list.insert(8, 'Last');
list.print();
list.remove(3);
list.print();
list.remove(0);
//list.remove(1);
list.print();
console.log(list);
