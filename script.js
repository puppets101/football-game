// Get text- and optionbuttons element from the DOM
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

// Define state
let currentScene = 0;
const scenes = [

  {
    id: 1,
    text: `You find yourself in a football game and it's happends to be the World Cup final the year 2052. On your feets you see a pair of what looks like shoes but with blinking cables instead of shoestrings going in to your legs. You see a green and a red button on this so called shoes and you decide to press one of them. Witch button do you press?`,
    options: [
      {
        text: 'Press green button',
        nextScene: 2
      },
      {
        text: 'Press red button',
      }
    ]
  },

  {
    text: `You hear a swoosh comming from underneath you and you realize the football boots in year 2052 has a hover effect. You make a couple of moves and find, to your relief, that the boots are not too much of a challange. Simultaneously the football game is in motion and you decide to join the game, after all you were a football star at a young age. What is your first action?`,
    options: [
      {
        id: 2,
        text: 'Call for the ball',
        nextScene: 3
      },
      {
        text: 'Get hold of a teammate'
      }
    ]
  },

  {
    text: `The cables stops blinking and only a few seconds later a hovering stretcher comes for you, pick you up, and removing you from the field.`,
    nextScene: []
  },

  {
    text: `No one seems to hear you and you realize the whole arena, which probably contains around 200.000 supporters, is not making a sound. You take of your helmet and with that the hovering shoes stops working. You fall to the ground and is carried out of the field by a hovering strecher.`,
    nextScene: []
  },

];

let state = {};

function startGame() {
  state = {};
  showScenes(1);
}


// Define the actions 
function presentScene(textNodeIndex) {
  textElement.innerText = scenes[currentScene].text; 

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  })
}

function showOption(option) {
  return true;
}

function selectOption(option) {

}

startGame();

/* function handleUserChoise(answer) {
  console.log(answer);

  if (answer === scenes[currentScene].options[0]) {
    currentScene = scenes[currentScene].nextScene[0];
  }
  if (answer === scenes[currentScene].options[1]) {
    currentScene = scenes[currentScene].nextScene[1];
  }
  if (answer === scenes[currentScene].options[3]) {
    currentScene = scenes[currentScene].nextScene[3];
  }
  if (answer === scenes[currentScene].options[4]) {
    currentScene = scenes[currentScene].nextScene[4];
  }

  presentScene();
} */

