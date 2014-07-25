var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if (this.children === undefined) {
  	this.children = [];
  }
  this.children[this.children.length] = makeTree(value);
};

treeMethods.contains = function(target){
  if (this.value === target) {
  	return true;
  } else {
  	if (this.children) {
  		for (var i = 0, x = this.children.length; i < x; i++) {
  			if (this.children[i].contains(target)){
  			  return true;
  			}
  		}
  		return false;
  	}
  	return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
