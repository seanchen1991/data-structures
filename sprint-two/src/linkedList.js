var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    var current;
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
      this.tail.next = value;
    }
  };

  list.removeHead = function(){
    if (this.head !== null) {
      var value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  };

  list.contains = function(target){
    if (this.head !== null) {
      var first = this.head;
      while (first.value !== target) {
        if (first === this.tail) {
          return false;
        }
        first = first.next;
      }
    }
    return true;
  }
  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

