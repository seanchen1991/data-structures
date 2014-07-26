var makeBinarySearchTree = function(value){
  var node = {};
  node.value = value;
  node.parent = undefined;
  node.left = undefined;
  node.right = undefined;
  _.extend(node, nodeMethods);
  return node;
};

var nodeMethods = {};

nodeMethods.insert = function(value) {
  if(value <= this.value){
    if(this.left !== undefined){
      this.left.insert(value);
    }else{
      this.left = makeBinarySearchTree(value);
      this.left.parent = this;
    }
  }else{
    if(this.right !== undefined){
      this.right.insert(value);
    }else{
      this.right = makeBinarySearchTree(value);
      this.right.parent = this;
    }
  }
};

nodeMethods.contains = function(value) {
  if(value === this.value){
    return true;
  }
  if(this.left !== undefined){
    if(this.left.contains(value)){
      return true;
    }
  }
  if(this.right !== undefined){
    if(this.right.contains(value)){
      return true;
    }
  }
  return false;
};

nodeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if(this.left !== undefined){
    this.left.depthFirstLog(callback);
  }
  if(this.right !== undefined){
    this.right.depthFirstLog(callback);
  }
};

nodeMethods.removeFromParent = function() {
  if (this.parent !== undefined) {
    var parentNode = this.parent;
    if(parentNode.left === this){
      parentNode.left = undefined;
    }else{
      parentNode.right = undefined;
    }
    this.parent = undefined;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
