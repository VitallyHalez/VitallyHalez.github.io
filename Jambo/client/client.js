var socket = new WebSocket('wss://jamboapp.herokuapp.com');

socket.onmessage = function(event) {
    handleMessage(JSON.parse(event.data));
};

function handleMessage(message) {
    if (message.method === "restart" || message.method === "closed") {
        location.href = "game.html";
    }
    
    if (message.method === "renderonclient") {
        renderClient(message.game);
    }
}

function renderClient(game){
    game.forEach(function(item) {
        box = document.querySelector(`#${item}`)
        box.style.backgroundColor="rgb(211, 193, 32)";
    });
    
    $(field).unbind('click');
    result.innerText="ВАШ ХОД";
}