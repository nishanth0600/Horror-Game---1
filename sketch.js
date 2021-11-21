function setup() {
  createCanvas(800,400);
  player=createSprite(400, 200, 50, 50);
  door1=createSprite(798, 330, 10, 70)
  door2=createSprite(798, 1, 10, 70);


}

function draw() {
  background("yellow");
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(keyDown("W")){
    player.y=player.y-3
  }
  if(keyDown("D")){
    player.x=player.x+3
  }
  if(keyDown("S")){
    player.y=player.y+3
  }
  if(player.isTouching(door1)){
    player.y=1;
  player.x=798
  }
  camera.position.x=player.x; 
  camera.position.y=player.y;
  drawSprites();
}