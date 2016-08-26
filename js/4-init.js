/* ( X ) The startSetup object holds
    functions/properties related to the
    game itself. For example: creating the
    boardgame, it's keys and the sounds it
    will make by way of audio elements when
    events are triggered.
*******************************************/

startSetup = {
  init: function() {
    startSetup.createAudio();
    startSetup.createGameboard();
    startSetup.createEventListeners();
    gameScreen.init();
  },
  createAudio: function() {
    if (!appState.wasCreated.audioElements) {
      createAudio();
      appState.wasCreated.audioElements = true;
    }
  },
  createGameboard: function() {
    if (!appState.wasCreated.gameboardElements) {
      createGameboard();
      appState.wasCreated.gameboardElements = true;
      modules.cacheKeys();
    } 
  },
  createEventListeners: function() {
    if (!appState.wasCreated.eventListeners) {
      createEventListeners();
      appState.wasCreated.eventListeners = true;
    }
  }
};

/* ( X ) The startScreen object holds
   functions/properties related to start
   screen. They're initialized in Step 1:
*******************************************/

startScreen = {
  init: function() {
    startScreen.hideContainer();
    startScreen.pressStartAnimation();
  },
  hideContainer: function() {
    $('.container').hide();
  },
  pressStartAnimation: function() {
    $(elemOutputFeedback).css({ opacity: 0 });
    $(elemOutputFeedback).css({ fontSize: 25 });
    $(elemOutputFeedback).animate({ opacity: 1, fontSize: '30px' }, 800);
    $(elemOutputFeedback).html(CONFIG.SYSTEM_MSG.STATE.PRESS_START);
    pressStartInterval = setInterval(function() {
      modules.addAndThenRemoveClass({ element: elemOutputFeedback, class: 'animated flash', timeout: 1000 });
    }, 2000);
  },
  clearPressStartAnimation: function() {
    clearInterval(pressStartInterval);
    $(elemOutputFeedback).html('<br>');
  }
};

/* ( X ) When the "strict" button is pressed, the
    app goes into "strict" mode:
*************************************************/

elemBtnStrict.onclick = function() {
  if (appState.powerOn) {
    appState.strictMode = !appState.strictMode;
    if (appState.strictMode) {
      appState.strictMode = true;
      console.log(CONFIG.SYSTEM_MSG.MODE.STRICT.ENABLED);
      $(elemBtnStrict).html('<i class="fa fa-toggle-on" aria-hidden="true"></i> strict');
    } else {
      appState.strictMode = false;
      console.log(CONFIG.SYSTEM_MSG.MODE.STRICT.DISABLED);
      $(elemBtnStrict).html('<i class="fa fa-toggle-off" aria-hidden="true"></i> strict');
    }
  }
};

/* ( X ) Set an event listener for share button:
*************************************************/

elemBtnShare.onclick = function() { alert(CONFIG.SYSTEM_MSG.SHARE); };

/* ( X ) Set an event listener for restart button:
*************************************************/

elemBtnRestart.onclick = function() {
  if (appState.powerOn) gameScreen.reset();
};

/* ( X ) Set an event listener for start button.
    If "power"" is off, then the start button
    turns the game on:
*************************************************/

elemBtnPower.onclick = function() {
  if (!appState.powerOn) {
    appState.powerOn = !appState.powerOn;
    startScreen.clearPressStartAnimation();
    $(elemBtnPower).html('<i class="fa fa-power-off" aria-hidden="true"></i> stop');
    startSetup.init();
    $('.container').fadeIn();
    modules.addAndThenRemoveClass({ element: '.container', class: 'animated bounceInUp', timeout: 1000 });
  } else {
    location.reload();
  }
};

/* ( X ) Start the app by initializing the start
    screen — a flashing [press start] line
    of text:
*************************************************/

startScreen.init();