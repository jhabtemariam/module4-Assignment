
(function (window) {
var speakWord = "Good Bye";
 var byeSpeaker = {}; //creating a helloSpeaker object.

    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
            }
     window.byeSpeaker = byeSpeaker; //exposing..global scope
            
}) (window);

