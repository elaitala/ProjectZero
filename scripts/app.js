console.log('The game is running...')

// Build and scroll the road
// Scroll down and stitch image together to create road movine effect
// Set speed to static. Allow arrow up/down buttons to speed up/slow down scroll

// Step 1: Start the game
// $('button').on('click', () => {
//   console.log('Game starts...');
//   setUpRound();
//   setTimer();
// });


// Build the motorcycle
// Add rectangle that represents the motorcycle. 
// Move motorcycle laterally
// Use arrow right/left to control 


// Build cars
// Add rectangles that move in parallax with the road
// Number of cars to navigate is an array

// const createCars = (numberOfCars) => {
//   const $cars = $('.cars');
//   for (let i = 0; i < numberOfCars; i++) {
//      const $car = $('<div class="car"/>')
//      $car.css('background-color', applyRandomColor());
//      $cars.append($car)
//   }
// }


// Add object collision
// 
var motorcycle;
var traffic = [];

window.addEventListener('keydown', keyDownHandler, false);
window.addEventListener('keyup', keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownHandler(event) {
  if(event.keyCode == 39) {
    console.log('Go right!');  
    rightPressed = true;
  }
  else if(event.keyCode == 37) {
    console.log('Go left!');
      leftPressed = true;
  }
  if(event.keyCode == 40) {
    console.log('Go slower!');
    downPressed = true;
  }
  else if(event.keyCode == 38) {
    console.log('Go faster!');
    upPressed = true;
  }
}

function keyUpHandler(event) {
  if(event.keyCode == 39) {
    console.log('Stop right!');  
    rightPressed = false;
  }
  else if(event.keyCode == 37) {
    console.log('Stop left!');
      leftPressed = false;
  }
  if(event.keyCode == 40) {
    console.log('Stop slower!');
    downPressed = false;
  }
  else if(event.keyCode == 38) {
    console.log('Stop faster!');
    upPressed = false;
  }
}

// function keyPressed(){
//   if(key == 'A' || keyCode == LEFT_ARROW){
//     console.log('Left pressed');
//     motorcycle.vel.x = -motorcycle.speed;
//       }if(key == 'D' || keyCode == RIGHT_ARROW){
//         console.log('Right pressed');
//         motorcycle.vel.x = motorcycle.speed;
//       }
//   }

// function keyReleased(){
//   if(key == 'A' || keyCode == LEFT_ARROW || key == 'D' || keyCode == RIGHT_ARROW){
//     console.log('Release');
//     motorcycle.vel.x = 0;
//   }
// }