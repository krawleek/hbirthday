let col={
  r:0,
  g:0,
  b:0,
}

function setup() {
  createCanvas(windowWidth-155, windowHeight);
}

function draw() {
  col.r=random(0,255);
  col.g=random(0,255);
  col.b=random(0,255);

  stroke(col.r, col.g, col.b);
  strokeWeight(4);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }


}