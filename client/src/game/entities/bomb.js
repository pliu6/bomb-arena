var Bomb = function(x, y) {
	Phaser.Sprite.call(this, game, x, y, 'bomb');

	this.anchor.setTo(.5, .5);

	game.physics.enable(this, Phaser.Physics.ARCADE);

	game.add.existing(this);
}

Bomb.prototype = Object.create(Phaser.Sprite.prototype);

module.exports = Bomb;