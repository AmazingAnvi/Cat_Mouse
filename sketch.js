
function preload() {
    catImage = loadAnimation("tomThree.png","tomTwo.png")
    mouseImage = loadAnimation("jerryThree.png","jerryTwo.png")
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(200,200,50,50);
    mouse = createSprite(300,300,60,60);
}

function draw() {

    background(255);


    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImage2);
    cat.changeAnimation("catRunning");
  } 
}

text(mouseX + ',' + mouseY,10,45);


