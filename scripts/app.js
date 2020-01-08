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

// var objImage= null;
// 	function init(){
// 		objImage=document.getElementById("motorcycle");				
// 		objImage.style.position='relative';
// 		objImage.style.left='60vw';
//     objImage.style.top='60vh';
//     console.log('motorcycle rendered');
// 	}
// 	function getKeyAndMove(e){				
//     console.log('Motorcycle moving...');
//     var key_code=e.keyCode;
// 		switch(key_code){
// 			case 37: //left arrow key
//         console.log('Key Left');
//         moveLeft();
// 				break;
// 			case 38: //Up arrow key
//         console.log('Key Up');
//         moveUp();
// 				break;
// 			case 39: //right arrow key
//         console.log('Key Right');
//         moveRight();
// 				break;
// 			case 40: //down arrow key
//         console.log('Key Down');
//         moveDown();
// 				break;						
// 		}
// 	}
// 	function moveLeft(){
// 		objImage.style.left=parseInt(objImage.style.left)-5 +'vw';
// 	}
// 	function moveUp(){
// 		objImage.style.top=parseInt(objImage.style.top)-5 +'vh';
// 	}
// 	function moveRight(){
// 		objImage.style.left=parseInt(objImage.style.left)+5 +'vw';
// 	}
// 	function moveDown(){
// 		objImage.style.top=parseInt(objImage.style.top)+5 +'vh';
// 	}
//   window.onload=init;
  
//   getKeyAndMove();

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.newPos();
  myGamePiece.update();
}

function moveup() {
  myGamePiece.speedY -= 1;
}

function movedown() {
  myGamePiece.speedY += 1;
}

function moveleft() {
  myGamePiece.speedX -= 1;
}

function moveright() {
  myGamePiece.speedX += 1;