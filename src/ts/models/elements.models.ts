import { GameButtons, Players } from "./interfaces.models";

export const gameButtons: GameButtons = {
    hitBtn: document.querySelector('#hitBtn'),
    standBtn: document.querySelector('#standBtn'),
    newGameBtn: document.querySelector('#newGameBtn')
}

export const playerElements: Players = {
    player:{
        cardsContainer: document.querySelector('.player__cards'),
        scoreContainer: document.querySelector('.player small')
    },
    dealer:{
        cardsContainer: document.querySelector('.dealer__cards'),
        scoreContainer: document.querySelector('.dealer small')
    }
}