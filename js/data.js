let GUID = [
    '3b67a2fa-0dfa-4de5-b597-7edddbfa4a88',
    '3b67a2fa-0dfa-4de5-b597-7edddbfa4a9f',
    '3b67a2fa-0dfa-4de5-b597-7edddbfa4a1a'
];

let Player = {
    nick:"",
    guid:""
}

let PlayersSessions = new Set();

function createRoom(nick){
    Player.nick = nick;
    Player.guid = GUID[0];
      
    PlayersSessions.add(Player);
}