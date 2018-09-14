//days to go
var DDay =  "2018-09-16";
function getTimeRemaining(day){
	var date = Date.parse(day) - Date.parse(new Date());
	var days = Math.floor(date/(1000*60*60*24));
	if(days<=0){
		document.getElementById("daysToGo").style.display = "none";		
	}
	return days;
}

var x = getTimeRemaining(DDay);
if(x==1)
	document.getElementById("daysToGo").innerHTML = x + " day to go";
else
	document.getElementById("daysToGo").innerHTML = x + " days to go";