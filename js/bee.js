Bee = function(x, y) {
  this.x = x;
  this.y = y;
  this.entity = Crafty.e("2D, DOM, Image, Fourway")
  .attr({x: this.x, y: this.y })
  .image("images/bee.png");
}

Bee.prototype.update = function() {
  this.entity.fourway(5);
}
