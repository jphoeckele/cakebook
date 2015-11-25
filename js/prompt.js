//Get the user's name.
var userName = prompt("Hello, what's your name?");
//If no name is given, prompt again.
if (!userName) {
	userName = prompt("You didn't enter a name. Please try again.");
}
//Get the user's phone number.
var phoneNumber = prompt("Hello " + userName + ", What is your phone number?");
//Phone number Regex pattern
var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
//Variable to store output
var output = "<h1>Hello, " + userName + "!</h1>";
//Check's is phone number is valid
if (phoneNumberPattern.test(phoneNumber)) {
	//Yes number is valid
	output = output + '<p>' + cbValues.projectName + " " + cbValues.versionNumber + ' viewed on: ' + cbValues.currentTime + '</p>';
} else {
	//No number is not valid
	output = output + "<h2>I'm sorry but that phone number is not valid: " + phoneNumber;
}
//Insert the output into the web page.
//document.body.innerHTML = output;
