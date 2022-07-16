let ExhibitionAE;
let ExhibitionAEJPG;

function preload () {
   ExhibitionAE = loadModel('exhibitionAE.obj');
   ExhibitionAEJPG = loadImage('exhibitionAE.jpg');
}

function setup() {
  let size = min(windowWidth, windowHeight);
  createCanvas(size, size, WEBGL);
}

function draw() {
  angleMode(DEGREES);
  background(255);
  ambientLight(100);
  directionalLight(255, 255, 100, -2, 0, 1);
  rotateX(90);
  rotateZ(frameCount * 0.15);
  translate(100, 0, 0);
  normalMaterial();
  texture(ExhibitionAEJPG);
  scale(1200);
  model(ExhibitionAE);
}
