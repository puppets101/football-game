const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

function startGame() {
  textElement.innerHTML = 
  `
  <div id="text">Welcome to the Football Game</div>
  `
  optionButtonsElement.innerHTML = 
  `
  <button onclick="presentScene()" class="btn">Click to start game!</button>
  `
}

function presentScene() {
  textElement.innerHTML =
  `
  <div id="text">You get hold of the ball just outside the penalty area and the defenders are closing in, both behind and infront of you. </div>
  `;
  optionButtonsElement.innerHTML =
  `
  <button onclick="dribbleBall()" class="btn">Dribble the ball past the opponents</button>
  <button onclick="passBall()" class="btn">Pass the ball to your teammate</button>
  `;
}

function dribbleBall() {
  textElement.innerHTML = 
  `
  <div id="text">You try to dribble past the defenders but you have overestimated you own abillity to dribble and the opponents intercept and takes the ball. The referee blows his wistle and the game is over.</div>
  `;
  optionButtonsElement.innerHTML = 
  `
  <button onclick="playAgain()" class="btn">Restart Game</button>
  `;
}

function passBall() {
  textElement.innerHTML = 
  `
  <div id="text">You passed the ball to an open teammate on the wing and you run inside the penalty area to meet his cross from the wing. The cross comes and you have an excellent oppertunity to score. How do you hit the ball?</div>
  `;
  optionButtonsElement.innerHTML = 
  `
  <button onclick="headerBall()" class="btn">Header</button>
  <button onclick="volleyBall()" class="btn">Volley</button>
  <button onclick="bicicletaBall()" class="btn">Bicicleta</button>
  `;
}

function headerBall() {
  textElement.innerHTML = 
  `
  <div id="text">The ball comes flying towards you and you jump to meet it with a header and hits it perfect. The ball takes a bow out of the reach for the goalkeeper and bounces inside the goal line. You've scored the winning goal!</div>
  `;
  optionButtonsElement.innerHTML = 
  `
  <button onclick="playAgain()" class="btn">Play again</button>
  `;
}

function volleyBall() {
  textElement.innerHTML = 
  `
  <div id="text">The ball comes flying towards you and you take a steb back to hit it on the volley. The defenders closing in and are close when you hit the ball with your feet. The ball comes off the hand of the defender and the referee blows his wistle and pointing at the penalty spot.</div>
  `;
  optionButtonsElement.innerHTML = 
  `
  <button onclick="takePenalty()" class="btn">Take penalty yourself</button>
  <button onclick="dontTakePenalty()" class="btn">Dont take the penalty</button>
  `;
}

function bicicletaBall() {
  textElement.innerHTML =
  `
  <div id="text">The ball comes flying towards you and you try to time it with an overhead kick, but you are no Zlatan. You totally miss time it and falls to the ground. You can hear the laugher from the stands and soon after your manager calls you for a substitute.</div>
  `;
  optionButtonsElement.innerHTML = 
  `
  <button onclick="playAgain()" class="btn">Restart game</button>
  `;
}

function takePenalty() {
  textElement.innerHTML =
  `
  <div id="text">You feel confident puttiong the ball on the spot, you take a few steps back while the goalkeeper trying to psyche you. The referee blows his wistle. It's up to you!</div>
  `;
  optionButtonsElement.innerHTML = 
  `
  <button onclick="penaltyPower()" class="btn">Hit the ball hard</button>
  <button onclick="placeIt()" class="btn">Place it to the right</button>
  <button onclick="chipIt()" class="btn">Chip it like a boss</button>
  `;
}

function penaltyPower() {
  textElement.innerHTML =
  `
  <div id="text">OUCH! You failed completly. You hit the ball way to hard for you to handle the aim. The ball flyes way over the crossbar and you put your hands over your head as the referee blows the final wistle.</div>
  `;
  optionButtonsElement.innerHTML = 
  `
  <button onclick="playAgain()" class="btn">Restart Game</button>
  `;
}

function placeIt() {
  textElement.innerHTML =
  `
  <div id="text">It might not be much power, but the ball it puy precicely where you want it. Drilling down the inner side net to the right. The goalkeeper tried to wait you out but the ball is too well place for him i reach. Your temmates rushes over to you and you all celebrate the win togheter.</div>
  `;
  optionButtonsElement.innerHTML = 
  `
  <button onclick="playAgain()" class="btn">Play Again</button>
  `;
}

function chipIt() {
  textElement.innerHTML =
  `
  <div id="text">You had it all planned out, you were going to be on everyones lips after chipping the ball into the goal, but the goalkeeper was even cooler himself. He waited you out and just scoped the weak chip in in arms. The final wistle blows and you're rememberd not as you were planned.</div>
  `;
  optionButtonsElement.innerHTML = 
  `
  <button onclick="playAgain()" class="btn">Restart Game</button>
  `;
}

function playAgain() {
  startGame();
}

startGame();