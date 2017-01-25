const debug = require('debug')('DSandA:singly_linked_list');

module.exports = SinglyLinkedList;

function Node(value) {
  debug(`Creating node with value: ${value}`);

  this.value = value;
  this.next = null;
}

function SinglyLinkedList(...values) {
  debug(`Creating Singly Linked List with initial values: ${values}`);

  this.head = null;
  this.tail = null;
  values.forEach((value) => this.append(value));
}

// Prepend a node to our linked list
SinglyLinkedList.prototype.prepend = function(value) {
  debug(`Prepending "${value}" to Singly Linked List`);

  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    return;
  }
  
  newNode.next = this.head;
  this.head = newNode;
};

// Append a note to our linked list
SinglyLinkedList.prototype.append = function(value) {
  debug(`Appending "${value}" to Singly Linked List`);

  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  this.tail.next = newNode;
  this.tail = newNode;
};
