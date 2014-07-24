var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.Size = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
	this.storage[this.Size] = value;
	this.Size++;
};

Stack.prototype.pop = function() {
	if (this.Size > 0) {
		this.Size--;
	}
	var poppedOff = this.storage[this.Size];
	delete this.storage[this.Size];
	return poppedOff;
};

Stack.prototype.size = function() {
	return this.Size;
};

