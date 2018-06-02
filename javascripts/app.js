//---- Rover Object
var rover = {
  direction : "N",
  y : 0,
  x : 0,
  travelLog : []
};
//-- Rover 2
var roverTwo = {
  direction : "N",
  travelLog : []
};

var turn = rover;

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
  //-- L: Rover 1
  if (turn == rover){
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
  }
  //-- L: Rover 2
  else if (turn == roverTwo){
    switch(roverTwo.direction){
      case "N":
        roverTwo.direction = "W";
        break;
      case "W":
        roverTwo.direction = "S";
        break;
      case "S":
        roverTwo.direction = "E";
        break;
      case "E":
        roverTwo.direction = "N";
        break;
    }
    //console.log("turnLeft was called!");
    console.log("- Second Rover turned Left and is now facing " +  roverTwo.direction);
  }
};

//---- Rover turns Right
function turnRight(){
  //-- R: Rover 1
  if (turn == rover){
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
    console.log("- Rover turned Right and is now facing " +   rover.direction);
  }
  //-- R: Rover 2
  else if (turn == roverTwo){
    switch(roverTwo.direction){
      case "N":
        roverTwo.direction = "E";
        break;
      case "E":
        roverTwo.direction = "S";
        break;
      case "S":
        roverTwo.direction = "W";
        break;
      case "W":
        roverTwo.direction = "N";
        break;
    }
    //console.log("turnRight was called!");
    console.log("- Second Rover turned Right and is now facing " +   roverTwo.direction);
  }
};

//---- Rover moves Forward
function moveForward(){
  //-- F: Rover 1
  if (turn == rover){
    if (rover.direction === "E" && rover.x >= 9 || rover.direction === "S" && rover.y >= 9 || rover.direction === "W" && rover.x <= 0 || rover.direction === "N" && rover.y <= 0){
      alert("The Rover has reached the limits of the map, we'll better stop it");
      return;
    }
    else if(rover.direction === "N" && board[rover.y - 1][rover.x] === "rock" ||rover.direction === "E" && board[rover.y][rover.x + 1] === "rock" || rover.direction === "S" && board[rover.y + 1][rover.x] === "rock" || rover.direction === "W" && board[rover.y][rover.x - 1] === "rock"){
      alert("^^^^ There is a rock so we'll better stop moving forward! ^^^^");
      console.log("^^^^ There is a rock so we'll better stop moving backward! ^^^^");
      return;
    }
    else if (rover.direction === "E" && rover.x + 1 === roverTwo.x && rover.y === roverTwo.y || rover.direction === "W" && rover.x - 1 === roverTwo.x && rover.y === roverTwo.y || rover.direction === "S" && rover.y + 1 === roverTwo.y && rover.x === roverTwo.x || rover.direction === "N" && rover.y - 1 === roverTwo.y && rover.x === roverTwo.x ){
      alert("The Rover meets a second Rover, we'll stop it so they can say Hello");
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
  }
  //-- F: Rover 2
  else if (turn == roverTwo){
    if (roverTwo.direction === "E" && roverTwo.x >= 9 || roverTwo.direction === "S" && roverTwo.y >= 9 || roverTwo.direction === "W" && roverTwo.x <= 0 || roverTwo.direction === "N" && roverTwo.y <= 0){
      alert("The Second Rover has reached the limits of the map, we'll better stop it");
      return;
    }
    else if(roverTwo.direction === "N" && board[roverTwo.y - 1][roverTwo.x] === "rock" || roverTwo.direction === "E" && board[roverTwo.y][roverTwo.x + 1] === "rock" || roverTwo.direction === "S" && board[roverTwo.y + 1][roverTwo.x] === "rock" || roverTwo.direction === "W" && board[roverTwo.y][roverTwo.x - 1] === "rock"){
      alert("^^^^ There is a rock so we'll better stop moving forward! ^^^^");
      console.log("^^^^ There is a rock so we'll better stop moving backward! ^^^^");
      return;
    }
    else if (roverTwo.direction === "E" && roverTwo.x + 1 === rover.x && roverTwo.y === rover.y  || roverTwo.direction === "W" && roverTwo.x - 1 === rover.x && roverTwo.y === rover.y || roverTwo.direction === "S" && roverTwo.y + 1 === rover.y && roverTwo.x === rover.x || roverTwo.direction === "N" && roverTwo.y - 1 === rover.y && roverTwo.x === rover.x){
      alert("The Second Rover meets the Rover, we'll stop it so they can say Hello");
      return;
    }
    else{
    roverTwo.travelLog.push("[" + roverTwo.y + "," + roverTwo.x + "]");
      switch (roverTwo.direction){
        case "N":
          roverTwo.y -= 1;
          break;
        case "S":
          roverTwo.y += 1;
          break;
        case "E":
          roverTwo.x += 1;
          break;
        case "W":
          roverTwo.x -= 1;
          break;
      }
    }
    console.log("- Second Rover position: " + "[" + roverTwo.y + "," + roverTwo.x + "]");
  }
};

//---- Rover moves Backward
function moveBackward(){
  //-- B: Rover 1
  if (turn == rover){
    if (rover.direction === "N" && rover.y >= 9 || rover.direction === "W" && rover.x >= 9 || rover.direction === "S" && rover.y <= 0 ||  rover.direction === "E" && rover.x <= 0){
      alert("The Rover has reached the limits of the map, we'll better stop it");
      return;
    }
    else if(rover.direction === "N" && board[rover.y + 1][rover.x] === "rock" ||rover.direction === "E" && board[rover.y][rover.x - 1] ===  "rock" || rover.direction === "S" && board[rover.y - 1][rover.x] === "rock" || rover.direction === "W" && board[rover.y][rover.x + 1]   === "rock"){
      alert("^^^^ There is a rock so we'll better stop moving backward! ^^^^");
      console.log("^^^^ There is a rock so we'll better stop moving backward! ^^^^");
      return;
    }
    else if (rover.direction === "W" && rover.x + 1 === roverTwo.x && rover.y === roverTwo.y || rover.direction === "E" && rover.x - 1 === roverTwo.x && rover.y === roverTwo.y || rover.direction === "N" && rover.y + 1 === roverTwo.y && rover.x === roverTwo.x || rover.direction === "S" && rover.y - 1 === roverTwo.y && rover.x === roverTwo.x){
      alert("The Rover meets a second Rover, we'll stop it so they can say Hello");
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
  }
  //-- B: Rover 2
  else if (turn == roverTwo){
    if (roverTwo.direction === "N" && roverTwo.y >= 9 || roverTwo.direction === "W" && roverTwo.x >= 9 || roverTwo.direction === "S" && roverTwo.y <= 0 ||  roverTwo.direction === "E" && roverTwo.x <= 0){
      alert("The Second Rover has reached the limits of the map, we'll better stop it");
      return;
    }
    else if(roverTwo.direction === "N" && board[roverTwo.y + 1][roverTwo.x] === "rock" ||roverTwo.direction === "E" && board[roverTwo.y][roverTwo.x - 1] ===  "rock" || roverTwo.direction === "S" && board[roverTwo.y - 1][roverTwo.x] === "rock" || roverTwo.direction === "W" && board[roverTwo.y][roverTwo.x + 1]   === "rock"){
      alert("^^^^ There is a rock so we'll better stop moving backward! ^^^^");
      console.log("^^^^ There is a rock so we'll better stop moving backward! ^^^^");
      return;
    }
    else if (roverTwo.direction === "W" && roverTwo.x + 1 === rover.x && roverTwo.y === rover.y || roverTwo.direction === "E" && roverTwo.x - 1 === rover.x && roverTwo.y === rover.y || roverTwo.direction === "N" && roverTwo.y + 1 === rover.y && roverTwo.x === rover.x || roverTwo.direction === "S" && roverTwo.y - 1 === rover.y && roverTwo.x === rover.x){
      alert("The Second Rover meets the Rover, we'll stop it so they can say Hello");
      return;
    }
    else{
      roverTwo.travelLog.push("[" + roverTwo.y + "," + roverTwo.x + "]");
      switch (roverTwo.direction){
        case "N":
          roverTwo.y += 1;
          break;
        case "S":
          roverTwo.y -= 1;
          break;
        case "E":
          roverTwo.x -= 1;
          break;
        case "W":
          roverTwo.x += 1;
          break;
      }
    }
    console.log("- Second Rover position: " + "[" + roverTwo.y + "," + roverTwo.x + "]");
  }
};

//---------- Commands and Rover movements
//-- Moving orders for Rover 1
var commandString = prompt("Move the Rover","rffrfflfrff");
roverMovements(commandString);

function roverMovements(commandString) {
  turn = rover;
  var validCommands = /^[b,f,r,l]+$/i;
  if (validCommands.test(commandString)){
    console.log("\n***** Rover is moving *****\n***************************");
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
  console.log("\n------- Rover REPORT -------\n· You ordered the Rover to move: '" + commandString + "'\n· Rover has traveled over next coordinates: " + rover.travelLog + "\n· Now it is facing --> " + rover.direction + "\n----------------------");  
  return;
  }else{
    alert("'" + commandString + "' is an invalid command.\n\nThe Rover only responds to:\n'b' -------> backward\n'f' -------> forward\n'l' -------> left\n'r' -------> right\n\nTry again :-)");
    console.log("Hello!\nDid you enter an invalid command? Don't worry! ;-)\nLuckily you have two options:\n1. You can refresh the page and start from scratch, or\n2. you can enter the function --> roverMovements('new string');\nGo go go!!!!");
  }
};
//-- Check Second Rover for the first
roverTwoPropertyCheck();

//-- Moving orders for Rover 2
function roverTwoMovements(commandTwoString) {
  turn = roverTwo;
  var commandTwoString = prompt("Move the Second Rover","lbbbflfflf");
  var validCommands = /^[b,f,r,l]+$/i;
  if (validCommands.test(commandTwoString)){
    console.log("\n***** Second Rover is moving *****\n**********************************");
    for(i = 0; i < commandTwoString.length; i++){
      switch (commandTwoString[i]){
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
  console.log("\n------- Second Rover REPORT -------\n· You ordered the Second Rover to move: '" + commandTwoString + "'\n· Second Rover has traveled over next coordinates: " + roverTwo.travelLog + "\n· Now it is facing --> " + roverTwo.direction + "\n----------------------");
  return;
  }else{
    alert("\n'" + commandTwoString + "' is an invalid command.\n\nThe Rover only responds to:\n'b' -------> backward\n'f' -------> forward\n'l' -------> left\n'r' -------> right\n\nTry again :-)");
    console.log("Hello!\nDid you enter an invalid command? Don't worry! ;-)\nLuckily you have two options:\n1. You can refresh the page and start from scratch, or\n2. you can enter the function --> roverTwoMovements();\nGo go go!!!!"); 
    return;
  }
};

//-- Check the "x" and "y" property to start the Second Rover in x=0 & y=0
function roverTwoPropertyCheck(){
  if (roverTwo.hasOwnProperty("x") && roverTwo.hasOwnProperty("y")){
    turn = roverTwo;
    roverTwoMovements();
  }else{
    roverTwo.y = 0;
    roverTwo.x = 0;
    turn = roverTwo;
    roverTwoMovements();
  }
};

console.log("\n0_0 You can continue traveling with:\n> roverMovements(); --> For Rover\n> roverTwoMovements(); --> For Second Rover");