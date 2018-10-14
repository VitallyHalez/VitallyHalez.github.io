restartBtn.addEventListener('click', function(){
    location.href = "game.html";
})

menuBtn.addEventListener('click', function(){
    location.href="index.html";
})

chatBtn.addEventListener('click', function(){
    chat.hidden = !chat.hidden;
    msgCount = 1;
    if(chatBtn.lastChild.nodeName == 'SPAN')
        chatBtn.lastElementChild.remove()
})

document.addEventListener('DOMContentLoaded', function(){
    $(field).bind('click',function(){return false;});
    chat.hidden = true;
})