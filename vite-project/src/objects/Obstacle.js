export default class Obstacle extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y, textureKey, flip = false) {
    super(this.scene, x, y, textureKey)
    
    scene.add.existing(this);

    this.setOrigin(0,0);

    if (flip) {
      this.setFlipX(true);
    }
  }
}