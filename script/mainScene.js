import Player from './player.js'

export default class MainScene extends Phaser.Scene{
  constructor(){
    super("MaineScene");
  }
  preload(){
    Player.preload(this);
    this.load.image('tiles', '../ressource/assets/decor/Solaria/32x32/Tilesets/Solaria.png');
    this.load.tilemapTiledJSON('map','../ressource/assets/decor/Solaria/32x32/Tilesets/map.json');
  }
  create(){
    const map = this.make.tilemap('map');
    const tileset = map.addTilesetImage('Solaria','tiles',32,32,0,0);
    const layer1 = map.createLayer('Layer1',tileset,0,0);
    this.player = new Player({scene:this,x:20,y:20,texture:'dude',frame:'dude_idle0'});
    let testPlayer = new Player({scene:this,x:100,y:100,texture:'dude',frame:'dude_idle0'});
    testPlayer.anims.play('dude_idle',true);
    this.player.inputKeys = this.input.keyboard.addKeys({
      up:Phaser.Input.Keyboard.KeyCodes.Z,
      down:Phaser.Input.Keyboard.KeyCodes.S,
      left:Phaser.Input.Keyboard.KeyCodes.Q,
      right:Phaser.Input.Keyboard.KeyCodes.D,
    })
  }
  update(){
    this.player.update();
  }
}
