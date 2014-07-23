var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
  	Size: 0,
  	storage: {}
  }
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;
  return instance;
};

var stackMethods = {
	push: function(value) {
		this.storage[this.Size] = value;
		this.Size++;
	},
  pop: function() {
  	if (this.Size > 0) {
  		this.Size--;
  	}
  	var poppedOff = this.storage[this.Size];
  	delete this.storage[this.Size];
  	return poppedOff;
  },
  size: function() {
  	return this.Size;
  }
};


