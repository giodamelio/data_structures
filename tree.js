const debug = require('debug')('DSandA:tree');

const Queue = require('./queue');

function Tree(value, children) {
  debug('Creating tree');

  this.value = value;
  this.children = children || [];
}

Tree.prototype.addChild = function(...values) {
  debug(`Adding ${values.length} ${values.length > 1 ? 'children' : 'child'} to tree`);

  this.children.push.apply(
    this.children,
    values.map((value) => new Tree(value))
  );
};

Tree.prototype.breadthFirstSearch = function() {
  debug('Performing breadth first search on tree');

  const q = new Queue();
  const output = [];
  q.enqueue(this);
  while (q.length) {
    const node = q.dequeue();
    output.push(node.value);
    node.children.forEach((childNode) => q.enqueue(childNode));
  }
  return output;
};

// Implement toString to give basic repersentation of tree
Tree.prototype.toString = function() {
  return `Tree { value: "${this.value}", children.length: ${this.children.length} }`;
};

module.exports = Tree;
