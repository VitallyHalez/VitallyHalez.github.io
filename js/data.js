let GUID = [
    '3b67a2fa-0dfa-4de5-b597-7edddbfa4a88',
    "686ede57-6e16-43b6-ac6a-e2e379dea5b8",
    "cc2cdcf9-501c-44ae-901f-0f6b5e60fa27",
    '3b67a2fa-0dfa-4de5-b597-7edddbfa4a9f',
    "35d07649-acba-4476-986c-9379f3778fba",
    "7b788328-74b5-4e4c-96db-53f367ae418c",
    "8456e4e3-438a-465d-b573-1596fd048e12",
    "bf33852f-d799-4dc9-a8ce-3afb19132980",
    "45e022d3-6ce4-4ca8-841a-92e6db965d43",
    "5e233c79-bec0-4596-9ad8-ef8d120fe404",
    "5fcbb7f4-a15d-499a-958f-d3c15c0af1b6",
    "e70a4971-d57b-4d6e-b1d7-7d32227ffd45"
];

function DataGet(key){
    return localStorage.getItem(key);
}

function DataSet(key, value){
    localStorage.setItem(key, value)
}

function DataClear(key){
    for (var i = 0; i < arguments.length; i++) {
        localStorage.clear(arguments[i]);
    }
}

// let PlayersSessions = new Set();
// let idcount=0;
// function createRoom(nick){
//     let Player = {
//         nick:"",
//         guid:""
//     }

//     Player.nick = nick;
//     Player.guid = GUID[idcount];
//     idcount++;
//     PlayersSessions.add(Player);
// }