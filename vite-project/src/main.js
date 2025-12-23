import Phaser, { Physics } from "phaser";
import GameScene from "./scenes/GameScene";

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#a8e518',
  scene: [GameScene],
  physics: {
    default: 'arcade',
    arcade: {debug:true}
  }
}

new Phaser.Game(config);



