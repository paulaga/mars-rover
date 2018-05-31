//---- Rover Object
var rover = {
  direction : "N",
  x : 0,
  y : 0,
  travelLog : []
};

//---- Mars grid
 var board = [
  [null, null, null, "rock", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null ],
  [null, null, null, null, null , null, null, null, "rock", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, "rock", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "rock", null, null],
  [null, "rock", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];

//---- Rover turns Left
function turnLeft(){
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  //console.log("turnLeft was called!");
  console.log("- Rover turned Left and is now facing " + rover.direction);
};

//---- Rover turns Right
function turnRight(){
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  //console.log("turnRight was called!");
  console.log("- Rover turned Right and is now facing " + rover.direction);
};

//---- Rover moves Forward
function moveForward(){
  if (rover.direction === "E" && rover.x >= 9 || rover.direction === "S" && rover.y >= 9 || rover.direction === "W" && rover.x <= 0 || rover.direction === "N" && rover.y <= 0){
    alert("The Rover has reached the limits of the map, we'll better stop it");
    return;
  }
  else if(rover.direction === "N" && board[rover.y - 1][rover.x] === "rock" ||rover.direction === "E" && board[rover.y][rover.x + 1] === "rock" || rover.direction === "S" && board[rover.y + 1][rover.x] === "rock" || rover.direction === "W" &&board[rover.y][rover.x - 1] === "rock"){
    alert("^^^^ There is a rock so we'll better stop moving forward! ^^^^");
    console.log("^^^^ There is a rock so we'll better stop moving backward! ^^^^");
    return;
  }
  else{
    rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
    switch (rover.direction){
      case "N":
        rover.y -= 1;
        break;
      case "S":
        rover.y += 1;
        break;
      case "E":
        rover.x += 1;
        break;
      case "W":
        rover.x -= 1;
        break;
    }
  }
  console.log("- Rover position: " + "[" + rover.y + "," + rover.x + "]");
};

//---- Rover moves Backward
function moveBackward(){
  if (rover.direction === "N" && rover.y >= 9 || rover.direction === "W" && rover.x >= 9 || rover.direction === "S" && rover.y <= 0 || rover.direction === "E" && rover.x <= 0){
    alert("The Rover has reached the limits of the map, we'll better stop it");
    return;
  }
  else if(rover.direction === "N" && board[rover.y + 1][rover.x] === "rock" ||rover.direction === "E" && board[rover.y][rover.x - 1] === "rock" || rover.direction === "S" && board[rover.y - 1][rover.x] === "rock" || rover.direction === "W" &&board[rover.y][rover.x + 1] === "rock"){
    alert("^^^^ There is a rock so we'll better stop moving backward! ^^^^");
    console.log("^^^^ There is a rock so we'll better stop moving backward! ^^^^");
    return;
  }
  else{
    rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
    switch (rover.direction){
      case "N":
        rover.y += 1;
        break;
      case "S":
        rover.y -= 1;
        break;
      case "E":
        rover.x -= 1;
        break;
      case "W":
        rover.x += 1;
        break;
    }
  }
  console.log("- Rover position: " + "[" + rover.y + "," + rover.x + "]");
};

//---- Commands and Rover movements
var commandString = prompt("Move the Rover","rffrfflfrff");
roverMovements(commandString);

function roverMovements(commandString) {
  var validCommands = /^[b,f,r,l]+$/i;
  if (validCommands.test(commandString)){
    for(i = 0; i < commandString.length; i++){
      switch (commandString[i]){
        case "f":
          moveForward();
          break;
        case "b":
          moveBackward();
          break;
        case "r":
          turnRight();
          break;
        case "l":
          turnLeft();
          break;
      }
    }
  }else{
    alert("'" + commandString + "' is an invalid command.\n\nThe Rover only responds to:\n'b' -------> backward\n'f' -------> forward\n'l' -------> left\n'r' -------> right\n\nTry again :-)");
    console.log("Hello!\nDid you enter an invalid command? Don't worry! ;-)\nLuckily you have two options:\n1. You can refresh the page and start from scratch, or\n2. you can enter the function --> roverMovements('new string');\nGo go go!!!!");
    return;
  }
  console.log("\n------- REPORT -------\n· You ordered the Rover to move: '" + commandString + "'\n· Rover has traveled over next coordinates: " + rover.travelLog + "\n· Now it is facing --> " + rover.direction + "\n----------------------\nYou can keep moving the Rover with --> roverMovements('new string');");  
};