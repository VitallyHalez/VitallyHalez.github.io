restartBtn.addEventListener('click', function(){
    restartGame(); 
})

menuBtn.addEventListener('click', function(){
    location.href="index.html"
})

window.addEventListener("beforeunload", function (event) {   
    socket.send(JSON.stringify({method:'closed'}))
});

// window.addEventListener("load", function(){
//     function sendsocket(){
//         socket.send(JSON.stringify({Player: DataGet('player'), method:'connect'}))
//     }
//     setTimeout(sendsocket, 1000);
//     DataClear('player');
// });

