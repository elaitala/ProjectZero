# ProjectZero - Lanesplitting 101
# Overview

Good Monday morning… it’s time to brave the Bay Area traffic once again and get to General Assembly. Hop on your motorcycle and make your way around and through traffic. And because this is California, when traffic slows down you can lanesplit between cars. But watch out for cars shifting in their lanes, changing lanes, and generally trying to kill you.

User Story:

- 1 or 2 player game
- Player presses start and game begins
  - Player uses arrow keys to navigate traffic
  - Right and left moves laterally/changes lane
  - Forward and back accelerates and brakes
- Game scrolls from top to bottom and is timed
- Cars can shift in their lanes and squeeze your path
  - Cars can also change lanes
- Goal of the game is to make it to the finish line (General Assembly) before 9am.

Game Logic:
- Each car operates within 1 of 3 lanes
- Cars move at different speeds, but statically
- Cars do not hit each other
- Each lane is comprised of 5 zones (left/center left/center/center right/right)
  - Cars are 3 zones wide and operate within the center 3 zones
- The motorcycle can operate in any of the zones
- Each level increases difficulty by having more cars
- Collision with a car = Game Over

Wireframes:

![Lanesplitting Gameplay](images/Lanesplitting 101_title.jpg)
![Lanesplitting Gameplay](images/Lanesplitting 101_gameplay.jpg)

# Stretch Goals

- Cars may or may not use their blinkers
- Cars may speed up or slow down
- Cars might hit each other and create a backup
- Top Score: Fastest Time
- Game in persepective
- 

