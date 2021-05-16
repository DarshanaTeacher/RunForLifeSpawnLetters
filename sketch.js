var canvas, bgImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0
var database;

var form, player, game;
var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img;
var track;
var carsAtEnd;
var swimmer, swimmerImg;
var bg1, bg2, water_img;
var bg1img, bg2img, bg3img;
var water = [];
var length = 13500;
var PIX_PER_M = 250
var POOL_LENGTH = 50 * PIX_PER_M // Pool length in pixels
var letters1, letters2, letters3, letters4, letters5;
var letters6, letters7, letters8, letters9, letters10;
var letters11, letters12, letters13, letters14, letters15;
var letters16, letters17, letters18, letters19, letters20;
var letters21, letters22, letters23, letters24, letters25, letters26, lettersGroup;

function preload(){

  bg1 = loadImage("Images/2Full_Background2.png");
  bg2 = loadImage("Images/Full_Background.png");
  water_img = loadImage("Images/water.png");

  swimmerImg =loadAnimation("Images/tile003.png","Images/tile000.png","Images/tile001.png","Images/tile002.png")

letters1  = loadImage("Images/letters1.png" );
letters2  = loadImage("Images/letters2.png" );
letters3  = loadImage("Images/letters3.png" );
letters4  = loadImage("Images/letters4.png" );
letters5  = loadImage("Images/letters5.png" );
letters6  = loadImage("Images/letters6.png" );
letters7  = loadImage("Images/letters7.png" );
letters8  = loadImage("Images/letters8.png" );
letters9  = loadImage("Images/letters9.png" );
letters10 = loadImage("Images/letters10.png");
letters11 = loadImage("Images/letters11.png");
letters12 = loadImage("Images/letters12.png");
letters13 = loadImage("Images/letters13.png");
letters14 = loadImage("Images/letters14.png");
letters15 = loadImage("Images/letters15.png");
letters16 = loadImage("Images/letters16.png");
letters17 = loadImage("Images/letters17.png");
letters18 = loadImage("Images/letters18.png");
letters19 = loadImage("Images/letters19.png");
letters20 = loadImage("Images/letters20.png");
letters21 = loadImage("Images/letters21.png");
letters22 = loadImage("Images/letters22.png");
letters23 = loadImage("Images/letters23.png");
letters24 = loadImage("Images/letters24.png");
letters25 = loadImage("Images/letters25.png");
letters26 = loadImage("Images/letters26.png");

}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  
  database = firebase.database();
  
  swim_distance = 0;

  background("rgba(86, 210, 255, 0.4)");
  
  game = new Game();
  
  lettersGroup = new Group();
  game.getState();
  game.start();
    
}

function draw() {     

  if(playerCount === 4){
    game.update(1);
    
  } 
  if(gameState === 1){
    clear();
    game.play();
    
  }
    
  if(gameState === 2 && carsAtEnd === 4){
    clear();
    game.displayRanks();
  }


  drawSprites();
}


function spawnLetters(){

for(var i = 300; i<= displayWidth; i = i + 300)
{
var letters = createSprite(i, displayHeight - 400 ,100,100)
       
 var rand = Math.round(random(1,5));
 
     switch(rand) {
       case 1: letters.addImage(letters1);
               break;
       case 2: letters.addImage(letters2);
               break;
       case 3: letters.addImage(letters3);
               break;
       case 4: letters.addImage(letters4);
               break;
       case 5: letters.addImage(letters5);
               break;
       default: break;

     }
} 
} 
  
      /*  case 6: letters.addImage(letters6);
               break;
       case 7: letters.addImage(letters7);
               break;
       case 8: letters.addImage(letters8);
               break;
       case 9: letters.addImage(letters9);
               break;
       case 10: letters.addImage(letters10);
               break;
       case 11: letters.addImage(letters11);
               break;
       case 12: letters.addImage(letters12);
               break;
       case 13: letters.addImage(letters13);
               break;
       case 14: letters.addImage(letters14);
               break;
       case 15: letters.addImage(letters15);
               break;
       case 16: letters.addImage(letters16);
               break;
       case 17: letters.addImage(letters17);
               break;
       case 18: letters.addImage(letters18);
               break;
       case 19: letters.addImage(letters19);
               break;
       case 20: letters.addImage(letters20);
               break;
       case 21: letters.addImage(letters21);
               break;
       case 22: letters.addImage(letters22);
               break;
       case 23: letters.addImage(letters23);
               break;
       case 24: letters.addImage(letters24);
               break; 
       case 25: letters.addImage(letters22);
               break;
       case 26: letters.addImage(letters23);
               break;                                   
       
           }
        }
     //assign scale and lifetime to the letters           
     
  /*if (frameCount % 30 === 0){
    var letters = createSprite(displayWidth, displayHeight - 300 ,100,100);
    letters.velocityX = -6;
    letters.scale = 0.7;
    letters.lifetime = 300;
    
    //add each letters to the group
    lettersGroup.add(letters);

  }*/


