var socket = new WebSocket("wss://node2.wsninja.io");

var handleMessage;
let Guid = [
    "686ede57-6e16-43b6-ac6a-e2e379dea5b8",
    "cc2cdcf9-501c-44ae-901f-0f6b5e60fa27",
    "35d07649-acba-4476-986c-9379f3778fba",
    "7b788328-74b5-4e4c-96db-53f367ae418c",
    "8456e4e3-438a-465d-b573-1596fd048e12",
    "bf33852f-d799-4dc9-a8ce-3afb19132980",
    "45e022d3-6ce4-4ca8-841a-92e6db965d43",
    "5e233c79-bec0-4596-9ad8-ef8d120fe404",
    "5fcbb7f4-a15d-499a-958f-d3c15c0af1b6",
    "e70a4971-d57b-4d6e-b1d7-7d32227ffd45"
]
socket.addEventListener('open', function(event) {
    socket.send(JSON.stringify({ guid: '3b67a2fa-0dfa-4de5-b597-7edddbfa4a88' }));//9f 3b67a2fa-0dfa-4de5-b597-7edddbfa4a88
});

socket.addEventListener('message', function(event) {
    handleMessage(JSON.parse(event.data));
});

function restartGame() {
    socket.send(JSON.stringify( { method: "restart" } ));
    location.href = "game.html";
}

function handleMessage(message) {
    if (message.method === "restart" || message.method === "closed") {
        location.href = "game.html";
    }

    if (message.method === "render") {
        renderServer(JSON.parse(message.game));
    }
}

function createPlayer(Nick){
    
    console.log(Players)
    Player.nick = Nick
    Player.guid = Guid[Players.size]
    Players.add(Player)
   console.log(Players[Players.length - 1])
}

function renderServer(gameArray){
    gameArray.forEach(function(item) {
        box = document.querySelector(`#${item}`)
        box.style.backgroundColor="rgb(211, 193, 32)";
    });

    game.clear();

    gameArray.forEach(function(item) {
        game.add(item);
    });

    if(checkWinner()){
        result.innerText="Winner player: " + player;
    }
}