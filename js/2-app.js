/* ( X ) "Elem" variables caching DOM elements:
*************************************************/

elemBtnPower = $('#power-btn')[0];
elemBtnRestart = $('#restart-btn')[0];
elemBtnStrict = $('#strict-btn')[0];
elemBtnShare = $('#share-btn')[0];
elemContainer = $('.container')[0];
elemOutputTurn = $('#output-turn')[0];
elemOutputScore = $('#score')[0];
elemOutputFeedback = $('#output-feedback')[0];

/* ( X ) "CONFIG" stores constant values:
*************************************************/

CONFIG = {
  SYSTEM_MSG: {
    WHOSE_TURN: {
      PLAYER: 'your turn',
      COMPUTER: 'computer\'s turn'
    },
    STATE: {
      GAME_OVER: 'game over',
      PRESS_START: '[press start button]',
      SUCCESS: 'well done!',
      ERROR: {
        TURN_ERROR_LOG: 'Error: Computer\'s turn — not player\'s. Retrying.'
      }
    },
    MODE: {
      STRICT: {
        ENABLED: 'Strict is enabled, so let us reshuffle the current sequence',
        DISABLED: 'Strict is disabled, so let us retry the current sequence in order'
      }
    },
    SHARE: 'SHARE function',
    VICTORY: 'you win!',
    SUCCESS: 'Success!',
    WELL_DONE: 'well done!',
    FAILURE: 'Failure.',
    TRY_AGAIN: 'try again!',
    CONGRATULATIONS: 'congratulations!',
    RESTARTING: 'restarting',
    HERE_WE_GO_AGAIN: 'here we go again',
    MISMATCHED: ' Player mismatched on key ',
    MATCHED_ALL: ' Player matched all '
  },
  STYLES: {
    COLS: {
      OUTPUT: '#FFF',
      KEYS_BORDER: {
        DEFAULT: '#494356',
        SUCCESS_ANIMATION: ['cyan', 'lime', 'magenta']
      }
    }
  },
  KEY_COLOURS: ['green', 'yellow', 'blue', 'red'],
  SCORE_TO_WIN: 20
};

/* ( X ) "scores" is used for managing the score
    the player accrues, but also a counter for
    storing how many keys the player has
    successfully guessed:
*************************************************/

scores = { score: 0, counter: 0 };

/* ( X ) appState" stores the various states
    the app can be in: whose turn it is,
    whether the gameboard is powered on and
    whether audio and gameboard  elements were
    created:
*************************************************/

appState = {
    playerTurn: false,
    powerOn: false,
    strictMode: false,
    sequences: {
        computer: [],
        player: []
    },
    wasCreated: {
      audioElements: false,
      gameboardElements: false,
      eventListeners: false
    }
};