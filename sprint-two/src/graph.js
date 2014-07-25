var Graph = function(){
  this._collection = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var counter = 0, newVertex = makeVertex(newNode);
  this._collection[newNode] = newVertex;
  if (toNode !== undefined) {
    this.addEdge(newNode, toNode);
  }else{
    for (var key in this._collection) {
      counter++;
    }
    if (counter === 2) {
      var node1;
      for(var key in this._collection){
        if(key !== newNode){
          node1 = key;
        }
      }
      this.addEdge(newNode, node1);
    }
  }
};

Graph.prototype.contains = function(node){
  for (var key in this._collection) {
    if (key === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var removedVertex = this._collection[node];
  if (removedVertex !== undefined) {
    for (var i = 0, x = removedVertex.list.length; i < x; i++) {
      this.removeEdge(node, removedVertex.list[i]);
    }
    delete this._collection[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var fromVertex = this._collection[fromNode];
  for (var i = 0, x = fromVertex.list.length; i < x; i++) {
    if (fromVertex.list[i] === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromVertex = this._collection[fromNode];
  var toVertex = this._collection[toNode];
  if(fromVertex !== undefined && toVertex !== undefined){
    fromVertex.list[fromVertex.list.length] = toNode;
    toVertex.list[toVertex.list.length] = fromNode;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromVertex = this._collection[fromNode];
  var toVertex = this._collection[toNode];
  if(fromVertex !== undefined && toVertex !== undefined){
    var definedForFrom = false;
    var definedForTo = false;
    for(var i = 0; i < fromVertex.list.length; i++){
      if(fromVertex.list[i] === toNode){
        fromVertex.list[i] = undefined;
      }
      if(fromVertex.list[i] !== undefined) {
        definedForFrom = true;
      }
    }
    for(var i = 0; i < toVertex.list.length; i++){
     if(toVertex.list[i] === fromNode){
        toVertex.list[i] = undefined;
      }
      if (toVertex.list[i] !== undefined) {
        definedForTo = true;
      }
    }
    if (!definedForTo) {
      delete this._collection[toNode];
    }
    if (!definedForFrom) {
      delete this._collection[fromNode];
    }
  }
};

var makeVertex = function(node) {
  var vertex = {
    value: node,
    list: []
  };
  return vertex;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
