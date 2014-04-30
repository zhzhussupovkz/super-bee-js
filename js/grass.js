Crafty.c("Grass", {
  init: function() {
    this.attr({
      img: Crafty.e("2D, DOM, Image")
      .attr({x: 0, y: 440 })
      .image("images/green.png"),
      flowers: []
    });
    this.generate_flowers();
  },

  generate_flowers: function() {
    for (var i = 50; i <= 600; i = i + 75) {
      flower = Crafty.e("Flower").create(i, 425);
      this.flowers.push(flower);
    };
  }
});
