restartBtn.addEventListener('click', function(){
    location.href = "game.html";
    socket.send(socket.send(JSON.stringify({method:'restart'})));
})

menuBtn.addEventListener('click', function(){
    location.href="index.html";
    socket.send(socket.send(JSON.stringify({method:'restart'})));
})

chatBtn.addEventListener('click', function(){
    chat.hidden = !chat.hidden;
    msgCount = 1;
    if(chatBtn.lastChild.nodeName == 'SPAN') {
        chatBtn.lastElementChild.remove()
    }
})

document.addEventListener('DOMContentLoaded', function(){
    $(field).bind('click',function(){return false;});
    chat.hidden = true;
})