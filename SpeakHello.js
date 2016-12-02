(function (window) {
  var helloSpeaker = {};//creating an object called helloSpeaker
  var speakWord = "Hello";
  
  helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + helloSpeaker.name);
    }
  window.helloSpeaker = helloSpeaker; //exposing helloSpeaker to the global scope
}) (window);

