
(function (window) {
var speakWord = "Hello";
 var helloSpeaker = {}; //creating a helloSpeaker object.

    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
            }
     window.helloSpeaker = helloSpeaker; //exposing..global scope
            
}) (window);

