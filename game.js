
const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;

// River / Shore layout

const RIVER_WIDTH = 800;
const SHORE_TILE_WIDTH = 32;
const SHORE_WIDTH = (SCREEN_WIDTH - RIVER_WIDTH) / 2;

// X positions
const WATER_X = SHORE_WIDTH;
const RIGHT_SHORE_X = SHORE_WIDTH + RIVER_WIDTH;

// Movement
const WATER_SCROLL_SPEED = 0.2; // pixels per ms


const config = {
    type: Phaser.AUTO,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('water', 'assets/images/water.png')
    this.load.image('shore', 'assets/images/shore.png')
};

function create(){

    //formulas for screen center
    const centerX = this.sys.game.config.width / 2;
    const centerY = this.sys.game.config.height / 2;

    //sand/grass bg
    this.cameras.main.setBackgroundColor(0xa8e518);

    //water layer
    water = this.add.tileSprite(
        centerX,
        centerY,
        800,
        720,
        'water'
    ).setOrigin(0.5, 0.5);

    this.leftshore = this.add.tileSprite(
        WATER_X - SHORE_TILE_WIDTH,
        0,
        SHORE_TILE_WIDTH,
        SCREEN_HEIGHT,
        'shore'
    ).setOrigin(0,0);


     this.rightshore = this.add.tileSprite(
        RIGHT_SHORE_X,
        0,
        SHORE_TILE_WIDTH,
        SCREEN_HEIGHT,
        'shore'
    ).setOrigin(0,0)
    .setFlipX(true);
}

function update(time, delta) {
    // scroll water downward
    water.tilePositionY += 0.2 * delta;
}