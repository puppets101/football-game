// Get text- and optionbuttons element from the DOM
/**
 * @param {textElement} * Get text div element from DOM
 * @param {optionButtonsElement} * Get option buttons element from DOM
 */
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

// Start game
/**
 * @param {presentScene} * function calls precentScene with the id of 1
 */
function startGame() {
  presentScene(1);
}


// Define the actions 
/**
 * 
 * @param {presentScene} textIndex 
 */
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
  // Intro
  {
    id: 1,
    text: `Welcome to the Football Game. In this scenario, you are a young lad with a passion for football and the scene you're about to interact with takes place in the dying minutes of a football match. You and your team have to win the game to stay in the competition, and the rules are simple, make your way through the opponents and score the winning goal before the referee blows the final whistle. Have in mind that the choices you make may affect the outcome of the game. Think like a footballer and you will be celebrated. Good Luck!`,
    options: [
      {
        text: `Start Game`,
        nextText: 2
      }
    ]
  },
  // First scene
  {
    id: 2,
    text: `The game has so far been back and forth, but it seems that has the upper hand to . The clock hits the ninety minutes mark, and you see a board on the sideline telling there are three minutes of extra time. In that very moment, you suddenly get hold of the ball and start sprinting down the pitch. Ahead of you two giant defenders blocks your way.`,
    options: [
      {
        text: `Dribble the ball past the defenders`,
        nextText: 3
      },
      {
        text: `Pass the ball to your teammate`,
        nextText: 4
      },
    ]
  },
  // Dribble
  { 
    id: 3,
    text: `You try to dribble past the defenders with some tricks you've only seen Ronaldinho do and you have overestimated your own ability to dribble. The defenders intercept and take the ball. You realise your mistake and try to get the ball back but to no use. The defenders block the ball too well and the time runs out. The referee blows his whistle, and the game is over.`,
    options: [
      {
        text: `Restart Game`,
        nextText: 2
      }
    ]
  },
  // Pass ball
  {
    id: 4,
    text: `Well done! You have some self-insight and, the pass is safely delivered to your teammate on the wing. He starts to run down the wing when you see an opportunity to get the ball back from your teammate inside the box. Just as you thought, the ball arrives with a beautiful curve. It's up to you how to finish.`,
    options: [
      {
        text: `Do a header`,
        nextText: 5
      },
      {
        text: `Do a volley`,
        nextText: 6
      },
      {
        text: `Do a bicicleta`,
        nextText: 16
      },
    ]
  },
  // Header
  {
    id: 5,
    text: `The ball comes across towards you when you jump to meet it with your head. Everything seems to be in slow motion and just when you're about to hit the ball, your head collides with a opponents defender's head, who tries to clear the ball. Helpless you fall to the ground and blackout. When you wake up, you seem to be in a hospital bed with a bandage over your head.`,
    options: [
      {
        text: `Press button to call for doctor`,
        nextText: 8
      },
      {
        text: `Put on tv to find out the score`,
      },
    ]
  },
  // Volley 
  {
    id: 6,
    text: `The ball comes flying towards you when you take a few steps back to hit it with a volley shot. The defenders are closing in when you hit the ball. The ball comes off the hand of the defender. You and all the supporters call for a penalty. The referee is not sure he has to check with the Video assistant referees. There's tension on the pitch when he comes back. He blows his whistle and points to the penalty spot.`,
    options: [
      {
        text: `Take penalty yourself`,
        nextText: 11
      },
      {
        text: `Dont take the penalty`,
        nextText: 12
      }
    ]
  },
  {
    id: 7,
    text: `You collide mid air with the opponent defender's head and you feel like your skull is broken. The medical team quickly get you on a strecher and you are out of the game.`,
    nextText: -1
  },
  {
    id: 8,
    text: `You feel groggy, but also you know your place around a hospital, you've been to several over the years for football accidents. Into the room, a man walks in a white robe and you quickly notice his title: Head of neurology. He looks serious at you and tells you that this could have gone very bad.`,
    options: [
      {
        text: `Ask when you can play`,
        nextText: 9
      },
      {
        text: `Find out the score`,
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: `You have just been told you suffered a concussion and that you shouldn't keep playing football. You feel sad, but at the same time relieved, you start thinking of your future and your dream job as a web developer and how much time this football career takes up for you. A couple of days later you are back home, open your laptop, and type your very first code: console.log('Hello World!');`,
    options: [
      {
        text: `Play Again`,
        nextText: 1
      }
    ],
  },
  {
    id: 10,
    text: `Your grogginess quickly disappears when you realise the game must be finished by now. You ask the doctor to find out the score in the game, but he looks serious at you and tells you to listen to him. He starts by talking of meaning of life and how lucky you are to be here. You and he have a long discussion, and after a while, you don't even bother to find out the score.`,
    options: [
      {
        text: `Play Again`,
        nextText: 1
      }
    ],
  },
  {
    id: 11,
    text: `You feel confident putting the ball on the spot. Eleven meters are now all there is between the ball and the goal. You take a few steps back while the goalkeeper is trying to psyche you. The referee blows his whistle. It's now totally up to you! Score and win, miss and be remembered as a failure.`,
    options: [
      {
        text: `Hit the ball hard`,
        nextText: 13
      },
      {
        text: `Place it to the right`,
        nextText: 14
      },
      {
        text: `Chip it like a boss`,
        nextText: 15
      },
    ]
  },
  {
    id: 12,
    text: `You can't believe your ears you just told the team captain that you can't take the penalty. It must be the nerves, all your life you have been the first to run to the penalty spot, eager to shoot for fame and glory. You are so nervous that you almost can't watch it. With one eye open, you see the ball flies off over the crossbar. You resent over your choice not to take the penalty, but it's too late. The referee blows the final whistle.`,
    options: [
      {
        text: `Restart game`,
        nextText: 1
      }
    ]
  },
  {
    id: 13,
    text: `OUCH! You have failed. You hit the ball way too hard for you to handle the aim. The ball flies way over the crossbar, and you put your hands over your head as the referee blows the final whistle. You feel like you let everyone down, but one after one of your teammates comes to comfort you.`,
    options: [
      {
        text: `Restart Game`,
        nextText: 1
      }
    ]
  },
  {
    id: 14,
    text: `It might not be much power, but the ball is placed precisely where you want it, drilled down the inner side of the net to the right. The goalkeeper tried to wait you out, but the ball was well placed and he couldn't reach before it was too late. Your teammates rush over to you, and you all celebrate the win together. After the game, you are the selected man of the match!`,
    options: [
      {
        text: `Play Again`,
        nextText: 1
      }
    ]
  },
  {
    id: 15,
    text: `You had it all planned out, you were going to be on everyone's lips, in every sports section of the newspapers, after chipping the ball into the goal. You're smile thinking of the glory quickly disappears when you see the goalkeeper easily scope the ball in his bosom. The referee blows the final whistle and you realise the aftermath won't be a walk in a park.`,
    options: [
      {
        text: `Restart Game`,
        nextText: 1
      }
    ]
  },
  {
    id: 16,
    text: `The ball comes flying towards you when you try to time it with an overhead kick, but you are no Zlatan. You miss time it and falls to the ground. You can hear the laugher from the stands, and your teammates look disappointed. Not long after, the referee blows the final whistle. You keep laying on the ground looking up to the sky and thinking about next season. Maybe if you practise extra on the overhead kick, you be able to do it properly next time.`,
    options: [
      {
        text: `Restart Game`,
        nextText: 1
      }
    ]
  },
]

startGame();
