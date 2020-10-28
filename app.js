/* const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons') */

let currentScene = 0;

const scenes = [  
  { // 0
    text: `You are playing football. Do you want to pass or shoot?`,
    choices: ['pass', 'shoot'],
    nextScene: [1, 2]
  },
  { // 1
    text: `Nice pass! Do you want to stay behind or run along?`,
    choices: ['stay behind', 'run along'],
    nextScene: [3, 4]
  },
  { // 2
    text: `You too far off the goal and your shot just gets to the opponents. Do you want to tackle or take it easy?`,
    options: ['tackle', 'take it easy'],
    nextScene: [5, 6]
  },
  { // 3
    text: `You stay behind. The opponents intercept the ball and comes towards you. Do you slide tackle or tackle?`,
    options: ['slide tackle', 'tackle'],
    nextScene: [5, 5]
  },
  { // 4
    text: `You run along. The ball comes back `,
    options: ['header', 'volley'],
    nextScene: [7, 8]
  },
  { // 5
    text: `You tackle. hits perfect and retake the ball.`,
    options: ['cross', 'dribble'],
    nextScene: [7, 9]
  },
  { // 6
    text: `You take it easy and your manager thinks you are tired and you get subbed off.`,
    options: ['slide tackle', 'tackle'],
    nextScene: [5, 6]
  },
  { // 7
    text: `End of game`,
  },
];

window.onload = presentScene;

function presentScene() {
  const answer = prompt(scenes[currentScene].text);
  
  handleUserChioce(answer);
}

function handleUserChioce(answer) {
  console.log(answer);

  if (answer === scenes[currentScene].choices[0]) {
    currentScene = scenes[currentScene].nextScene[0];
  }
  if (answer === scenes[currentScene].choices[1]) {
    currentScene = scenes[currentScene].nextScene[1];
  }
  if (answer === scenes[currentScene].choices[2]) {
    currentScene = scenes[currentScene].nextScene[2];
  }
  if (answer === scenes[currentScene].choices[3]) {
    currentScene = scenes[currentScene].nextScene[3];
  }
  if (answer === scenes[currentScene].choices[4]) {
    currentScene = scenes[currentScene].nextScene[4];
  }
  if (answer === scenes[currentScene].choices[5]) {
    currentScene = scenes[currentScene].nextScene[5];
  }
  if (answer === scenes[currentScene].choices[6]) {
    currentScene = scenes[currentScene].nextScene[6];
  }

  presentScene();
}