function setup() {
  createCanvas(360,640);
  
  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 1;
  volume = map(volume,0,1,0,newMax);
  
  background(255);
  push();  //Start with transformations
  translate(width/2,height/2);
  var size = map(volume,0,1,width/5,width/2);
  ellipse(0,0,size);
  pop();  //All trnsformation are now dropped and the coordinate system is resetted.
  
}