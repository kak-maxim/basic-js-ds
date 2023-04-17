const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.side = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.side = newNode;
    } else {
      this.side.next = newNode;
      this.side = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.side = null;
    }

    return dequeuedValue;
  }
}


module.exports = {
  Queue
};
