var projectName = "cakebook";
var versionNumber = '0.0.1';
var currentDate = new Date();
//Create Date object. More about objects and
//Date objects in chapter 5. This object will
//be used to builf our date.

//currentTime will look like '2015-11-24 at 12:30:30'
var currentTime = currentDate.getFullYear() + '-' + //Set year
									(currentDate.getMonth() + 1)+ '-' +	//Set month
									currentDate.getDate() + ' at ' + //Set day of the month
									currentDate.getHours() + ':' + //Set hours
									currentDate.getMinutes() + ':' + //Set minutes
									currentDate.getSeconds();	//Set seconds

var cbValues = {
	projectName: projectName,
	versionNumber: versionNumber,
	currentTime: currentTime
};

//Get the user's name.
var userName = prompt("Hello, what's your name?");
//Get the user's phone number.
var phoneNumber = prompt("Hello " + userName + ", What is your phone number?");
//Phone number Regex pattern
var phoneNumberPattern = /1?-?\(?\d{3}[\-\)]\d{3}-\d{4}/;
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
document.body.innerHTML = output;

var images = document.querySelectorAll('div._1dwg');
