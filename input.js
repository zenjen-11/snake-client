let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function (key) {
  if (input === '\u0003') process.exit(); //handle control c
  if (input === 'w') connection.write(move.up);
  if (input === 'a') connection.write(move.left);
  if (input === 's') connection.write(move.down);
  if (input === 'd') connection.write(move.right);
  else if (input === 'm') connection.write(`Say: ${message [key]}`);
};

module.exports = setupInput;