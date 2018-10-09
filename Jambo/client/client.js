var socket = new WebSocket('wss://jamboapp.herokuapp.com');

socket.onmessage = function(event) {
    console.log(event)
    handleMessage(JSON.parse(event.data));
};

socket.onopen = function(event) {
    alert('Connect');
};


function handleMessage(message) {
    if (message.method === "restart" || message.method === "closed") {
        location.href = "game.html";
    }
    
    if (message.method === "renderonclient") {
        renderClient(message.game);
        console.log("Принял гейм сет с сервер");
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