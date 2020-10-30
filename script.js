/** @type {HTMLHeadingElement} Get heading from the DOM */
const heading = document.getElementById('heading');
/** @type {HTMLHtmlElement} Get text div element from the DOM */
const textElement = document.getElementById('text');
/** @type {HTMLButtonElement} Get option buttons div element from the DOM */
const optionButtonsElement = document.getElementById('option-buttons');

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function startGame() {
  heading.innerHTML = 
    `The game of the game`;
  textElement.innerHTML = 
    `<div id="text">Welcome to the Football Game. In this scenario, you are a young lad with a passion for football and the scene you're about to interact with takes place in the dying minutes of a football match. You and your team have to win the game to stay in the competition, and the rules are simple, make your way through the opponents and score the winning goal before the referee blows the final whistle. Have in mind that the choices you make may affect the outcome of the game. Think like a footballer and you will be celebrated. Good Luck!</div>`;
  optionButtonsElement.innerHTML = 
    `<button onclick="selectTeams()" class="btn">Select your team</button>`;
}

function selectTeams() {
  heading.innerHTML = 
    `Select teams`;
  // Lets user type two teams in an input field
  textElement.innerHTML = 
    `
    <div id="text">
    <form class="form">
    <label class="label" for="name">My team</label>
    <input type="text" id="myTeam" placeholder="Manchester United">
    <label class="label" for="name">Opponents team:</label>
    <input type="text" id="opponentsTeam" placeholder="Liverpool">
    </form>
    </div>
    `;
  optionButtonsElement.innerHTML = 
    `<button onclick="saveTeam()" class="btn">Start Game</button>`;
}

function saveTeam() {
  presentScene();
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene */
function presentScene() {
  heading.innerHTML = 
    `Times almost up for ${myTeam.value}!`;
  textElement.innerHTML =
    `<div id="text">The game has so far been back and forth, but it seems that ${myTeam.value} has the upper hand to ${opponentsTeam.value}. The clock hits the ninety minutes mark, and you see a board on the sideline telling there are three minutes of extra time. In that very moment, you suddenly get hold of the ball and start sprinting down the pitch. Ahead of you two giant defenders blocks your way.</div>`;
  optionButtonsElement.innerHTML =
    `
    <button onclick="dribbleBall()" class="btn">Dribble the ball past the defenders</button>
    <button onclick="passBall()" class="btn">Pass the ball to your teammate</button>
    `;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function dribbleBall() {
  heading.innerHTML = 
  `You think you are Ronaldinho?`;
  textElement.innerHTML = 
    `<div id="text">You try to dribble past the defenders with some tricks you've only seen Ronaldinho do and you have overestimated your own ability to dribble. The defenders intercept and take the ball. You realise your mistake and try to get the ball back but to no use. The defenders block the ball too well and the time runs out. The referee blows his whistle, and the game is over.</div>`;
  optionButtonsElement.innerHTML = 
    `<button onclick="startGame()" class="btn">Restart Game</button>`;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function passBall() {
  heading.innerHTML = 
    `Better safe than sorry!`;
  textElement.innerHTML = 
    `<div id="text">Well done! You have some self-insight and, the pass is safely delivered to your teammate on the wing. He starts to run down the wing when you see an opportunity to get the ball back from your teammate inside the box. Just as you thought, the ball arrives with a beautiful curve. It's up to you how to finish.</div>`;
  optionButtonsElement.innerHTML = 
    `
    <button onclick="headerBall()" class="btn">Do a header</button>
    <button onclick="volleyBall()" class="btn">Do a volley</button>
    <button onclick="bicicletaBall()" class="btn">Do a bicicleta</button>
    `;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function headerBall() {
  heading.innerHTML = 
    `Get your head out of the game!`;
  textElement.innerHTML = 
    `<div id="text">The ball comes across towards you when you jump to meet it with your head. Everything seems to be in slow motion and just when you're about to hit the ball, your head collides with a opponents defender's head, who tries to clear the ball. Helpless you fall to the ground and blackout. When you wake up, you seem to be in a hospital bed with a bandage over your head.</div>`;
  optionButtonsElement.innerHTML = 
    `
    <button onclick="callForDoctor()" class="btn">Press button to call for doctor</button>
    <button onclick="findOutScore()" class="btn">Try to find out the score</button>
    `;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function volleyBall() {
  heading.innerHTML = 
    `VAR is with you`;
  textElement.innerHTML = 
    `<div id="text">The ball comes flying towards you when you take a few steps back to hit it with a volley shot. The defenders are closing in when you hit the ball. The ball comes off the hand of the defender. You and all the supporters call for a penalty. The referee is not sure he has to check with the Video assistant referees. There's tension on the pitch when he comes back. He blows his whistle and points to the penalty spot.</div>`;
  optionButtonsElement.innerHTML = 
    `
    <button onclick="takePenalty()" class="btn">Take penalty yourself</button>
    <button onclick="dontTakePenalty()" class="btn">Dont take the penalty</button>
    `;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function bicicletaBall() {
  heading.innerHTML = 
    `Zlatan can teach you`;
  textElement.innerHTML =
    `<div id="text">The ball comes flying towards you when you try to time it with an overhead kick, but you are no Zlatan. You miss time it and falls to the ground. You can hear the laugher from the stands, and your teammates look disappointed. Not long after, the referee blows the final whistle. You keep laying on the ground looking up to the sky and thinking about next season. Maybe if you practise extra on the overhead kick, you be able to do it properly next time.</div>`;
  optionButtonsElement.innerHTML = 
    `<button onclick="startGame()" class="btn">Restart game</button>`;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function takePenalty() {
  heading.innerHTML = 
    `Nerves of steel`;
  textElement.innerHTML =
    `<div id="text">You feel confident putting the ball on the spot. Eleven meters are now all there is between the ball and the goal. You take a few steps back while the goalkeeper is trying to psyche you. The referee blows his whistle. It's now totally up to you! Score and win, miss and be remembered as a failure.</div>`;
  optionButtonsElement.innerHTML = 
    `
    <button onclick="penaltyPower()" class="btn">Hit the ball hard</button>
    <button onclick="placeIt()" class="btn">Place it to the right</button>
    <button onclick="chipIt()" class="btn">Chip it like a boss</button>
    `;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function dontTakePenalty() {
  heading.innerHTML = 
    `So you chickened out`;
  textElement.innerHTML =
    `<div id="text">You can't believe your ears you just told the team captain that you can't take the penalty. It must be the nerves, all your life you have been the first to run to the penalty spot, eager to shoot for fame and glory. You are so nervous that you almost can't watch it. With one eye open, you see the ball flies off over the crossbar. You resent over your choice not to take the penalty, but it's too late. The referee blows the final whistle.</div>`;
  optionButtonsElement.innerHTML = 
    `<button onclick="startGame()" class="btn">Restart game</button>`;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function penaltyPower() {
  heading.innerHTML = 
    `God dammit!`;
  textElement.innerHTML =
    `<div id="text">OUCH! You have failed. You hit the ball way too hard for you to handle the aim. The ball flies way over the crossbar, and you put your hands over your head as the referee blows the final whistle. You feel like you let everyone down, but one after one of your teammates comes to comfort you.</div>`;
  optionButtonsElement.innerHTML = 
    `<button onclick="startGame()" class="btn">Restart Game</button>`;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function placeIt() {
  heading.innerHTML = 
    `Man of the match!`;
  textElement.innerHTML =
    `<div id="text">It might not be much power, but the ball is placed precisely where you want it, drilled down the inner side of the net to the right. The goalkeeper tried to wait you out, but the ball was well placed and he couldn't reach before it was too late. Your teammates rush over to you, and you all celebrate the win together. After the game, you are the selected man of the match!</div>`;
  optionButtonsElement.innerHTML = 
    `<button onclick="startGame()" class="btn">Play Again</button>`;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function chipIt() {
  heading.innerHTML = 
    `You vs the goalkeeper`;
  textElement.innerHTML =
    `<div id="text">You had it all planned out, you were going to be on everyone's lips, in every sports section of the newspapers, after chipping the ball into the goal. You're smile thinking of the glory quickly disappears when you see the goalkeeper easily scope the ball in his bosom. The referee blows the final whistle and you realise the aftermath won't be a walk in a park.</div>`;
  optionButtonsElement.innerHTML = 
    `<button onclick="startGame()" class="btn">Restart Game</button>`;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function callForDoctor() {
  heading.innerHTML = 
    `Lucky to be alive`;
  textElement.innerHTML =
    `<div id="text">You feel groggy, but also you know your place around a hospital, you've been to several over the years for football accidents. Into the room, a man walks in a white robe and you quickly notice his title: Head of neurology. He looks serious at you and tells you that this could have gone very bad.</div>`;
  optionButtonsElement.innerHTML =
    `
    <button onclick="playFootballAgain()" class="btn">Ask when you can play</button>
    <button onclick="findOutScore()" class="btn">Find out the score</button>
    `;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function playFootballAgain() {
  heading.innerHTML = 
    `Thinking about the future`;
  textElement.innerHTML =
    `<div id="text">You have just been told you suffered a concussion and that you shouldn't keep playing football. You feel sad, but at the same time relieved, you start thinking of your future and your dream job as a web developer and how much time this football career takes up for you. A couple of days later you are back home, open your laptop, and type your very first code: console.log('Hello World!');</div>`;
  optionButtonsElement.innerHTML =
    `<button onclick="startGame()" class="btn">Play Again</button>`;
}

/** @returns {innerHTML} Return heading text and option buttons for actual scene*/
function findOutScore() {
  heading.innerHTML = 
    `What is the score??`;
  textElement.innerHTML =
    `<div id="text">You are so eager to find out the score you call for someone and inte the room walks a woman with a white robe. She starts by talking of meaning of life and how lucky you are to be here. You and she have a long discussion, and after a while, you don't even bother to find out the score.</div>`;
  optionButtonsElement.innerHTML =
    `<button onclick="startGame()" class="btn">Play Again</button>`;
}

// Calls startGame when page load
startGame();