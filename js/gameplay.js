/* ( X ) A number of self-explanatory
    methods used throughout the main
    portion of the app / when the game is
    in play:
*******************************************/

gameScreen = {
    init: function() {
        if (!appState.playerTurn) {
            computerTurn();
        } else {
            appState.playerTurn = false;
            gameScreen.init();
            console.log(CONFIG.SYSTEM_MSG.STATE.STATE.ERROR.TURN_ERROR_LOG);
        }
    },
    whoseTurn: {
        messageOutput: function() {
            let msg = !appState.playerTurn ? CONFIG.SYSTEM_MSG.WHOSE_TURN.COMPUTER : CONFIG.SYSTEM_MSG.WHOSE_TURN.PLAYER;
            $(elemOutputTurn).html(msg);
        },
        functionCall: function() {
            !appState.playerTurn ? computerTurn() : playerTurn();
        },
        changeTurn: function() {
            appState.playerTurn = !appState.playerTurn;
            scores.counter = 0;
        }
    },
    scoreOutput: function() {
        $(elemOutputScore).html(scores.score + ' / ' + CONFIG.SCORE_TO_WIN);
    },
    reset: function() {
        scores.counter = 0;
        scores.score = 0;
        appState.sequences.computer = [];
        appState.sequences.player = [];
        appState.playerTurn = false;
        modules.addAndThenRemoveClass({ element: '.container', class: 'animated bounceInUp', timeout: 1000 });
        setTimeout(function() { gameScreen.init(); }, 1000);
        gameScreen.outputFeedback(CONFIG.SYSTEM_MSG.RESTARTING, '#00FF00')
    },
    tryStrict: function() {

    },
    outputFeedback: function(str, colour) {
        $(elemOutputFeedback).css('color', colour);
        $(elemOutputFeedback).html(str);
        modules.addAndThenRemoveClass({
            element: elemOutputFeedback,
            class: 'animated flipInX',
            timeout: 500
        });
        setTimeout(function() {
            modules.addAndThenRemoveClass({
                element: elemOutputFeedback,
                class: 'animated flipOutX',
                timeout: 700
            });
            setTimeout(function() {
                $(elemOutputFeedback).html('<br>');
            }, 700);    
        }, 800);
    },
    victory: function() {
        alert(CONFIG.SYSTEM_MSG.VICTORY.charAt(0).toUpperCase() + CONFIG.SYSTEM_MSG.VICTORY.substr(1, CONFIG.SYSTEM_MSG.VICTORY.length));
        $(elemOutputTurn).html(CONFIG.SYSTEM_MSG.VICTORY);
        $(elemOutputFeedback).html(CONFIG.SYSTEM_MSG.CONGRATULATIONS);
        setTimeout(function() { gameScreen.outputFeedback('5', 'red'); }, 2000);
        setTimeout(function() { gameScreen.outputFeedback('4', 'cyan'); }, 4000);
        setTimeout(function() { gameScreen.outputFeedback('3', 'yellow'); }, 6000);
        setTimeout(function() { gameScreen.outputFeedback('2', 'white'); }, 8000);
        setTimeout(function() { gameScreen.outputFeedback('1', 'magenta'); }, 10000);
        setTimeout(function() { gameScreen.outputFeedback(CONFIG.SYSTEM_MSG.HERE_WE_GO_AGAIN, 'magenta'); }, 12000);
        modules.addAndThenRemoveClass({ element: '.container', class: 'animated rubberBand', timeout: 1000 });
        setTimeout(function() {
            elemBtnRestart.click();
        }, 14000);
    }
};

/* ( X ) The actions to be taken when it's
    the computer's turn:
*******************************************/

computerTurn = function computerTurn() {
    let generatedKey;
    gameScreen.whoseTurn.messageOutput();
    generatedKey = $('#' + modules.generateRandomKey())[0];
    appState.sequences.computer.push(generatedKey);
    playSequence();
    modules.frontPanel.create();
};

/* ( X ) Function for computer to play the
    sequence of keys/notes:
*******************************************/

playSequence = function playSequence() {
    sequenceIndex = 0;
    let sequencePlayer = setInterval(function() {
        if (sequenceIndex < appState.sequences.computer.length) {
            appState.sequences.computer[sequenceIndex].click();
            scores.counter++;
            sequenceIndex++;
        } else {
            clearInterval(sequencePlayer);
            gameScreen.whoseTurn.changeTurn();
            gameScreen.whoseTurn.messageOutput();
            modules.frontPanel.remove();
        }   
    }, 700);
};