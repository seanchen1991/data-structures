var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    head: 0,
    tail: 0,
    storage: {}
  }
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;
  return instance;
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.tail] = value;
		this.tail++;
	},
	dequeue: function() {
		if(this.head < this.tail) {
			var dequeued = this.storage[this.head];
			delete this.storage[this.head];
			this.head++;
			return dequeued;
		}
	},
	size: function() {
		return this.tail - this.head;
	}
};




