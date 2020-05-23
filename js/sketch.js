let img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('img/bg.svg')
  background(bg)
  img = loadImage('img/writing.png')
  image(img,0,height/2,img.width/2,img.height/2);


}

function draw() {
  
  stroke(0);
  strokeWeight(4);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }


}