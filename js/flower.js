Crafty.c("Flower", {

  init: function() {
    this.attr({
      img: null
    });
  },

  create: function(cx, cy) {
    images = ['blue_flower', 'red_flower', 'white_flower', 'pink_flower'];
    image = images[Math.floor(Math.random() * images.length)];
    this.attr({
      img: Crafty.e("2D, DOM, Image")
      .attr({x: cx, y: cy })
      .image("images/flowers/" + image + ".png")
    });
    return this;
  }
});
