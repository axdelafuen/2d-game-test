import MainScene from "./mainScene.js";

const config = {
  width: 950,
  height: 640,
  backgroundColor: '#333333',
  type: Phaser.AUTO,
  parent: 'gameScene',
  scene:[MainScene],
  scale:{
    zoom:1.5,
  },
  physics: {
    default: 'matter',
    matter: {
      debug:false,
      gravity:{
        y:0,
      },
    },
  },
}

document.getElementById('init').addEventListener("click", startGame);

function startGame(){
  document.getElementById('menu').style.visibility='hidden';
  document.getElementById('gameScene').style.visibility='visible';
  var game = new Phaser.Game(config);
}
//startGame();
