import { gameButtons, gameVariables, playerElements } from "../models";
import { createDeck } from "./createDeck";
import { drawCard } from "./drawCard";
import { renderCard } from "./renderCard";
export const initializeGame = ( players: number = 2 ) => {
    gameVariables.playersPoints.player = 0;
    gameVariables.playersPoints.dealer = 0;
    playerElements.player.cardsContainer!.innerHTML = '';
    playerElements.dealer.cardsContainer!.innerHTML = '';
    playerElements.player.scoreContainer!.innerHTML = '0';
    playerElements.dealer.scoreContainer!.innerHTML = '0';

    gameVariables.deck = createDeck();
    //initialize with 0 points for all players

    gameButtons.hitBtn!.disabled = false;
    gameButtons.standBtn!.disabled = false;

    for (let i = 0; i < players; i++) {
        let initialCardPlayer = drawCard();
        renderCard({
            card: initialCardPlayer, 
            turn: 'player'
        });
    }
}