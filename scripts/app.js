console.log('The game is running...')

// Build and scroll the road
// Scroll down and stitch image together to create road movine effect
// Set speed to static. Allow arrow up/down buttons to speed up/slow down scroll

// Step 1: Start the game
$('button').on('click', () => {
  console.log('Game starts...');
  game();
  // setTimer();
});


// Build the motorcycle
// Add rectangle that represents the motorcycle. 
// Move motorcycle laterally
// Use arrow right/left to control 


// Build cars
// Add rectangles that move in parallax with the road
// Number of cars to navigate is an array

// Add object collision

// var traffic = []; // Array to hold cars
// var passed = [];  // Array to track cars passed
// var counter = 10; // Number of cars each round
// const step = 25; // Pixels of each step LEFT/RIGHT

var motorcycle = {
  x: null,
  y: null,
  width: 35,
  height: 75,
};

var car = {
  x: null,
  y: null,
  width: 75,
  height: 100,
};

const step = 25; // Pixels of each step LEFT/RIGHT
var total = 0;

const game = () => { 
  var traffic = []; // Array to hold cars
  var passed = [];  // Array to track cars passed
  var counter = 10; // Number of cars each round
  


  const frames = setInterval(function (){
    const $cager = $(`<div id="car${total}" class="cars"/>`)
    // Define the 3 lanes for TRAFFIC
    let lanes = [40,190,340]
    if(total%2 === 0){
      if(Boolean(Math.round(Math.random()))){
        $cager.css('right', lanes[Math.floor(Math.random()*lanes.length)])
      $("#car-container").append($cager);
      traffic.push($cager);
      }
    }
    total ++;
    console.log ('Total = ' + total);
    
    // CAR POSITION TRACKING variables and LOOP to populate screen
    for (let i = 0; i < traffic.length; i++) {
      var carPosition = $(traffic[i][0]).position();
      car.x = carPosition.left;
      car.y = carPosition.top;
  
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

      console.log('Traffic: ' + traffic.length);
      console.log('Passed: ' + passed.length);
      $('#score').text(`Traffic: ${counter} cars`);

      // MOTORCYCLE POSITION TRACKING variables
      var motorcyclePos = $('#motorcycle').position();
      motorcycle.x = motorcyclePos.left;
      motorcycle.y = motorcyclePos.top;
  
      // Collision Detection
      // GAME OVER condition
      if (motorcycle.x < car.x + car.width &&
        motorcycle.x + motorcycle.width > car.x &&
        motorcycle.y < car.y + car.height &&
        motorcycle.y + motorcycle.height > car.y) {
        // collision detected!
        console.log('Splat!!');
        clearInterval(frames);
        traffic = [];
        $("#game-over").css("display","block");
        $("#road").removeClass("road");
        // $(".road").css("animation","none");
        $(".cars").css("display","none");
        $(".motorcycle").css("display","none");
        }
            
      //  WINNER condition
      if (passed.length === 10){
        console.log('Winner!!');
        clearInterval(frames);
        traffic = [];
        $("#winner").css("display","block");
        $("#road").removeClass("road");
        // $(".road").css("animation","none");
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

function keyDownHandler(event) {
  if(event.keyCode == 32) {
    console.log('Space bar');  
    $("#road").addClass("road");
    $("#game-over").css("display","none");
    $("#winner").css("display","none");
    $(".motorcycle").css("display","block");
    game();
   
    // Right ARROW and boundary
  } else if(event.keyCode === 39 && motorcycle.x < 405) {
      // console.log('Go right!');  
      console.log('Motorcycle at ' + motorcycle.x);
      // rightPressed = true;
      $(".motorcycle").animate({
        left: `+=${step}`
        // left: "+=25"
      });
      motorcycle.x +=step;
  // Left ARROW and boundary
  }  else if(event.keyCode === 37 && motorcycle.x > 30) {
      // console.log('Go left!');
      console.log('Motorcycle at ' + motorcycle.x);
      // leftPressed = true;
      $(".motorcycle").animate({
        left: `-=${step}`
        // left: "-=25"
      });
      motorcycle.x -=step;
  }
  if(event.keyCode === 40) {
    // console.log('Go slower!');
    // downPressed = true;
  }
  else if(event.keyCode === 38) {
    // console.log('Go faster!');
    // upPressed = true;
  }
}

function keyUpHandler(event) {
  if(event.keyCode === 39) {
    // console.log('Stop right!');  
    // rightPressed = false;
  }
  else if(event.keyCode === 37) {
    // console.log('Stop left!');
      // leftPressed = false;
  }
  if(event.keyCode === 40) {
    // console.log('Stop slower!');
    // downPressed = false;
  }
  else if(event.keyCode === 38) {
    // console.log('Stop faster!');
    // upPressed = false;
  }
}
