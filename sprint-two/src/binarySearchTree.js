var makeBinarySearchTree = function(value) {
	var newBST = {};
	newBST.value = value;
	newBST.left = undefined;
	newBST.right = undefined;
	_.extend(newBST, bstMethods);
	return newBST;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  if (value < this.value) {
  	if (this.left === undefined) {
  		this.left = makeBinarySearchTree(value);
  	} else {
  		this.left.insert(value);
  	}
  } else if (value > this.value) {
  	if (this.right === undefined) {
  		this.right = makeBinarySearchTree(value);
  	} else {
  		this.right.insert(value);
  	}
  }
};

bstMethods.contains = function(value) {
  if (value === this.value) {
  	return true;
  } else if (value < this.value) {
  	if (this.left !== undefined) {
  		return this.left.contains(value);
  	}
  } else if (value > this.value) {
  	if (this.right !== undefined) {
  		return this.right.contains(value);
  	}
  }
  return false;
};

bstMethods.depthFirstLog = function(callback) {
	callback(this.value);
  if(this.left !== undefined){
  	this.left.depthFirstLog(callback);
  }
  if(this.right !== undefined){
  	this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
