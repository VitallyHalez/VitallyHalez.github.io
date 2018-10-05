var socket = new WebSocket("wss://node2.wsninja.io");

var handleMessage;

socket.addEventListener('open', function(event) {
    socket.send(JSON.stringify({ guid: '3b67a2fa-0dfa-4de5-b597-7edddbfa4a88' }));//9f 3b67a2fa-0dfa-4de5-b597-7edddbfa4a88
});

socket.addEventListener('message', function(event) {
    handleMessage(JSON.parse(event.data));
});


function handleMessage(message) {
    if (message.method === "restart" || message.method === "closed") {
        location.href = "game.html";
    }
    
    if (message.method === "render") {
        renderServer(JSON.parse(message.game));
        $(field).unbind('click');
        result.innerText="ВАШ ХОД"
    }
    
    // if (message.method === "connect") {
    //     console.log('connecteed');
    //     startGameServer(JSON.parse(message.Player));
    // }
}

function restartGame() {
    socket.send(JSON.stringify( { method: "restart" } ));
    location.href = "game.html";
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

// let Room = {
//     guid:"empty",
//     players:[]
// }       

// function startGameServer(Player){
//     if (Room.guid=="empty"){
//         Room.guid = GUID[0];
//         Room.players.push(Player); 
//         alert('player 1 added')
//     }
//     else if (Room.players.length!=2){
//         Room.players.push(Player); 
//         alert(`player 2 added`)
//     }
//     if (Room.players.length==2){
//         alert('GOGOGO');
//     }
        
// }
