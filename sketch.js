// Define variables for Perlin noise offsets
let yoff1 = 0;
let yoff2 = 10;
let yoff3 = 20;

let xoff1 = 100;
let xoff2 = 500;
let xoff3 = 700;

let roff1 = 200;
let roff2 = 400;
let roff3 = 500;
let x;
let y;
let slider; // Declare the slider globally
let textSizeT = 32; // Text size for the title
// Variables for the scrolling text
let tickerText = "Participants and Researcher's Shared Narratives based on emergent meaning-making of one's dance education with life-long learning perspectives and transformative components in research - Participants and Researcher's Shared Narratives based on emergent meaning-making of one's dance education with life-long learning perspectives and transformative components in research";
let textX; // Position of the scrolling text

let textSpeed = 1.5; // Speed of the scrolling text

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  // Initialize the slider
  slider = createSlider(0, 0.02, 0.001, 0.001);
  slider.position(10, 10);
  slider.style('width', '200px');

  // Initialize the position of the scrolling text
  textX = width;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50, 233, 255);

  let speed = slider.value(); // Use the slider value to control the speed

  // Update the offsets with the current speed value
  yoff1 += speed;
  xoff1 += speed;
  roff1 += speed;

  yoff2 += speed;
  xoff2 += speed;
  roff2 += speed;
  
  yoff3 += speed;
  xoff3 += speed;
  roff3 += speed;


  // Calculate positions and sizes for all circles
  let y1 = noise(yoff1) * height;
  let x1 = noise(xoff1) * width;
  let r1 = noise(roff1) * 200;

  let y2 = noise(yoff2) * height;
  let x2 = noise(xoff2) * width;
  let r2 = noise(roff2) * 200;

  let y3 = noise(yoff3) * height;
  let x3 = noise(xoff3) * width;
  let r3 = noise(roff3) * 200;

  // Adjust the maxSize based on the slider's value to change the background circle size dynamically
  let baseSize = max(r1 + dist(x1, y1, width / 2, height / 2), r2 + dist(x2, y2, width / 2, height / 2), r3 + dist(x3, y3, width / 2, height / 2));
  let maxSize = baseSize + (10 * speed * 200); // Increase size based on speed

  // Draw the background circle first
  fill(27, 73, 101);
  let x =mouseX;
  let y =mouseY;
  ellipse(width/2, height/2 , width/3, height/3);
  textSize(32);
  fill(255);
  text("Dialogic Space", width/2, height/2);
  noCursor();

  // Draw lines between circles if they are close enough
  stroke(255, 255, 255);
  strokeWeight(3);
  checkAndDrawLine(x1, y1, x2, y2);
  checkAndDrawLine(x1, y1, x3, y3);
  checkAndDrawLine(x2, y2, x3, y3);

  // Draw the other circles on top
  noStroke();
  fill(98, 182, 203);
  ellipse(x1, y1, r1, r1);
  fill(95, 168, 211);
  ellipse(x2, y2, r2, r2);
  fill(52, 73, 184);
  ellipse(x3, y3, r3, r3);

  // Text labels for each circle
  fill(250);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Dance Learning Reflections", x1, y1);
  text("Multi-sensory and Embodied Modalities", x2, y2);
  text("Co-Participation in Research", x3, y3);

  // Scrolling text
  fill(50);
  textSize(textSizeT);
  text(tickerText, textX, height - 50); // Position text near the bottom of the canvas
  textX -= textSpeed; // Move text to the left
  if (textX < -textWidth(tickerText)) {
    textX = width; // Reset text position to the right once it's fully offscreen
  }
}

function checkAndDrawLine(x1, y1, x2, y2) {
  let d = dist(x1, y1, x2, y2);
  if (d < 400) { // Check if the distance between points is less than 250 pixels
    line(x1, y1, x2, y2); // Draw a line between the points if the condition is true
  }
}

