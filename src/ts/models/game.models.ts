import { GameVariables } from "./interfaces.models";

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
export const gameVariables:GameVariables = {
    deck:[],
    playersPoints:{
        player:0,
        dealer:0
    },
    suits: [
        'C', // Clubs
        'D', // Diamonds
        'H', // Hearts
        'S'  // Spades
        ],
    values:['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
}
