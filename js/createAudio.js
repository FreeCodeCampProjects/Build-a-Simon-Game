/* ( X ) Dynamically create, populate and append audio elements:
***************************************************************/

createAudio = (function() {
  let audio, audios, audioElement, ConstructAudioHelper, dropboxUrl, sourceMp3, sourceOgg;
  dropboxUrl = 'https://dl.dropboxusercontent.com/u/7797721/FreeCodeCamp/Simon/soundFiles/';
  
  audios = {
    Construct: {
      audioElement: function(o) {
        audio = document.createElement('audio');
        audio.id = o.id;
        document.body.appendChild(audio);
        audios.Construct.sourceElement.mp3(o);
        audios.Construct.sourceElement.ogg(o);
      },
      sourceElement: {
        mp3: function(o) {
          sourceMp3 = document.createElement('source');
          sourceMp3.src = o.source.mp3.src;
          sourceMp3.type = o.source.mp3.type;
        },
        ogg: function(o) {
          sourceOgg = document.createElement('source');
          sourceOgg.src = o.source.ogg.src;
          sourceOgg.type = o.source.ogg.type;
          audios.Construct.addSources(o);
        }
      },
      addSources: function(o) {
        audioElement = document.getElementById(o.id);
        audioElement.appendChild(sourceMp3);
        audioElement.appendChild(sourceOgg);
        audioElement.appendChild(document.createTextNode(o.notSupported));
      }
    }
  };

  /* ( X ) Pass objects to audio element constructors (with types & sources):
  ***************************************************************************/

  ConstructAudioHelper = function ConstructAudioHelper(element, url) {
    audios.Construct.audioElement({
      id: element,
      source: {
        mp3: {
          src: url + '.mp3',
          type: 'audio/mpeg'
        },
        ogg: {
          src: url + '.ogg',
          type: 'audio/ogg'
        }
      },
      notSupported: 'Your browser does not support the audio element'
    });
  };

  /* ( X ) Call a helper for constructing audio elements for key sounds:
  *************************************************************************/
   
  ConstructAudioHelper('sound-green', dropboxUrl + '0');
  ConstructAudioHelper('sound-yellow', dropboxUrl + '1');
  ConstructAudioHelper('sound-blue', dropboxUrl + '2');
  ConstructAudioHelper('sound-red', dropboxUrl + '3');
  ConstructAudioHelper('sound-gameover', dropboxUrl + 'gameover');
});