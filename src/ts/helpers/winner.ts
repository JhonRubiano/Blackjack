import { gameVariables } from "../models"

export const winner = () =>{
    const {player:minimumScore,dealer:dealerScore} = gameVariables.playersPoints;
    setTimeout(() => {
        if(dealerScore === minimumScore){
            alert('Draw!')
        } else if(minimumScore>21){
            alert('Dealer wins!')
        }else if(dealerScore>21){
            alert('Player wins!')
        }else{
            alert('Dealer wins')
        }
        
    }, 100 );
}