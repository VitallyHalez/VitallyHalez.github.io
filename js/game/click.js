let player = 1;
let game = new Set();

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("box")) {
        game.add(event.target.id);
        
        renderClient(game);
        
        // if(checkWinner()){
        //     result.innerText="Winner player: " + player;
        // }

        temp.innerText += "Clicked " + player + ":" + event.target.id + "\n";
        
        if (player == 1) {
            player = 2;
            return;
        }

        if (player == 2) {
            player = 1;
            return;
        }
    }
});

function renderClient(game){
    game.forEach(function(item) {
        box = document.querySelector(`#${item}`)
        box.innerText = "x";
    });
    
    socket.send(JSON.stringify({game: JSON.stringify(Array.from(game)), method:'render'}))
}