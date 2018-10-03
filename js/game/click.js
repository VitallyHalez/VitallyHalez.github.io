let player = 1;
let game = new Set();

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("box")) {
        game.add(event.target.id);
        
        render(game);
        
        temp.innerText += "Clicked " + player + ":" + event.target.id + "\n";
        
        if(checkWinner()){
            result.innerText="Winner player: " + player;
        }
        
        if (player == 1) {
            player = 2;
            return;
        }

        if (player == 2) {
            player = 1;
            return;
        }
    }
});



function render(game){
    game.forEach( function(item) {
        box = document.querySelector(`#${item}`)
        box.innerText = "2";
    });
}


//--------------------------------------------------------------------------
var socket = new WebSocket("wss://node2.wsninja.io");

// Connection opened, now send GUID to autenticate with server.
socket.addEventListener('open', function(event) {
  socket.send(JSON.stringify({ guid: "3b67a2fa-0dfa-4de5-b597-7edddbfa4a9f" }));
});

var handleMessage; // WebSocket message handler
// Listen for websocket messages
socket.addEventListener('message', function(event) {
  handleMessage(JSON.parse(event.data));
});

function restart(){
    location.href = "game.html";
}

function restartGame() {
    restart();
    socket.send(JSON.stringify( { method: "restart" } ));
}

function handleMessage(message) {
    if (message.method === "restart") {
      restart();
    }
    if (message.method === "render") {
      render();
    }
  }