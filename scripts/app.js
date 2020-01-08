// Build and scroll the road
// Scroll down and stitch image together to create road movine effect
// Set speed to static. Allow arrow up/down buttons to speed up/slow down scroll

// Step 1: Start the game
$('button').on('click', () => {
  console.log('Game starts...');
  setUpRound();
  setTimer();
});


// Build the motorcycle
// Add rectangle that represents the motorcycle. 
// Move motorcycle laterally
// Use arrow right/left to control 


// Build cars
// Add rectangles that move in parallax with the road
// Number of cars to navigate is an array

const createCars = (numberOfCars) => {
  const $cars = $('.cars');
  for (let i = 0; i < numberOfCars; i++) {
     const $car = $('<div class="car"/>')
     $car.css('background-color', applyRandomColor());
     $cars.append($car)
  }
}


// Add object collision
// 

// // inside main_javascript.js 
  
// var road = document.getElementById('canvas'); 
  
// // The 2D Context for the HTML canvas element. It 
// // provides objects, methods, and properties to draw and 
// // manipulate graphics on a canvas drawing surface. 
// var ctx = road.getContext('2d'); 
  
// // canvas width and height 
// road.width = 1500; 
// road.height =1000; 
  
// // create an image element 
// var img = new Image(); 
  
// // specify the image source relative to the html or js file 
// // when the image is in the same directory as the file 
// // only the file name is required: 
// img.src = "/images/3_lane_road.png"; 
  
// // window.onload is an event that occurs when all the assets 
// // have been succesfuly loaded( in this case only the spacebg.png) 
// window.onload = function() { 
//     // the initial image height 
//     var imgHeight = 0; 
  
//     // the scroll speed 
//     // an important thing to ensure here is that can.height 
//     // is divisible by scrollSpeed 
//     var scrollSpeed = 10; 
  
//     // this is the primary animation loop that is called 60 times 
//     // per second 
//     function loop() 
//     { 
//         // draw image 1 
//         ctx.drawImage(img, 0, imgHeight); 
  
//         // draw image 2 
//         ctx.drawImage(img, 0, imgHeight - road.height); 
  
//         // update image height 
//         imgHeight += scrollSpeed; 
  
//         // reseting the images when the first image entirely exits the screen 
//         if (imgHeight == road.height) 
//             imgHeight = 0; 
  
//         // this function creates a 60fps animation by scheduling a 
//         // loop function call before the 
//         // next redraw every time it is called 
//         window.requestAnimationFrame(loop); 
//     } 
  
//     // this initiates the animation by calling the loop function 
//     // for the first time 
//     loop(); 
  
// } 

// function component(width, height, color, x, y) {
//   this.width = width;
//   this.height = height;
//   this.speedX = 0;
//   this.speedY = 0;
//   this.x = x;
//   this.y = y;
//   this.update = function() {
//     ctx = myGameArea.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
//   this.newPos = function() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }
// }

// function updateGameArea() {
//   myGameArea.clear();
//   myGamePiece.newPos();
//   myGamePiece.update();
// }

// function moveup() {
//   myGamePiece.speedY -= 1;
// }

// function movedown() {
//   myGamePiece.speedY += 1;
// }

// function moveleft() {
//   myGamePiece.speedX -= 1;
// }

// function moveright() {
//   myGamePiece.speedX += 1;
// }
// </script>

// <button onclick="moveup()">UP</button>
// <button onclick="movedown()">DOWN</button>
// <button onclick="moveleft()">LEFT</button>
// <button onclick="moveright()">RIGHT</button>

// var myGamePiece;

// function startGame() {
//     myGameArea.start();
//     myGamePiece = new component(30, 60, "black", 10, 120);
// }

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 400;
//         this.canvas.height = 800;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 20);
//         window.addEventListener('keydown', function (e) {
//             myGameArea.keys = (myGameArea.keys || []);
//             myGameArea.keys[e.keyCode] = (e.type == "keydown");
//         })
//         window.addEventListener('keyup', function (e) {
//             myGameArea.keys[e.keyCode] = (e.type == "keydown");            
//         })
//     }, 
//     clear : function(){
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }

// function component(width, height, color, x, y) {
//     this.gamearea = myGameArea;
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;    
//     this.x = x;
//     this.y = y;    
//     this.update = function() {
//         ctx = myGameArea.context;
//         ctx.fillStyle = color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;        
//     }    
// }

// function updateGameArea() {
//     myGameArea.clear();
//     myGamePiece.speedX = 0;
//     myGamePiece.speedY = 0;    
//     if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
//     if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
//     if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
//     if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }
//     myGamePiece.newPos();    
//     myGamePiece.update();
// }