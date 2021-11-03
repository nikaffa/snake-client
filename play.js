const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({ //creates an object representing connection with the server
    host: '165.227.47.243',// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //prints out the greeting from server once being connected
  conn.on('connect', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

console.log("Connecting ...");
connect();