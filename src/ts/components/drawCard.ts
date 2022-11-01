/**
 *  draw a card 
 * @param {string[]} deck - deck to take a card
 * @returns string 
 */
export const drawCard = (deck:string[]):string =>{
  if ( deck.length === 0 ){
    throw 'No hay cartas en el deck';
  }
  return deck.pop()!;
}