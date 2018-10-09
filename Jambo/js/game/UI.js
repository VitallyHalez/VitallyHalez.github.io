restartBtn.addEventListener('click', function(){
    socket.send(JSON.stringify( { method: "restart" } ));
    location.href = "game.html";
})

menuBtn.addEventListener('click', function(){
    location.href="index.html";
    socket.send(JSON.stringify({method:'closed'}))
})

window.addEventListener("beforeunload", function (event) {   
    //socket.send(JSON.stringify({method:'closed'}))
});

document.addEventListener('DOMContentLoaded', function(){
    $(field).bind('click',function(){return false;});
    result.innerText="СОЕДЕНЕНИЕ"
})