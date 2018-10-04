restartBtn.addEventListener('click', function(){
    restartGame(); 
})

menuBtn.addEventListener('click', function(){
    location.href="index.html"
})

window.addEventListener("beforeunload", function (event) {   
    socket.send(JSON.stringify({method:'closed'}))
});

