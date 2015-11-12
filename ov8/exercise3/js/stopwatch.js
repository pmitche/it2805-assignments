var	active,
	startTime,
	interval,
	temptime = 0

function toggleButton(){
	if (!active) {
		startTime = new Date()
		active = 1
		interval = window.setInterval(add, 1)
	} else {
		active = 0
		window.clearInterval(interval)
		temptime += (Date.now() - startTime)
	}
}

function clearButton(){
	temptime = 0
	active = 0
	startTime = new Date()
	window.clearInterval(interval)
	document.getElementById("display-area").innerHTML = "00:00:00.000"
}

function add() {
	var time = new Date().getTime() - startTime.getTime()
	document.getElementById("display-area").value = format(time + temptime)
}

function format(time) {
	var hours, minutes, seconds, milliseconds = 0;
	hours = Math.floor(time / (60 * 60 * 1000));
	time = time % (60 * 60 * 1000);
	minutes = Math.floor(time / (60 * 1000));
	time = time % (60 * 1000);
	seconds = Math.floor(time / 1000);
	milliseconds = time % 1000;
	return beautify(hours, minutes, seconds, milliseconds);

}

function beautify(hours, minutes, seconds, milliseconds){
	var tmpHours = "000" + hours
	var tmpMinutes = "000" + minutes
	var tmpSeconds = "000" + seconds
	var tmpMilliseconds = "000" + milliseconds
	return tmpHours.substr(tmpHours.length - 2) + ":" +
		   tmpMinutes.substr(tmpMinutes.length - 2) + ":" +
		   tmpSeconds.substr(tmpSeconds.length - 2) + "." +
		   tmpMilliseconds.substr(tmpMilliseconds.length - 3);
}

document.getElementById("toggle-button").addEventListener('click', function(event) {
	toggleButton()
})

document.getElementById("reset-button").addEventListener('click', function(event){
	clearButton()
})