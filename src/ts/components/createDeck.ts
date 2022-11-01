import { shuffleCards } from "../helpers";
import { deck, suits, values } from "../models";

export const createDeck = (): string[] => {
    for (let suit of suits) {
        for (let value of values) {
            deck.push(value + suit);
        }
    }
    return shuffleCards(deck);
};