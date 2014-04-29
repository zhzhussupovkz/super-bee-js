Flower = function(x, y) {
  this.x = x;
  this.y = y;
  images = ['blue_flower', 'red_flower', 'white_flower', 'pink_flower'];
  image = images[Math.floor(Math.random() * images.length)];
  this.entity = Crafty.e("2D, DOM, Image")
  .attr({x: this.x, y: this.y })
  .image("images/flowers/" + image + ".png");
}
