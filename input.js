// Manages the user input
//Establishes UI (user interface) to handle user inputs from stdin so players can send keyboard commands
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

module.exports = { setupInput };