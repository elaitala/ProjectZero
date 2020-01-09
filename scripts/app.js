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
// var rect1 = {x: 5, y: 5, width: 50, height: 50}
// var rect2 = {x: 20, y: 10, width: 10, height: 10}

// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.y + rect1.height > rect2.y) {
//     // collision detected!
// }

var motorcycle = {
  x: 0,
  y: 0,
  width: 35,
  height: 75,
};

var car = {
  x: null,
  y: null,
  width: 75,
  height: 100,
};

setInterval(function (){
  var carPos = $('#car').position();
  car.x = carPos.left;
  car.y = carPos.top;
  // console.log('Car X: ' + car.x + ", Y: " + car.y );

  var motorcyclePos = $('#motorcycle').position();
  motorcycle.x = motorcyclePos.left;
  motorcycle.y = motorcyclePos.top;
  // console.log('Mcy X: ' + motorcycle.x + ", Y: " + motorcycle.y );

  // Collision Detection
  if (motorcycle.x < car.x + car.width &&
    motorcycle.x + motorcycle.width > car.x &&
    motorcycle.y < car.y + car.height &&
    motorcycle.y + motorcycle.height > car.y) {
    // collision detected!
     console.log('Splat!!');
     return;
     
  }
},100)



var traffic = [];

window.addEventListener('keydown', keyDownHandler, false);
window.addEventListener('keyup', keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownHandler(event) {
  if(event.keyCode == 39) {
    // console.log('Go right!');  
    rightPressed = true;
    $(".motorcycle").animate({
      left: "+=20"
    });
    motorcycle.x +=20;
}
  else if(event.keyCode == 37) {
    // console.log('Go left!');
      leftPressed = true;
      $(".motorcycle").animate({
        left: "-=20"
      });
      motorcycle.x -=20;
    }
  if(event.keyCode == 40) {
    // console.log('Go slower!');
    downPressed = true;
  }
  else if(event.keyCode == 38) {
    // console.log('Go faster!');
    upPressed = true;
  }
}

function keyUpHandler(event) {
  if(event.keyCode == 39) {
    // console.log('Stop right!');  
    rightPressed = false;
  }
  else if(event.keyCode == 37) {
    // console.log('Stop left!');
      leftPressed = false;
  }
  if(event.keyCode == 40) {
    // console.log('Stop slower!');
    downPressed = false;
  }
  else if(event.keyCode == 38) {
    // console.log('Stop faster!');
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