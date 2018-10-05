let game = new Set();

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("box")) {
        game.add(event.target.id);

        renderClient(game);

        if(checkWinner()){
            result.innerText="YOU WINNER";
        }
    }
});

function renderClient(game){
    game.forEach(function(item) {
        box = document.querySelector(`#${item}`)
        box.style.backgroundColor="rgb(211, 193, 32)";
    });

    $(field).bind('click',function(){return false;});
    result.innerText="ХОДИТ ОПОНЕНТ"

    socket.send(JSON.stringify({game: JSON.stringify(Array.from(game)), method:'render'}))
}