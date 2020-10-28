// Get text- and optionbuttons element from the DOM
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

// Define state
let currentScene = 0;
const scenes = [
  { // 0
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
  }

];

// Run program on load
window.onload = presentScene;


// Define the actions 
function presentScene() {
  textElement.innerText = scenes[currentScene].text;
  const answer = document.getElementById('option-buttons');
  console.log(answer);
  /* const answer = prompt(scenes[currentScene].text);
  handleUserChoise(answer); */
  
  /* const button = document.createElement('button');
  button.innerText = options[0];
  button.classList.add('btn'); */
}


function handleUserChoise(answer) {
  console.log(answer);

  if (answer === scenes[currentScene].options[0]) {
    currentScene = scenes[currentScene].nextScene[0];
  }
  if (answer === scenes[currentScene].options[1]) {
    currentScene = scenes[currentScene].nextScene[1];
  }
/*   if (answer === scenes[currentScene].options[3]) {
    currentScene = scenes[currentScene].nextScene[3];
  }
  if (answer === scenes[currentScene].options[4]) {
    currentScene = scenes[currentScene].nextScene[4];
  } */

  presentScene();
}

