Crafty.c("Bee", {
  init: function() {
    this.attr({
      x: 0,
      y: 0,
      img: null
    });
  },

  go: function(cx, cy) {
    this.attr({
      x: cx,
      y: cy,
      img: Crafty.e("2D, DOM, Image, Fourway")
      .attr({x: cx, y: cy })
      .image("images/bee.png")
      .fourway(5)
    });
    return this;
  }
});
