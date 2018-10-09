var socket = new WebSocket('wss://jamboapp.herokuapp.com');
let game = new Set();
socket.onmessage = function(event) {
    console.log(event)
    handleMessage(JSON.parse(event.data));
};

socket.onopen = function(event) {
    $(field).unbind('click');
    result.innerText="СОЕДЕНЕНО";
};

socket.onerror=function(event) {
    console.log(event)
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

function renderClient(gameArray){
    gameArray.forEach(function(item) {
        box = document.querySelector(`#${item}`)
        box.style.backgroundColor="rgb(211, 193, 32)";
        game.add(item);
    });

    $(field).unbind('click');
    result.innerText="ВАШ ХОД";
}