describe('redBlackTree', function() {
  var redBlackTree;

  beforeEach(function() {
    redBlackTree = makeRedBlackTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(redBlackTree.insert).to.be.a("function");
    expect(redBlackTree.contains).to.be.a("function");
    expect(redBlackTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    expect(redBlackTree.value).to.equal(5);
    expect(redBlackTree.color).to.equal('black');
    redBlackTree.insert(2);
    expect(redBlackTree.left.value).to.equal(2);
    expect(redBlackTree.left.color).to.equal('red');
    redBlackTree.insert(3);
    redBlackTree.insert(7);
    redBlackTree.insert(6);
    expect(redBlackTree.left.right.value).to.equal(3);
    expect(redBlackTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.insert(7);
    expect(redBlackTree.contains(7)).to.equal(true);
    expect(redBlackTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.depthFirstLog(func);
    console.log(array);
    expect(array).to.eql([5,2,3]);
  });
});
