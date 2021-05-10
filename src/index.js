import colors from './js/colors';
import refs from './js/refs';
import './css/styles.css';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const DELAY = 1000;
let intervalId = null;

onPageLoading();

function onStartBtnClick() {
  intervalId = setInterval(changeBodyBgColor, DELAY);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStopBtnClick() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

function onPageLoading() {
  refs.stopBtn.disabled = true;
}

function changeBodyBgColor() {
  let currentIndex = randomIntegerFromInterval(0, colors.length);
  refs.body.style.backgroundColor = colors[currentIndex];
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);