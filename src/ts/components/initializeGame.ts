import { gameButtons, playerElements, playersPoints } from "../models";
import { createDeck } from "./createDeck";
import { drawCard } from "./drawCard";
import { renderCard } from "./renderCard";
export const initializeGame = ( players: number = 2 ) => {
    const deck = createDeck();
    //initialize with 0 points for all players
    playersPoints.player = 0;
    playersPoints.dealer = 0;
    
    gameButtons.hitBtn!.disabled = false;
    gameButtons.standBtn!.disabled = false;

    playerElements.player.cardsContainer!.innerHTML = '';
    playerElements.dealer.cardsContainer!.innerHTML = '';


    for (let i = 0; i < players; i++) {
        let initialCardPlayer = drawCard(deck);
        renderCard({
            card: initialCardPlayer, 
            turn: 'player'
        });
    }


}