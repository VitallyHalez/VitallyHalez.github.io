var socket = new WebSocket("wss://vitallyhalez.github.io/jambo/server:8081");

socket.onmessage = function(event) {
    handleMessage(JSON.parse(event.data));
};

function handleMessage(message) {
    if (message.method === "restart" || message.method === "closed") {
        location.href = "game.html";
    }
    
    if (message.method === "render") {
        console.log("Пришло от сервера " + message.game);
        renderClient(JSON.parse(message.game));
    }
}

function renderClient(game){

    game.forEach(function(item) {
        box = document.querySelector(`#${item}`)
        box.style.backgroundColor="rgb(211, 193, 32)";
    });

    // $(field).bind('click',function(){return false;});
    // result.innerText="ХОДИТ ОПОНЕНТ"
}