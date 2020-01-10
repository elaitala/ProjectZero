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
var traffic = [];
var passed = [];
var counter = 10;

var motorcycle = {
  x: 0,
  y: 0,
  width: 35,
  height: 75,
  life: 1,
};

var car = {
  x: null,
  y: null,
  width: 75,
  height: 100,
};

var total = 0;

const game = () => { 
  const frames = setInterval(function (){
  // for (let i = 0; i < traffic.length; i++) {
  // for (let i = 0; i < 3; i++) {
    const $cager = $(`<div id="car${total}" class="cars"/>`)
    // traffic[i].push("")
    // $cager.css("animation-delay",2000);
    let lanes = [40,190,340]

    if(total%2 === 0){
    
      if(Boolean(Math.round(Math.random()))){
        $cager.css('right', lanes[Math.floor(Math.random()*lanes.length)])
      $("#car-container").append($cager);
      traffic.push($cager);
      }
       
    }
    
    // console.log(traffic);
    total ++;
    console.log ('Total = ' + total);
    
  // 
for (let i = 0; i < traffic.length; i++) {
  var carPosition = $(traffic[i][0]).position();
  car.x = carPosition.left;
  car.y = carPosition.top;
  
  // console.log($(traffic[i]));
  console.log($(traffic[i][0]).position());
  // debugger;
  // console.log(carPosition);
  if (carPosition.top > 400){
    traffic[i][0].remove();
    traffic.splice(i,1);
    passed.push(0);
    counter = counter -1;
    console.log(counter);
  }
// append from traffic to new PASSED array, measure length
  // add collision here

console.log('Traffic: ' + traffic.length);
console.log('Passed: ' + passed.length);
$('#score').text(`Traffic: ${counter} cars`);

// }
  
  // var carPos = $('#car').position();
  // car.x = carPos.left;
  // car.y = carPos.top;
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
      clearInterval(frames);
      traffic = [];
      $("#game-over").css("display","block");
      $(".road").css("animation","none");
      $(".cars").css("display","none");
      $(".motorcycle").css("display","none");
      // clearMe = true; // Used to clear the canvas from any ships		
      // subtract from life 
      // motorcycle.life -=1;       
    }
            
    //  WINNER condition
            if (passed.length === 10){
              console.log('Winner!!');
                clearInterval(frames);
                traffic = [];
                $("#winner").css("display","block");
                $(".road").css("animation","none");
                $(".cars").css("animation","none");
                $(".cars").css("display","none");
          
          }
}
  
},500)
}

// Use ARROW KEYS to control the motorcycle
// Use SPACE BAR to start
window.addEventListener('keydown', keyDownHandler, false);
window.addEventListener('keyup', keyUpHandler, false);

// var spacePressed = false;
// var rightPressed = false;
// var leftPressed = false;
// var upPressed = false;
// var downPressed = false;

function keyDownHandler(event) {
  if(event.keyCode == 32) {
    console.log('Space bar');  
    spacePressed = true;
    $("#road").addClass("road");
    // $("#car-container > .car").addClass("cars");
    game();
   
    // Right ARROW and boundary
  } else if(event.keyCode == 39){ //&& motorcycle.x < 400) {
    // console.log('Go right!');  
    console.log('Motorcycle at ' + motorcycle.x);
    // rightPressed = true;
    $(".motorcycle").animate({
      left: "+=25"
    });
    motorcycle.x +=20;
}
  // Left ARROW and boundary
    else if(event.keyCode == 37){ //&& motorcycle.x > 40) {
    // console.log('Go left!');
      // leftPressed = true;
      $(".motorcycle").animate({
        left: "-=25"
      });
      motorcycle.x -=20;
    }
  if(event.keyCode == 40) {
    // console.log('Go slower!');
    // downPressed = true;
  }
  else if(event.keyCode == 38) {
    // console.log('Go faster!');
    // upPressed = true;
  }
}

function keyUpHandler(event) {
  if(event.keyCode == 39) {
    // console.log('Stop right!');  
    // rightPressed = false;
  }
  else if(event.keyCode == 37) {
    // console.log('Stop left!');
      // leftPressed = false;
  }
  if(event.keyCode == 40) {
    // console.log('Stop slower!');
    // downPressed = false;
  }
  else if(event.keyCode == 38) {
    // console.log('Stop faster!');
    // upPressed = false;
  }
}
