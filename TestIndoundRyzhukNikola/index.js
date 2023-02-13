let cards1 = document.querySelectorAll('.footer-bloc1');
let cards2 = document.querySelectorAll('.footer-bloc2');
let cards3 = document.querySelectorAll('.footer-bloc3');
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
let container = document.querySelector('.container')

let currentIndex = 0;
const cards = [...cards1, ...cards2, ...cards3];

btnNext.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  for (let i = 0; i < cards.length; i++) {
    if (container.offsetWidth <= 1112 && cards[i].style.order === "3") {
      cards[i].style.display = "none";
      
    }
    else if(container.offsetWidth <= 540 && cards[i].style.order === "2"){
      cards[i].style.display = "none";
    }
    else {
      cards[i].style.display = "block";
    }
    cards[i].style.order = (i + currentIndex) % cards.length + 1;
  }
});

btnPrev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }

  for (let i = 0; i < cards.length; i++) {
    if (container.offsetWidth <= 1112 && cards[i].style.order === "3") {
      cards[i].style.display = "none";
    }
    else if(container.offsetWidth <= 540 && cards[i].style.order === "2"){
      cards[i].style.display = "none";
    }
    else {
      cards[i].style.display = "block";
    }
    cards[i].style.order = (i + currentIndex) % cards.length + 1;
  }
});


