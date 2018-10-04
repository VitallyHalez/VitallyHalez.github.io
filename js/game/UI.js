restartBtn.addEventListener('click', function(){
    restartGame(); 
})

window.addEventListener("beforeunload", function (event) {   
    socket.send(JSON.stringify({method:'closed'}))
});

