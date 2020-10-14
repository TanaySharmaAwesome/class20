var fixrect, movingrect;

function setup() {
  createCanvas(windowWidth,windowHeight);

  fixrect = createSprite(400, 200, 50, 50);
  movingrect= createSprite(400, 400, 50,50);
  //fixrect.debug=true;
  //movingrect.debug=true;

  fixrect.shapeColor="red";
  movingrect.shapeColor="red";
}

function draw() {
  background("green"); 
  
  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;

  if(fixrect.width/2 +movingrect.width/2>movingrect.x-fixrect.x &&
    fixrect.width/2 +movingrect.width/2>fixrect.x-movingrect.x &&
    fixrect.height/2 +movingrect.height/2>movingrect.y-fixrect.y &&
    fixrect.height/2 +movingrect.height/2>fixrect.y-movingrect.y){
    fixrect.shapeColor="green";
    movingrect.shapeColor="green";
  }else{
    fixrect.shapeColor="red";
    movingrect.shapeColor="red";

  }
  
  drawSprites();
}
/*fixrect.width/2 +movingrect.width/2===movingrect.x-fixrect.x)
25+25=== 450 -400*/