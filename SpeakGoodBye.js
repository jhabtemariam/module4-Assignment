
(function (window) {
var speakWord = "Good Bye";
  var byeSpeaker = {}; //creating an object called byeSpeaker
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + byeSpeaker.name);
      }

window.byeSpeaker = byeSpeaker;
    }) (window);

