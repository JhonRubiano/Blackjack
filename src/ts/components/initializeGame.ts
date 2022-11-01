import { gameButtons, gameVariables, playerElements } from "../models";
import { createDeck } from "./createDeck";
import { drawCard } from "./drawCard";
import { renderCard } from "./renderCard";
export const initializeGame = ( players: number = 2 ) => {
    gameVariables.deck = createDeck();
    //initialize with 0 points for all players
    gameVariables.playersPoints.player = 0;
    gameVariables.playersPoints.dealer = 0;
    
    gameButtons.hitBtn!.disabled = false;
    gameButtons.standBtn!.disabled = false;

    playerElements.player.cardsContainer!.innerHTML = '';
    playerElements.dealer.cardsContainer!.innerHTML = '';

    for (let i = 0; i < players; i++) {
        let initialCardPlayer = drawCard();
        renderCard({
            card: initialCardPlayer, 
            turn: 'player'
        });
    }
}