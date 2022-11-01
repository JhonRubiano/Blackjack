import { cardValue } from ".";
import { player, playerElements, gameVariables } from "../models";

export const getScore = ({card,turn}: { card: string, turn: player } ) =>{
    gameVariables.playersPoints[turn] += cardValue({card, turn});
    playerElements[turn].scoreContainer!.innerHTML = `${gameVariables.playersPoints[turn]}`;
    return gameVariables.playersPoints[turn];
}