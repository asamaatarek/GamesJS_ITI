let gameBoard = document.querySelector('.game-board');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let moves = 0;
let timer = 0;
let score = 0;
let timeInterval;
let matchedPairs = 0;
let totalPairs = 0;
let currentLevel;


function startGame(level){
  currentLevel = level;
  score = 0;
  document.getElementById("score").textContent = score;  
  document.getElementById('timer').textContent = 0;
  document.getElementById('moves').textContent = 0;
  document.getElementById('score').textContent = 0;
  
  let size;
  if(level === 'easy') size = 4;
  else if (level === 'medium') size = 6;
  else size = 8;

  showHighestScore();
  clearInterval(timeInterval);

  moves = 0;
  timer = 0;
  
  matchedPairs = 0;
  totalPairs = (size * size) / 2;



  timeInterval = setInterval(()=>{
    timer ++;
    document.getElementById('timer').textContent = timer;
    },1000);



  let images = []
  for (let i = 1; i <= totalPairs; i++){
    images.push(`img${i}.png`)
    images.push(`img${i}.png`)
  }

  images = shuffle(images);

  gameBoard.innerHTML = "";

  gameBoard.style.gridTemplateColumns= `repeat(${size}, 1fr)`;

  images.forEach(img =>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.image = img;

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="images/back.jpg" alt="Back">
        </div>
        <div class="card-back">
          <img src="images/${img}" alt="Front">
        </div>
      </div>  
    `;

    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
  });

  resetBoard();
}


function shuffle(array){
  return array.sort(()=> Math.random() - 0.5);
}

function flipCard(){
  if (lockBoard || this === firstCard) return;

  this.classList.add('flipped');

  if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
secondCard = this;

moves ++;
document.getElementById('moves').textContent = moves;

checkForMatch();

let tempScore = Math.floor((matchedPairs * 200) - (moves * 5) - (timer * 2));
if (tempScore < 0) tempScore = 0;
score = tempScore;
document.getElementById('score').textContent = score;
}


function checkForMatch(){
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  if (isMatch) {
    disableCards();
  } else{
    unflipCards();
  }

}


function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchedPairs ++;
  
  

  if(matchedPairs === totalPairs){
    clearInterval(timeInterval);

    setTimeout(() => {
      const highScoreKey = `highestScore_${currentLevel}`;
      const storedHighScore = parseInt(localStorage.getItem(highScoreKey)) || 0;

      updateHighScore(score);

      if (score > storedHighScore) {
        localStorage.setItem(highScoreKey, score);
        alert(`New High Score! \nMoves: ${moves}\nTimer: ${timer}\nScore: ${score}`);
      } else {
        alert(`Game Over!\nMoves: ${moves}\nTimer: ${timer}\nScore: ${score}`);
      }
    }, 100);
  
  }

  resetBoard();
}

function unflipCards(){
  lockBoard = true;
  setTimeout(()=>{
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  },1000);
}

function resetBoard(){
  [hasFlippedCard, lockBoard] = [false , false];
  [firstCard, secondCard] = [null, null];
}


function updateHighScore(score) {
  const highScoreKey = `highestScore_${currentLevel}`;
  const storedHighScore = localStorage.getItem(highScoreKey);

  if (!storedHighScore || score > parseInt(storedHighScore)) {
    localStorage.setItem(highScoreKey, score);
    document.getElementById('highest-score').textContent = score;
  }
}

function showHighestScore() {
  const highScoreKey = `highestScore_${currentLevel}`;
  const storedHighScore = localStorage.getItem(highScoreKey);
  document.getElementById('highest-score').textContent = storedHighScore || 0;
}

