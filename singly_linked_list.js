module.exports = SinglyLinkedList;

function Node(value) {
  this.value = value;
  this.next = null;
}

function SinglyLinkedList(...values) {
  this.head = null;
  this.tail = null;
  values.forEach((value) => this.append(value));
}

// Prepend a node to our linked list
SinglyLinkedList.prototype.prepend = function(value) {
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
  const newNode = new Node(value);

  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  this.tail.next = newNode;
  this.tail = newNode;
};
