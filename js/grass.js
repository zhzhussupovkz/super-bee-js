Grass = function(x, y) {
  this.x = x;
  this.y = y;
  this.entity = Crafty.e("2D, DOM, Image")
  .attr({x: this.x, y: this.y })
  .image("images/green.png");
  this.flowers = [];
  this.generate_flowers();
}

Grass.prototype.generate_flowers = function() {
  for (var i = 50; i <= 600; i = i + 75) {
    flower = new Flower(i, 425);
    this.flowers.push(flower);
  };
}
