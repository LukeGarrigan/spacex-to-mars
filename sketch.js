

let earth;
let mars;
let rocket;
let distanceBetweenPlanets;

let earthX;
let earthY;

let marsX;
let marsY;

let planetRadius;

let launchDate;
let launchDateSinceEpoch;
let currentDate;
let currentDateSinceEpoch;
let landDateSinceEpoch;
let actualRocketPosition;

let currentRocketPosition = 0;


function setup() {
  createCanvas(windowWidth,windowHeight);
  earth = loadImage("earth.png");
  mars = loadImage("mars.png");
  rocket = loadImage("rocket.png");
  planetRadius = 174/2;

  earthX = 50 + planetRadius;
  earthY = height/2;

  marsX = width-300 + planetRadius;
  marsY = height/2;


  distanceBetweenPlanets = marsX - earthX;

  launchDate = new Date(2018, 1, 5);
  launchDateSinceEpoch =  Math.floor(launchDate/8.64e7);

  currentDate = new Date();
  currentDateSinceEpoch = Math.floor(currentDate/8.64e7);

  landDateSinceEpoch = launchDateSinceEpoch + 273.75;

  actualRocketPosition = map(currentDateSinceEpoch, launchDateSinceEpoch, landDateSinceEpoch, earthX+planetRadius, marsX-planetRadius);
  currentRocketPosition = earthX + planetRadius;
  console.log(currentRocketPosition);

}


function draw() {
  background(0);
  currentRocketPosition = lerp(currentRocketPosition, actualRocketPosition, 0.01);

  push()
  translate(earthX, earthY);
  rotate(frameCount*TWO_PI/360);
  imageMode(CENTER);
  image(earth, 0, 0);
  pop();


  push()
  translate(marsX, marsY);
  rotate(frameCount*TWO_PI/360);
  imageMode(CENTER);
  image(mars, 0, 0);
  pop();
  image(rocket, currentRocketPosition, height/2-30);

  let numberOfDaysTillLand = landDateSinceEpoch - currentDateSinceEpoch;

  let numberOfDaysTravelled = currentDateSinceEpoch - launchDateSinceEpoch;
  fill(255);
  textSize(20);
  text()
  text(numberOfDaysTravelled+ " days since launch!", width-300, height-130);
  text(numberOfDaysTillLand+ " days until orbit!", width-300, height-100);






}
