

function startGame() {
  showText();
}

let textElement = document.getElementById('text');
let optionButtons = document.getElementById('option-buttons');

function showText() {
  textElement.innerText = 'You find yourself with the ball on the opponents half of the pitch with two defenders comming at you. What do you do?';
  optionButtons.innerHTML = `<button onclick="passBall()" class="btn">Pass the ball</button> <button onclick="dribbleBall()" class="btn">Dribble the ball</button>`; 
}

function passBall() {
  textElement.innerText = `Great! You passed a great ball out on the wing to your teammate. Who's starting running down the wing to cross the ball in to the dandger zone. Where do you position yourself?`;
  optionButtons.innerHTML = `<button onclick="insidePenaltyArea()" class="btn">Inside the penalty area</button> <button onclick="outsidePenaltyArea()" class="btn">Outside the penalty area</button>`;
}

function dribbleBall() {
  textElement.innerText = `Ouch! You overestimated your skills to dribble and the opponent's gets hold of the ball and quickly counterattacks and score. You and your team lost the game.`;
  optionButtons.innerHTML = `<button onclick="startGame()" class="btn">Restart Game</button>`;
}

function insidePenaltyArea() {
  textElement.innerText = `You make a run inside the penalty area but the cross is far to off for you to reach the ball with your head. You swear at your teammate and start to jog back.`;
  optionButtons.innerHTML = `<button onclick="startGame()" class="btn">Restart Game</button>`;
}

function outsidePenaltyArea() {
  textElement.innerText = `You positioning yourself just outside the penelty area and when the cross comes you time the ball perfect and hit it with all the power you've got. The ball takes a bow and finds its way into the goal. You've won the game!`;
  optionButtons.innerHTML = `<button onclick="startGame()" class="btn">Play Again</button>`;
}



