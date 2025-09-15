'use strict';

function randNum(max) {
  return Math.trunc(Math.random() * max) + 1;
}
let click = 0;
let pink = 0;
let highscore = 0;
let wins = 0;
let gameFinished = false;

document.addEventListener(`click`, function () {
  if (!gameFinished) {
    click++;
    document.querySelector(`.click`).textContent = `Click: ${click}`;
    const rgb = [randNum(255), randNum(255), randNum(255)];
    document.querySelector(
      `body`
    ).style.background = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    if (
      rgb[0] >= 153 &&
      rgb[2] - rgb[1] >= 10 &&
      rgb[2] >= 80 &&
      rgb[2] - rgb[0] <= 47 &&
      rgb[0] - rgb[1] >= 35
    ) {
      pink++;
    }
    document.querySelector(`.pink`).textContent = `Pinks: ${pink}`;
    document.querySelector(`.winrate`).textContent = `Percentage: ${(
      (pink / click) *
      100
    ).toFixed(1)}%`;
    if (click === 37) {
    gameFinished = true;
    
      if ((pink / click) * 100 >= 37) {
        document.querySelector(`.endMessage`).textContent = `🫵 تو یک بیکاری 🫵`;
        wins++;
      } else if ((pink / click) * 100 >= 17) {
        document.querySelector(`.endMessage`).textContent = `🏆 "You Won!" 🏆`;
        wins++;
      } else {
        document.querySelector(`.endMessage`).textContent = `😔 "You Lost!" 😔`;
      }
      if ((pink / click) * 100 > highscore) {
      highscore = ((pink / click) * 100).toFixed(1);
      document.querySelector(
        `.highscore`
      ).textContent = `Highscore: ${highscore}% (${wins})`;
      
    }
    document.querySelector(`.again`).classList.remove(`hidden`);
  }
  }
});
  
document.querySelector(`.again`).addEventListener(`click`, function () {
  click = 0;
  pink = 0;
  gameFinished = false;
  document.querySelector(`.click`).textContent = `Click: 0`;
  document.querySelector(`.pink`).textContent = `Pinks: 0`;
  document.querySelector(`.again`).classList.add(`hidden`);
  document.querySelector(`.endMessage`).textContent = ``;
});
