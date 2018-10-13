document.addEventListener("click", function(event) {
    if (event.target.classList.contains("box")) {
        if(game.has(event.target.id))
            return false;

        game.add(event.target.id);

        clickRender(game);
    }
});

msgBtn.addEventListener("click", function(event) {
    if(inpmsg.value=="")
        return;
    
    renderMsg(inpmsg.value);

    socket.send(JSON.stringify({msg: inpmsg.value, method:'msgtoserver'}));
    //for test i comment this del comment if release
    inpmsg.value="";
});

inpmsg.onkeyup = function (e) {
    if (e.keyCode === 13) {
        msgBtn.click()
    }
    return false;
}

window.onkeyup = function(e){
    if (e.keyCode == 27) {
        chat.hidden = true;
    }
    return false;
}

function clickRender(game){
    game.forEach(function(item) {
        box = document.querySelector(`#${item}`);
        box.style.backgroundColor="rgb(211, 193, 32)";
    });

    $(field).bind('click',function(){return false;});
    result.innerText = "ХОДИТ ОПОНЕНТ";

    socket.send(JSON.stringify({game: Array.from(game), method:'renderonserver'}));
}