var WebSocketServer = new require('ws');

var clients = {};

var webSocketServer = new WebSocketServer.Server({
  port: 8081
});

webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("новое соединение " + id);

  ws.on('message', function(message) {
    message=JSON.parse(message);
    console.log('получено сообщение ' + message.method);

    if (message.method === "restart" || message.method === "closed") {
      for (var key in clients) {
        clients[key].send(JSON.stringify( { method: "restart" } ));
      }
    }
    if (message.method === "render") {
      for (var key in clients) {
        console.log("Пришло от клиента" + message.game)
        renderServer(message.game);
      }    
    }
  });
  
  ws.on('close', function() {
    console.log('соединение закрыто ' + id);
    delete clients[id];
  });
  
});

function renderServer(gameArray){
  // gameArray.forEach(function(item) {
  //     box = document.querySelector(`#${item}`)
  //     box.style.backgroundColor="rgb(211, 193, 32)";
  // });
  // if(checkWinner(game)){
  //     result.innerText="Победил опонент";
  // }
  // else{
  //     $(field).unbind('click');
  //     result.innerText="ВАШ ХОД"
  // }
  for (var key in clients) { 
    clients[key].send(JSON.stringify({game: gameArray, method:'render',}))
    console.log("Каждому клиенту отправляем то что пришло от клиента"+gameArray)
  }
}

function restartGame() {
  socket.send(JSON.stringify( { method: "restart" } ));
  location.href = "game.html";
}