import MainScene from "./mainScene.js";

const config = {
  width: 600,
  height: 300,
  backgroundColor: '#333333',
  type: Phaser.AUTO,
  parent: 'gameScene',
  scene:[MainScene],
  scale:{
    zoom:2,
  },
  physics: {
    default: 'matter',
    matter: {
      debug:true,
      gravity:{
        y:0,
      },
    },
  },
  plugins:{
    scene:[
      {
        plugin : PhaserMatterCollisionPlugin,
        key : 'matterCollision',
        mapping : 'matterCollision'
      },
    ],
  },
}

document.getElementById('init').addEventListener("click", startGame);

function startGame(){
  document.getElementById('menu').style.visibility='hidden';
  document.getElementById('gameScene').style.visibility='visible';
  var game = new Phaser.Game(config);
}
startGame();
