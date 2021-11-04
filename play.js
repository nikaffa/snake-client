//Establishes UI (user interface) where players can send keyboard commands
//const net = require("net");
const { connect } = require("./client");

// setup UI to handle user inputs from stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //on any input from stdin, call the callback
  return stdin;
};
//when user inputs 'ctrl+c', exit the program
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};
setupInput();