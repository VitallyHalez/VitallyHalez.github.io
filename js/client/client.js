var socket = new WebSocket('wss://jamboapp.herokuapp.com')

var game = new Set()

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

var msgCount = 1;

function handleMessage(message) {
    if (message.method === "restart") {
        location.href = "game.html";
    }
    else if (message.method === "renderonclient") {
        renderClient(message.game);
    }
    else if (message.method === "Winner"){
        result.innerText = "Вы победили поздравляем";
        $(field).bind('click',function(){return false;});
    }
    else if (message.method === "Lose"){
        result.innerText = "К сожалению вы проиграли";
        $(field).bind('click',function(){return false;});
    }
    else if (message.method === "msgtoclient"){
        if(chat.hidden == true){
            if(msgCount == 1){
                chatBtn.appendChild(createBadge(msgCount));
            }
            else if(msgCount < 10){
                notify.innerText = msgCount;
            }
            else{
                notify.innerText = '9+'
                return
            }
            msgCount++
        }
        renderMsg(message.msg);
    }
    else return;
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

function renderMsg(msgText){
    var date = new Date();

    var dateFormated = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:`
    
    if(date.getMinutes() < 10)
        dateFormated += `0${date.getMinutes()}`
    else
        dateFormated += `${date.getMinutes()}`

    allmsg.appendChild(createMsg(msgText, dateFormated));
    allmsg.scrollTop = 9999;
}

function createMsg(msgText, date){
    li = document.createElement('li');
    li.classList = 'list-group-item bg-dark border-info'
    
    small = document.createElement('small');
    small.classList = 'text-secondary'
    small.innerText = date;

    p = document.createElement('p');
    p.innerText = msgText;
    
    li.appendChild(small)
    li.appendChild(p)
    
	return li
}

function createBadge(text){
    span = document.createElement('span')
    span.classList = 'badge badge-success'
    span.innerText=text;
    span.id='notify'
    return span;
}