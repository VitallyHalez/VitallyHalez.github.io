enter.addEventListener('click', function(){
    location.href="game.html"; 
});

btnfind.addEventListener('click', function(){
    let Player = {
        nickname: nickname.value
    }
    DataSet('player', JSON.stringify(Player));
    location.href="game.html"; 

});
// enter.addEventListener('click', function(){
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         location.href="mobilegame.html"; 
//     } else {
//         location.href="game.html"; 
//     }
// })