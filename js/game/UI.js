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
    chat.hidden = true;
})

function renderMsg(msgText){
    let date = new Date();

    let dateFormated = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:`
    
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