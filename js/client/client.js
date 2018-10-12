var socket = new WebSocket('wss://jamboapp.herokuapp.com')

let game = new Set()

socket.onmessage = function(event) {
    handleMessage(JSON.parse(event.data));
}

socket.onopen = function(event) {
    $(field).unbind('click');
    progress.hidden = true;
}

socket.onerror=function(event) {
    console.log(event);
}
/*
    Для отображения победной комбинации можно создать победный сет, и отправлять его. 
    Затем по его данным перерисовать в другой цвет победную комбинацию.
*/
function handleMessage(message) {
    if (message.method === "restart") {
        location.href = "game.html";
    }
    
    if (message.method === "renderonclient") {
        renderClient(message.game);
    }

    if (message.method === "Winner"){
        result.innerText="Вы победили поздравляем";
        $(field).bind('click',function(){return false;});
    }

    if (message.method === "Lose"){
        result.innerText="К сожалению вы проиграли";
        $(field).bind('click',function(){return false;});
    }
}

function renderClient(gameArray){
    gameArray.forEach(function(item) {
        box = document.querySelector(`#${item}`);
        box.style.backgroundColor="rgb(211, 193, 32)";
        game.add(item);
    });

    $(field).unbind('click');
    result.innerText="ВАШ ХОД";
}