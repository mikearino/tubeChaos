export default class Player extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, textureKey, flip = false) {
        super (scene, x, y, textureKey)

        scene.add.existing(this);
        this.setOrigin(0.5, 0.5);
        this.setPosition(scene.cameras.main.centerX, scene.cameras.main.centerY);

        if(flip) {
            this.setFlipX(true)
        }
    }

}