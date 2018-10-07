function checkWinner(game){
    for(let index = 0; index < 5; index++){
        let winnerCollection = {
            Row: [
                "c"+ index +"-0",
                "c"+ index +"-1",
                "c"+ index +"-2",    
                "c"+ index +"-3",  
                "c"+ index +"-4",
            ],
            Col: [
                "c0-"+ index,
                "c1-"+ index,
                "c2-"+ index,
                "c3-"+ index,
                "c4-"+ index,
            ],
            LeftDiagonal: [
                "c0-0",
                "c1-1",
                "c2-2",
                "c3-3",
                "c4-4"
            ],
            RightDiagonal: [
                "c0-4",
                "c1-3",
                "c2-2", 
                "c3-1",
                "c4-0"
            ]
        }
    
        let Row=0;
        let Col=0;
        let LeftDiagonal=0;
        let RightDiagonal=0;
        
        for(let i = 0; i < 5; i++){
            
            if (game.has(winnerCollection.LeftDiagonal[i]))
                LeftDiagonal++;

            if (game.has(winnerCollection.RightDiagonal[i]))
                RightDiagonal++;
                
            if (game.has(winnerCollection.Row[i]))
                Row++;
                
            if (game.has(winnerCollection.Col[i]))
                Col++;
        }
      
        if(Row == 5 || Col == 5 || LeftDiagonal == 5 || RightDiagonal == 5){
            if (Row == 5){
                for (let ind = 0 ; ind<5; ind++){
                    let boxS = document.querySelector(`#c${index}-${ind}`) 
                    boxS.classList.add('bg-info');
                }
            }
            if (Col == 5){
                for (let ind = 0 ; ind<5; ind++){
                    let boxS = document.querySelector(`#c${ind}-${index}`) 
                    boxS.classList.add('bg-info');
                }
            }
            if (LeftDiagonal == 5){
                for (let ind = 0 ; ind<5; ind++){
                    let boxS = document.querySelector(`#${winnerCollection.LeftDiagonal[ind]}`) 
                    boxS.classList.add('bg-info');
                }
            }
            if (RightDiagonal == 5){
                for (let ind = 0 ; ind<5; ind++){
                    let boxS = document.querySelector(`#${winnerCollection.RightDiagonal[ind]}`) 
                    boxS.classList.add('bg-info');
                }
            }

            $(field).bind('click',function(){return false;});
            
            return true;
        }
    }
}