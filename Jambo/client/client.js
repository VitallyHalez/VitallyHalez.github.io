// var socket = new WebSocket("wss://jamboapp.herokuapp.com:8081");
// var socket = new WebSocket("wss://vitallyhalez.github.io:8081/Jambo/server");

// var host = location.origin.replace(/^http/, 'ws')
//var host = location.origin.replace('wss://jamboapp.herokuapp.com')

var socket = new WebSocket('wss://jamboapp.herokuapp.com');

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