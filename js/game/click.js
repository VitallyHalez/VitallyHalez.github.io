document.addEventListener("click", function(event) {
    if (event.target.classList.contains("box")) {
        if(game.has(event.target.id))
            return false;

        game.add(event.target.id);

        clickRender(game);
    }
});

function clickRender(game){
    game.forEach(function(item) {
        box = document.querySelector(`#${item}`);
        box.style.backgroundColor="rgb(211, 193, 32)";
    });

    $(field).bind('click',function(){return false;});
    result.innerText = "ХОДИТ ОПОНЕНТ";

    socket.send(JSON.stringify({game: Array.from(game), method:'renderonserver'}));
}

