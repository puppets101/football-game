// Define state
let currentScene = 0;
const scenes = [
  {
    text: `You find yourself in a football game and it's happends to be the World Cup final the year 2052. On your feets you see a pair of what looks like shoes but with cables instead of shoestrings going in to your legs. You see a green and a red button on this so called shoes and you decide to press one of them. Witch button do you press?`,
    options: ['Press green button', 'Press red button'],
    nextScene: [1, 0]
  },
  {
    text: `You hear a swoosh comming from underneath you and you realize the football boots in year 2052 has a hover effect. You make a couple of moves and find, to your relief, that the boots are not too much of a challange. Simultaneously the football game is in motion and you decide to join the game, after all you were a football star at a young age. What is your first action?`,
    options: ['Call for the ball', 'Talk to a guy wearing the same shirt'],
    nextScene: []
  }
];

// Inventory
const inventory = [''];

// Run application 
window.onload = showText;

// Define the actions 
function showText() {
  const answer = prompt(scenes[currentScene].text);
  handleUserChoise(answer);
}

function handleUserChoise(answer) {
  console.log(answer);
  if (answer === scenes[currentScene].options[0]) {
    currentScene = scenes[currentScene].nextScene[0];
  }
  if (answer === scenes[currentScene].options[1]) {
    currentScene = scenes[currentScene].nextScene[1];
  }

  showText();
}
