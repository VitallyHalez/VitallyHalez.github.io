restartBtn.addEventListener('click', function(){
    location.href = "game.html";
})

menuBtn.addEventListener('click', function(){
    location.href="index.html";
})

document.addEventListener('DOMContentLoaded', function(){
    $(field).bind('click',function(){return false;});
})