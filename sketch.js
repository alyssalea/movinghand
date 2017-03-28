var handImg;
var xpos;
var ypos;

function preload (){
  handImg = loadImage("assets/hand.png");
}
function setup() {
  createCanvas (1000, 500);
  imageMode (CENTER);
  background (0);
 
  xpos = 200;
  ypos = 200;
 
  
}

function draw() {
  
  //background (0);
  tint (50, 100, 7);
  image (handImg,xpos,ypos);
  
  xpos = xpos + 1;
  
}

function mousePressed (){
  background (0);
}