var projectName = "cakebook";
var versionNumber = '0.0.1';
var currentDate = new Date();
//Create Date object. More about objects and
//Date objects in chapter 5. This object will
//be used to builf our date.

//currentTime will look like '2015-11-24 at 12:30:30'
var currentTime = currentDate.getFullYear() + '-' + 		//Set year
									(currentDate.getMonth() + 1)+ '-' +	  //Set month
									currentDate.getDate() + ' at ' + 			//Set day of the month
									currentDate.getHours() + ':' + 				//Set hours
									currentDate.getMinutes() + ':' + 			//Set minutes
									currentDate.getSeconds();							//Set seconds
