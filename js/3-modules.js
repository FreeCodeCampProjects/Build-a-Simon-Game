/* ( X ) Modules object holds a number of
    important functions/properties that will be
    called throughout the app:
***********************************************/

modules = {
    addAndThenRemoveClass: function(o) {
        $(o.element).addClass(o.class);
        setTimeout(function() { $(o.element).removeClass(o.class); }, o.timeout);
    },
    ConstructEventListener: function ConstructEventListener(o) {
      if (window.addEventListener) {
          o.element.addEventListener(o.event, o.func, o.useCapture);
      } else {
          o.element.attachEvent('on' + o.event, o.func, o.useCapture);
      }
    },
    cacheKeys: function cacheKeys() {
        elemGreen = $('#green')[0];
        elemRed = $('#red')[0];
        elemYellow = $('#yellow')[0];
        elemBlue = $('#blue')[0];
    },
    generateRandomIndex: function generateRandomIndex() {
      let randomIndex = Math.floor(Math.random() * 4);
      return randomIndex;
    },
    generateRandomKey: function generateRandomKey() {
      return CONFIG.KEY_COLOURS[modules.generateRandomIndex()];
    },
    shuffleArr: function(arr) {
        let currentIndex = arr.length, temp, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temp = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temp;
        }
        return arr;
    },
    frontPanel: {
      create: function() {
        let div = document.createElement('div');
        div.id = 'front-panel';
        div.className = 'front-panel';
        document.getElementById('container').appendChild(div);
      },
      remove: function() {
        $('#front-panel').remove();
      }
    }
};