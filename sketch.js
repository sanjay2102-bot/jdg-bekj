var ball;
var database;
var Position;
var gameState=0;
 var playerCount=0;
var game,form,player
var car1;
var car2;
var car3;
var car4;
var cars;
var allPlayers;
var car1img,car2img,car3img,car4img;
function preload(){
   car1img= loadImage("images/car1.png")
   car2img= loadImage("images/car2.png")
   car3img= loadImage("images/car3.png")
   car4img= loadImage("images/car4.png")
track1img= loadImage("images/track.jpg")


}
function setup(){


    database=firebase.database();
    createCanvas(displayWidth,displayHeight);
    game = new Game()
    game.getState();
   game.start()
   // var caref=database.ref('ball/position')
    //caref.on("value",function(data){
      //  Position=data.val()
   // ball.x=Position.x
//ball.y=Position.y  })

}


function draw(){
    background("white");
  if (playerCount===4) {
     game.updateState(1) 
    
  } 
  if(gameState===1){
   game.play() 
 }
  if(gameState===2){
    game.end() 
  }
    

}



    

