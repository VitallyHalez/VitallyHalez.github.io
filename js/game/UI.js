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

function createMsg(msgText){
    liMsg = document.createElement('li');
    liMsg.innerText = msgText;
	liMsg.classList = 'list-group-item bg-dark border-info'
	return liMsg
}