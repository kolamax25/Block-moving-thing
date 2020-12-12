var fixR, movR

function setup() {
  createCanvas(1200,800);
  fixR = createSprite(600, 400, 50, 80);
  fixR.shapeColor = ("green");
  fixR.debug = true;
  movR = createSprite(400, 200, 80, 30);
  movR.shapeColor = ("yellow");
  movR.debug = true;

}

function draw() {
  background(0); 
  movR.x = World.mouseX;
  movR.y = World.mouseY;
  if (movR.x - fixR.x < fixR.width/2 + movR.width/2
    &&fixR.x- movR.x < fixR.width/2 + movR.width/2
    &&movR.y - fixR.y < fixR.height/2 + movR.height/2
      &&fixR.y- movR.y < fixR.height/2 + movR.height/2
     ){

    movR.shapeColor = ("red");
    fixR.shapeColor = ("blue");
  }
  else {
    
    movR.shapeColor = ("green");
    fixR.shapeColor = ("yellow");

  }
  

  drawSprites();
}