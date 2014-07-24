var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this[item] = true;
};

setPrototype.contains = function(item){
	return this[item];
};

setPrototype.remove = function(item){
	this[item] = false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
