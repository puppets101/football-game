// Get text- and optionbuttons element from the DOM
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

// Start game
function startGame() {
  presentScene(1);
}


// Define the actions 
function presentScene(textIndex) {
  const sceneText = scenes.find(sceneText => sceneText.id === textIndex);
  textElement.innerText = sceneText.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  sceneText.options.forEach(option => {
    if(showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  })
}

function showOption(option) {
  return true;
}

function selectOption(option) {
  const nextTextId = option.nextText;
  if (nextTextId < 0) {
    return startGame();
  }
  presentScene(nextTextId);
}

/* function handleUserChoise(answer) {
  console.log(answer);

  if (answer === scenes[currentScene].options[0]) {
    currentScene = scenes[currentScene].nextScene[0];
  }
  if (answer === scenes[currentScene].options[1]) {
    currentScene = scenes[currentScene].nextScene[1];
  }
  if (answer !== scenes[currentScene].options[0] || scenes[currentScene].options[1]) {
    console('Please try again');
  }

  presentScene();
} */


const scenes = [
  {
    id: 1,
    text: `In the second half of a football match you find yourself still on the bench, and with only fiftheen minutes to play left, the manager comes up to you and tell you to start warming up.`,
    options: [
      {
        text: `Do as he say and start warming`,
        nextText: 2
      },
      {
        text: `Tell him you don't feel like playing`,
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: `After a couple minutes of warming you get the call that you're going to play. Quickly you get ready and get on to the pitch. The game is at high pace and you struggling to get hold of the ball. Suddenly you get the ball and see a teammate calling you for the ball.`,
    options: [
      {
        text: `Pass the ball to your teammate`,
        nextText: 4
      },
      {
        text: `Dribble past the defenders`,
        nextText: 5
      },
    ]
  },
  {
    id: 3,
    text: `The manager swears and looks angry at you and tells you go shower. In the dressingroom after the game the manager tells you not to come to the next match.`
  },
  {
    id: 4,
    text: `The ball gets safetly to you teammate who's advancing on the wing. You see an oppertunity to get the ball back inside the opponents penalty area.`,
    options: [
      {
        text: `Run inside the penalty area`,
        nextText: 6
      },
      {
        text: `Wait outside the penalty area`,
        nextText: 4
      },
    ]
  },
  {
    id: 5,
    text: `You've overestimated your dribble skill and a opponent tackles you and takes the ball. The opponents quickly counterattacks and score and your team lose the game.`,
  },
  {
    id: 6,
    text: `You've made the run inside the penalty area when a beautiful cross comes from your teammate. You manage to get clear of the defenders and go for the ball.`,
    options: [
      {
        text: `Jump and header the ball`,
        nextText: 7
      },
      {
        text: `Do a bicicleta`,
        nextText: 4
      },
      {
        text: `Dive and hope for a penalty`,
        nextText: 4
      }
    ]
  },
  {
    id: 7,
    text: `You collide mid air with the opponent defender's head and you feel like your skull is broken. The medical team quickly get you on a strecher and you are out of the game.`,
    nextText: -1
  },


  /* { // 0
    text: `You are playing football. Do you want to pass or shoot?`,
    options: ['pass', 'shoot'],
    nextScene: [1, 2]
  },
  { // 1
    text: `Nice pass! Do you want to stay behind or run along?`,
    options: ['stay behind', 'run along'],
    nextScene: [3, 4]
  },
  { // 2
    text: `You too off the goal and your shot just gets to the opponents. Do you want to tackle or take it easy?`,
    options: ['tackle', 'take it easy'],
    nextScene: [5, 6]
  },
  { // 3
    text: `You stay behind. The opponents intercept the ball and comes towards you. Do you slide tackle or tackle?`,
    options: ['slide tackle', 'tackle'],
    nextScene: [5, 6]
  },
  { // 4
    text: `You take the run into the box and your teammate pass the ball back to you. You are close to the goal and the goalkeeper comes out. Do you shoot left or right?`,
    options: ['left', 'right'],
    nextScene: [8, 9]
  },
  { // 5
    text: `You slide tackle but you don't time it well and only hits the opponent. The ref picks up his red card and you are out of the game.`,
    nextScene: [14]
  },
  { // 6
    text: `The tackle hits perfect and you win the ball back. Do you pass or dribble?`,
    options: ['pass', 'dribble'],
    nextScene: [1, 9]
  },
  { // 7
    text: `You take it easy and the manager becomes furious. He decide to make a substitute and you won't finnish the game`,
    nextScene: []
  },
  { // 8
    text: `You try to shoot to the left but just when you hit the ball you trample obliquely. You sprained your ankle and have to come off the pitch injured.`,
    nextScene: [12] //END INJURED
  },
  { // 9
    text: `You shoot to the right and completely fools the goalkeeper. You've scored and your team wins the game!`,
  },
  { // 10
    text: `You try to dribble but overetimated you skills. The opponent intercept the ball and score. You lose.`,
    nextScene: [12] //END LOST
  },
  { // 11 WIN
    text: `Congratulation! You've won the game!`,
  },
  { // 12 LOST
    text: `Unfortunatly you've lost the game.`,
  },
  { // 13 INJURED
    text: `You injured yourself and have to sit out the rest of the game.`,
  },
  { // SENT OFF
    text: `You got a red card and are off for the rest of the game.`
  },
  { // SUBBED
    text: `You got subbed of the game by the manager.`
  } */

]

startGame();
