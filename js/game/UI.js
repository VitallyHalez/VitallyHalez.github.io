restartBtn.addEventListener('click', function(){
    location.href = "game.html";
})

menuBtn.addEventListener('click', function(){
    location.href="index.html";
})

chatBtn.addEventListener('click', function(){
    chat.hidden = !chat.hidden;
    chatBtn.removeChild(badge);
    msgCount = 1;
})

document.addEventListener('DOMContentLoaded', function(){
    $(field).bind('click',function(){return false;});
    chat.hidden = true;
})