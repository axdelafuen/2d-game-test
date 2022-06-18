import Player from './player.js'

export default class MainScene extends Phaser.Scene{
  constructor(){
    super("MaineScene");
  }
  preload(){
    Player.preload(this);
    this.load.image('tiles', '../ressource/assets/Tilesets/Solaria.png');
    this.load.tilemapTiledJSON('map','../ressource/assets/Tilesets/Solaria.json');
  }
  create(){
    const map = this.make.tilemap({key:'map'});
    const tileset = map.addTilesetImage('Solaria','tiles',32,32,0,0);
    const layer1 = map.createLayer('Layer1-Island',tileset,0,0);
    const layer2 = map.createLayer('Layer2-Border',tileset,0,0);
    const layer3 = map.createLayer('Layer3-Sea',tileset,0,0);
    const layer4 = map.createLayer('Layer4-Object',tileset,0,0);
    const layer5 = map.createLayer('Layer5-DecoFront',tileset,0,0);
    const layer6 = map.createLayer('Layer6-DecoBack',tileset,0,0);

    layer2.setCollisionByProperty({collide:true});
    this.matter.world.convertTilemapLayer(layer2);
    layer4.setCollisionByProperty({collide:true});
    this.matter.world.convertTilemapLayer(layer4);

    this.player = new Player({scene:this,x:500,y:400,texture:'dude',frame:'dude_idle0'});
    let testPlayer = new Player({scene:this,x:150,y:150,texture:'dude',frame:'dude_idle0'});
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
