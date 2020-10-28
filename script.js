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

]

startGame();
