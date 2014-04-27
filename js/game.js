Game = function() {
  Crafty.init(640,480, document.getElementById('game-window'));
  Crafty.background("url('images/background.png') no-repeat center center")
  this.bee = new Bee(600, 200);
  this.enemies = []
  this.generate_enemies();
}

Game.prototype.generate_enemies = function() {
  for (var i = 20; i <= 450; i = i + 50) {
    y = Math.floor(Math.random() * (426 - 95)) + 95
    enemy = new EnemyBee(i, y);
    this.enemies.push(enemy);
  };
}

Game.prototype.update = function() {
  this.bee.update();
}