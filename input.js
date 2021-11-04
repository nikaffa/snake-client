// Manages the user input
// Stores the active TCP connection object
let connection; //a global variable to be used to send movement commands/messages to the server

//Establishes UI (user interface) to handle user inputs from stdin so players can send keyboard commands
const setupInput = (conn) => { //takes in conn object returned by connect()
  connection = conn;
  const stdin = process.stdin; //stdin event handler can now interact with the server because the scope in the handler now includes both data from the keyboard AND the connection object
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //on any input from stdin, call the callback
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') { //exit command'ctrl+c'
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === "m") {
    connection.write("Say: Here I am!!!");
  }
};

module.exports = { setupInput };