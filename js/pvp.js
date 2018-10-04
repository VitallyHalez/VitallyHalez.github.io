function enterGame(nickname){
    let Player = {
        nickname: nickname
    }

    socket.send(JSON.stringify({room: JSON.stringify(Player), method:'connect'}))
    
    // if (Room.guid=="empty"){
    //     Room.guid = GUID[0];
    //     Room.players.push(Player); 
    //     console.log('player 1 added')
    // }
    // else if (Room.players.length!=2){
    //     Room.players.push(Player); 
    //     console.log(`player ${Room.players.length} added`)
    // }
    // if (Room.players.length==2){
    //     console.log('GOGOGO');
    // }
    
}