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
    li = document.createElement('li');
    li.classList = 'list-group-item bg-dark border-info'
    
    small = document.createElement('small');
    small.classList = 'text-secondary'
    small.innerText = '14.10.2018 15:30';

    p = document.createElement('p');
    p.innerText = msgText;
    
    li.appendChild(small)
    li.appendChild(p)
    
	return li
}