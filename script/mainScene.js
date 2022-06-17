import Player from './player.js'

export default class MainScene extends Phaser.Scene{
  constructor(){
    super("MaineScene");
  }
  preload(){
    Player.preload(this);
  }
  create(){
    this.player = new Player({scene:this,x:0,y:0,texture:'dude',frame:'dude_idle0'});
    //let testPlayer = new Player({scene:this,x:100,y:100,texture:'dude',frame:'dude_idle0'});
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
