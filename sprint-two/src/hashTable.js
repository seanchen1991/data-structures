var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var obj = {};
  obj[k] = v;
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i] === undefined) {
  	this._storage[i] = makeLinkedList();
    this._storage[i].addToTail(obj);
  } else {
    this._storage[i].addToTail(obj);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i] === undefined) {
    return null;
  } else {
    var node = this._storage[i].head;
    while(node !== this._storage[i].tail.next){
      if(node.value[k] !== undefined){
        return node.value[k];
      }
      node = node.next;
    }
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i] === undefined) {
    return null;
  } else {
    var node = this._storage[i].head;
    while (node !== this._storage[i].tail.next) {
      if (node.value[k] !== undefined) {
        var answer = node.value[k];
        delete node.value[k];
        return answer;
      }
      node = node.next;
    }
    return null;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
