import { gameVariables, player } from "../models";

export const cardValue = ({card,turn}:{card: string, turn: player}): number => {
    const value: string = card.substring(0, card.length - 1);
    switch (value) {
        
        case 'A': {
            return (((gameVariables.playersPoints[turn] + 11) > 21) ? 1 : 11);
        }

        case 'J':
        case 'Q':
        case 'K':
            return 10;

        default:
            return parseInt(value);

    }
}