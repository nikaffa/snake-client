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
    //sends back a msg and commands to the server
    conn.write('Name: VER');
    let i = 0;
    const interval = setInterval(() => {
      i ++;
      //conn.write('Move: up');
      if (i === 50) {
        clearInterval(interval);
      }
    }, 150);
    
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 400);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };