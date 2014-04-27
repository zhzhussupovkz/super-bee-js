Game = function() {
  Crafty.init(640,480, document.getElementById('game-window'));
  Crafty.background("url('images/background.png') no-repeat center center")
  this.bee = new Bee(600, 200);
}

Game.prototype.update = function() {
  this.bee.update();
}