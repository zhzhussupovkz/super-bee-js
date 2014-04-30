Crafty.c("EnemyBee", {
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
      img: Crafty.e("2D, DOM, Image, Tween")
      .attr({x: cx, y: cy })
      .image("images/bee-r.png")
    });
    return this;
  }
});
