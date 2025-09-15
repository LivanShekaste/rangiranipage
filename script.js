'use strict';

function randNum(max) {
  return Math.trunc(Math.random() * max) + 1;
}

document.addEventListener(`click`, function () {
  document.querySelector(`body`).style.background = `rgb(${randNum(
    255
  )},${randNum(255)},${randNum(255)})`;
});
