EnemyBee = function(x, y) {
  this.x = x;
  this.y = y;
  this.entity = Crafty.e("2D, DOM, Image")
  .attr({x: this.x, y: this.y })
  .image("images/bee-r.png");
}