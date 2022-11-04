import { drawCard, gameButtons, gameVariables, initializeGame, renderCard } from './ts';
import { dealerTurn } from './ts/components/dealerTurn';

gameButtons.newGameBtn?.addEventListener('click', () => {
  initializeGame();
})
gameButtons.hitBtn?.addEventListener('click', () => {
  const card: string = drawCard();
  renderCard({ card, turn: 'player' });
  if(gameVariables.playersPoints.player > 21){
    gameButtons.hitBtn!.disabled =true;
    gameButtons.standBtn!.disabled = true;
    dealerTurn(gameVariables.playersPoints.player);
  }else if (gameVariables.playersPoints.player === 21){
    gameButtons.hitBtn!.disabled = true;
    gameButtons.standBtn!.disabled = true;
    dealerTurn(gameVariables.playersPoints.player);
  }
});
gameButtons.standBtn?.addEventListener('click', () => {
  gameButtons.hitBtn!.disabled = true;
  gameButtons.standBtn!.disabled = true;
  dealerTurn(gameVariables.playersPoints.player);
});
