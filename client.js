const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  //creates an object representing connection with the server
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interprets incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    //sends back a msg to the server
    console.log('Connected succesfully.');
    conn.write('Name: YAY');
  });

  return conn;
};

module.exports = { connect };