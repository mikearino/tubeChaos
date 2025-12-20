import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }

  create() {
    console.log('GameScene loaded')

    this.add.text(640, 360, 'Tube Chaos', {
      fontSize: '48px',
      color: '#000'
    }).setOrigin(0.5)
  }
}
