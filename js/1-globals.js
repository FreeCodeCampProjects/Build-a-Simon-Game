/* ( X ) Declare variables to be used throughout:
*************************************************/

var appState,
    CONFIG,
    elemBtnPower,
    elemBtnRestart,
    elemBtnStrict,
    elemBtnShare,
    elemContainer,
    elemOutputFeedback,
    elemOutputScore,
    elemOutputTurn,
    elemGreen,
    elemRed,
    elemYellow,
    elemBlue,
    elemOutputCounter,
    elemOutputComputerSequence,
    elemOutputPlayerSequence,
    KEY_COLOURS,
    modules,
    scores;

/* ( X ) Declare additional variables to be used
    throughout:
*************************************************/

var computerTurn,
    createAudio,
    createEventListeners,
    createGameboard,
    gameScreen,
    initAudio,
    logKeyPressSuccess, 
    logKeyPressFailure, 
    logKeyPress,
    manageKeyPress,
    playSequence,
    pressStartInterval,
    startScreen,
    startSetup;  