/* formatKeys changes the border colour of keys:
*************************************************/

formatKeys = function formatKeys(col) {
    elemGreen.style.border = '3px solid ' + col;
    elemYellow.style.border = '3px solid ' + col;
    elemBlue.style.border = '3px solid ' + col;
    elemRed.style.border = '3px solid ' + col;
};

/* wellDoneAnimation flashes congratulatory feedback when user completes sequence:
***********************************************************************************/

wellDoneAnimation = function wellDoneAnimation() {
    let colourIndex, wellDoneSequence
    wellDoneSequence = setInterval(function() {
        colourIndex = Math.floor(Math.random() * CONFIG.STYLES.COLS.KEYS_BORDER.SUCCESS_ANIMATION.length);
        formatKeys(CONFIG.STYLES.COLS.KEYS_BORDER.SUCCESS_ANIMATION[colourIndex]);
        elemOutputFeedback.style.color = CONFIG.STYLES.COLS.KEYS_BORDER.SUCCESS_ANIMATION[colourIndex];
    }, 50);
    setTimeout(function() {
        clearInterval(wellDoneSequence);
        formatKeys(CONFIG.STYLES.COLS.KEYS_BORDER.DEFAULT);
    }, 700);
};