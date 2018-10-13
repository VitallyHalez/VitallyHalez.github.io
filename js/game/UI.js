restartBtn.addEventListener('click', function(){
    location.href = "game.html";
})

menuBtn.addEventListener('click', function(){
    location.href="index.html";
})

chatBtn.addEventListener('click', function(){
    chat.hidden = !chat.hidden;
})

document.addEventListener('DOMContentLoaded', function(){
    $(field).bind('click',function(){return false;});
})