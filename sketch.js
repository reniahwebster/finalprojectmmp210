let input, button, greeting;
let snowflakes = []; // array to hold snowflake objects
let randomColor;
let randomTranslate = [];
let hasClicked = false;
let name;
let capture;
let photo;
//let maskImage;
//let song;

function setup() {
   capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
    
  // create canvas
createCanvas(1280, 606);
        for (let i = 0; i < 5; i++){
        randomTranslate[i] = [];
        randomTranslate[i][0]= random(width);
        randomTranslate[i][1]= random(height);
    }
background('pink');
randomColor = color(random(255),random(255), random(255));

//song = loadSound('.mp3');
  
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(clickBool);

  greeting = createElement('h2', 'Hello! What is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(80);
}

function draw() {
  //background('pink');
    greet();
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
    
image(capture, 475, 200, 320, 240);

fill(255,0,0);
arc(width/2, 200, 280, 280, PI, TWO_PI);

fill(255);
ellipse(800, 195, 55, 55);

textSize(32);
text('Merry Christmas!', 640, 190);
    
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
           //push();
          //fill(0);
         //beginShape();
        //vertex(0,0); //look up curveVertex()
       //vertex(0, height);
      //vertex(width/3, height);
     //vertex(width/3, height/2);
    //vertex(2*width/3, height/2);
   //vertex(2*width/3, height);
  //vertex(width, height);
 //vertex(width, 0);
//endShape(CLOSE);
//pop();
 
}

function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
      fill(240);
      noStroke();
    ellipse(this.posX, this.posY, this.size);
  };
}
   
function greet() {
    background('pink');
    if (hasClicked){
//  const name = input.value();
  greeting.html('Hi ' + name + '! Nice to meet you!');
  //input.value('');
     fill(random(255), random(255), random(255));

  for (let i = 0; i < 5; i++) {
    push();
   
    translate(randomTranslate[i][0], randomTranslate[i][1]);
    rotate//(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
    }
}

function clickBool(){
    name = input.value();
//hasClicked = !hasClicked
    hasClicked = true;
}