import { shuffleCards } from "../helpers";

export const createDeck = (): string[] => {
    let deck: string[] = [];
    const suits: string[] = [
        'C', // Clubs
        'D', // Diamonds
        'H', // Hearts
        'S'  // Spades
    ],
        values: string[] = [
            'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10',
            'J', 'Q', 'K'
        ];

    for (let suit of suits) {
        for (let value of values) {
            deck.push(value + suit);
        }
    }
    console.log(deck)
    return shuffleCards(deck);
};