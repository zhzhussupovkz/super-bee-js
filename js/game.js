Game = function() {
  Crafty.init(640,480, document.getElementById('game-window'));
  Crafty.background("url('images/background.png') no-repeat center center")
  this.bee = Crafty.e("Bee").go(600, 200);
  this.grass = Crafty.e("Grass");
  this.enemies = []
  this.generate_enemies();
}

Game.prototype.generate_enemies = function() {
  for (var i = 20; i <= 450; i = i + 50) {
    y = Math.floor(Math.random() * (416 - 95)) + 95
    enemy = Crafty.e("EnemyBee").go(i, y);
    this.enemies.push(enemy);
  };
}
