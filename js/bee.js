Bee = function(x, y) {
  this.x = x;
  this.y = y;
  this.entity = Crafty.e("2D, DOM, Image")
  .attr({x: this.x, y: this.y })
  .image("images/bee.png");
}

Bee.prototype.update = function() {
  this.entity.bind('KeyDown', function(e) {
    if(e.key == Crafty.keys.LEFT_ARROW) {
      this.x = this.x - 5;
    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
      this.x = this.x + 5;
    } else if (e.key == Crafty.keys.UP_ARROW) {
      this.y = this.y - 5;
    } else if (e.key == Crafty.keys.DOWN_ARROW) {
      this.y = this.y + 5;
    }
  });
}