
// hero cursor text effect :

// List of sentences
let contenet = [ "history", "OBD diagnosis", "specifications", "market value " ];

// Current sentence being processed
let part = 0;

// Character number of the current sentence being processed 
let partIndex = 0;

// Holds the handle returned from setInterval
let intervalValue;

// Element that holds the text
let element = document.querySelector("#text");

// Implements typing effect
function Type() { 
	let text =  contenet[part].substring(0, partIndex + 1);
	element.innerHTML = text;
	partIndex++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === contenet[part]) {
		clearInterval(intervalValue);
		setTimeout(function() {
			intervalValue = setInterval(Delete, 50);
		}, 1000);
	}
}




