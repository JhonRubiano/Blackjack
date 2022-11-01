import typescriptLogo from './images/typescript.svg';
import { createDeck, drawCard, getScore, setupCounter } from './ts';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const deck = createDeck();
console.log(deck);
let card = drawCard(deck);
console.log(card);

console.log({playerScore:getScore({
                      card,
                      turn:'player'
                    })}
            )

card = drawCard(deck)
console.log({dealerScore:getScore({
  card,
  turn: 'dealer'
})}
)