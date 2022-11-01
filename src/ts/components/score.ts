import { cardValue } from "../helpers";
import { player, playersPoints, playerElements } from "../models";

export const getScore = ({card,turn}: { card: string, turn: player } ) =>{
    playersPoints[turn] += cardValue({card, turn});
    playerElements[turn].scoreContainer!.innerHTML = `${playersPoints[turn]}`;
    return playersPoints[turn];
}