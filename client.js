const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({ //creates an object representing connection with the server
    host: '165.227.47.243',// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log('Connected succesfully.');
  });
  //sends back a msg to the server after the connection established
  conn.on('connect', () => {
    conn.write('Name: VER');
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };