let game = new Set();

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("box")) {
        if(game.has(event.target.id))
            return false;

        game.add(event.target.id);

        clickRender(game);

        // if(checkWinner(game)){
        //     result.innerText="Вы победили поздравляем";
        // }
    }
});

function clickRender(game){
    game.forEach(function(item) {
        box = document.querySelector(`#${item}`)
        box.style.backgroundColor="rgb(211, 193, 32)";
    });

    $(field).bind('click',function(){return false;});
    result.innerText="ХОДИТ ОПОНЕНТ"

    socket.send(JSON.stringify({game: Array.from(game), method:'renderonserver'}))
    console.log("Отправил гейм сет на сервер");
}
document.addEventListener('DOMContentLoaded', function(){
    $(field).bind('click',function(){return false;});
    result.innerText="СОЕДЕНЕНИЕ"
})