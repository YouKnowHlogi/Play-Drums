// Select the div by its id "set"
var setDiv = document.querySelector("#set");

// Select all the buttons within the div
var buttons = setDiv.querySelectorAll("button");

// Add click event listeners to the buttons
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var audioPath = button.getAttribute('data-audio');
        var audio = new Audio(audioPath);
        audio.play();
    });
});



// Define a function to play the audio
function playAudio(audioPath) {
    var audio = new Audio(audioPath);
    audio.play();
}

// Add event listener to the document for keydown events
document.addEventListener('keydown', function(event) {
    // Check if the pressed key corresponds to a button with a specific data-key attribute
    var key = event.key;
    var button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
        var audioPath = button.getAttribute('data-audio');
        playAudio(audioPath);
    }
});


