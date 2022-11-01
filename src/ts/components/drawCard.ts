import { gameVariables } from "../models";

/**
 *  draw a card 
 * @returns string 
 */
export const drawCard = ():string =>{
  if ( gameVariables.deck.length === 0 ){
    throw 'No hay cartas en el deck';
  }
  return gameVariables.deck.pop()!;
}