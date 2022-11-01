import { winner } from "../helpers";
import { gameVariables } from "../models";
import { drawCard } from "./drawCard";
import { renderCard } from "./renderCard";

export const dealerTurn = (minimumScore:number) => {

    do {
        const card = drawCard();
        gameVariables.playersPoints.dealer = renderCard({ card, turn: "dealer" });

    } while ((gameVariables.playersPoints.dealer < minimumScore) && (minimumScore <= 21));

    winner();
}