import { shuffleCards } from "../helpers";
import { gameVariables } from "../models";

export const createDeck = (): string[] => {
    for (let suit of gameVariables.suits) {
        for (let value of gameVariables.values) {
            gameVariables.deck.push(value + suit);
        }
    }
    return shuffleCards(gameVariables.deck);
};