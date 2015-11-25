var userName = prompt("Hello, what's your name?");
document.body.innerHTML = "<h1>Hello, " + userName + "!</h1>" +
													'<p>' + cbValues.projectName + ' ' + cbValues.versionNumber +
													' viewed on: ' + cbValues.currentTime + '</p>';
