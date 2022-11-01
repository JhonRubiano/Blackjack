export interface GameButtons {
    newGameBtn: HTMLButtonElement | null,
    standBtn: HTMLButtonElement | null,
    hitBtn: HTMLButtonElement | null
}
interface PlayerContainers {
    cardsContainer: HTMLElement | null,
    scoreContainer: HTMLElement | null
}
export type player = 'player' | 'dealer';
export interface Players {
    player: PlayerContainers,
    dealer: PlayerContainers
}

export interface GameVariables {
    deck:string[],
    playersPoints:Record<player,number>,
    suits:string[],
    values:string[]
}