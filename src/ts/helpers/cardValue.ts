import { playersPoints } from "../models";

export const cardValue = (card: string, turn: number): number => {
    const value: string = card.substring(0, card.length - 1);
    switch (value) {
        
        case 'A': {
            return (((playersPoints[turn] + 11) > 21) ? 1 : 11);
        }

        case 'J':
        case 'Q':
        case 'K':
            return 10;

        default:
            return parseInt(value);

    }
}