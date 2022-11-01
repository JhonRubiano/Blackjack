import { player, playerElements } from "../models";
import { getScore } from "../helpers";

export const renderCard = ({card,turn}:{card: string, turn: player} ):number => {
    const cardImg = document.createElement('img');
    let  score =  getScore({card,turn})
    cardImg.src = `./deck/${card}.png`;
    cardImg.alt = card;
    cardImg.title = card;
    cardImg.setAttribute('width', '6rem');
    cardImg.setAttribute('height', '146.7');
    playerElements[turn].cardsContainer!.append(cardImg);
    return score;
}