enter.addEventListener('click', function(){
    location.href="game.html"; 
});

find.addEventListener('click', function(){
    createRoom(nickname.value);
});
// enter.addEventListener('click', function(){
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         location.href="mobilegame.html"; 
//     } else {
//         location.href="game.html"; 
//     }
// })