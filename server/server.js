var socket = new WebSocket("wss://node2.wsninja.io");

var handleMessage; 

socket.addEventListener('open', function(event) {
    socket.send(JSON.stringify({ guid: "3b67a2fa-0dfa-4de5-b597-7edddbfa4a88" }));//9f
});

socket.addEventListener('message', function(event) {
    handleMessage(JSON.parse(event.data));
});

function restartGame() {
    location.href = "game.html";
    socket.send(JSON.stringify( { method: "restart" } ));
}

function handleMessage(message) {
    if (message.method === "restart") {
        location.href = "game.html";
    }

    if (message.method === "render") {
        renderServer(JSON.parse(message.game));
    }
}

function renderServer(gameArray){
    gameArray.forEach(function(item) {
        box = document.querySelector(`#${item}`)
        box.innerText = "x";
    });

    game.clear();

    gameArray.forEach(function(item) {
        game.add(item);
    });

    if(checkWinner()){
        result.innerText="Winner player: " + player;
    }
}