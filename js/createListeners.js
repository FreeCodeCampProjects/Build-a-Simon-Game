/* ( X ) Actions to complete when the key press
   log is determined as successful:
*************************************************/

logKeyPressSuccess = function(color) {
  console.log(CONFIG.SYSTEM_MSG.SUCCESS + CONFIG.SYSTEM_MSG.MATCHED_ALL + scores.counter + ' keys');
  wellDoneAnimation();
  scores.counter++;
  scores.score++;
  gameScreen.outputFeedback(CONFIG.SYSTEM_MSG.WELL_DONE, '#00FF00');
  gameScreen.scoreOutput();
  if (scores.score >= CONFIG.SCORE_TO_WIN) {
    gameScreen.victory();
  } else {
    setTimeout(function() {
      appState.sequences.player = [];
      gameScreen.whoseTurn.changeTurn();
      gameScreen.whoseTurn.messageOutput();
      gameScreen.whoseTurn.functionCall();
    }, 1000);
  }
};

/* ( X ) Actions to complete when the key press
   log is determined as a failure:
*************************************************/

logKeyPressFailure = function(color) {
  console.log(CONFIG.SYSTEM_MSG.FAILURE + CONFIG.SYSTEM_MSG.MISMATCHED + scores.counter);
  gameScreen.outputFeedback(CONFIG.SYSTEM_MSG.TRY_AGAIN, '#FF0000');
  $('#sound-' + color)[0].pause();
  $('#sound-' + color)[0].currentTime = 0;
  setTimeout(function() {
    $('#sound-gameover')[0].play();
    gameScreen.whoseTurn.changeTurn();
    gameScreen.whoseTurn.messageOutput();
    appState.sequences.player = [];
    setTimeout(function() {
      if (!appState.strictMode) {
        console.log(CONFIG.SYSTEM_MSG.MODE.STRICT.DISABLED);
        playSequence();
      } else {
        console.log(CONFIG.SYSTEM_MSG.MODE.STRICT.ENABLED);
        appState.sequences.computer = modules.shuffleArr(appState.sequences.computer);
        playSequence();
      }
    }, 1000);
  }, 200);
};


/* ( X ) :
*************************************************/

logKeyPress = function logKeyPress(color) {

  /* ( X ) If the key pressed/logged occurs on
      the player's turn, we push the key's colour
      to the player's sequence (array) and
      increment "scores.counter" by 1:
  *************************************************/

  if (appState.playerTurn) {
    appState.sequences.player.push(color);
    scores.counter++;

    /* ( X ) If the key the player presses/logs
        matches the computer's key for this index
        (the index is determined by "scores.counter")
        AND (I used a nested "if" instead of && for
        readability) the computer and player
        sequences (arrays) are the same length, then
        the key press was successful:
    *************************************************/

    if (appState.sequences.player[scores.counter - 1] == appState.sequences.computer[scores.counter - 1].id) {
      if (appState.sequences.player.length === appState.sequences.computer.length) {
        logKeyPressSuccess(color);
      }
    } else {
      logKeyPressFailure(color);
    }
  }
};


/* ( X ) Log the key pressed to the "logKeyPress"
    function (that will manage events).
    Meanwhile, play the sound and animate the key
    that was pressed:
*************************************************/

manageKeyPress = function manageKeyPress(elem, color) {
  logKeyPress(color);
  $('#sound-' + color)[0].play();
  modules.addAndThenRemoveClass({
    element: elem,
    class: color + '-light',
    timeout: 200
  });
};


/* ( X ) Here we use a helper function — managing
    event listeners to be be constructed:
*************************************************/

createEventListeners = function() {
  let ConstructEl, blue, green, yellow, red;
  ConstructEl = function (evt, elem, colour, useCapturing) {
    modules.ConstructEventListener({
      event: evt,
      element: elem,
      func: function() { manageKeyPress(elem, colour); },
      useCapture: useCapturing
    });
  };
  green = ConstructEl('click', elemGreen, 'green', 'false');
  yellow = ConstructEl('click', elemYellow, 'yellow', 'false');
  blue = ConstructEl('click', elemBlue, 'blue', 'false');
  red = ConstructEl('click', elemRed, 'red', 'false');
};