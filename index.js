

var maxTime = 59400;
var timer = 0;

var running = false;
let control;

var hundredths = "00";
var seconds = "00";
var minuts = "00";

function start () {
    if(!running){
        running = true;
        control = setInterval(cronometer,10);
        var hundrethsText = document.getElementById("hundrethsText")
        var secondsText = document.getElementById("secondsText")
        var minutsText = document.getElementById("minutsText")
    
        hundrethsText.style.color="black"
        secondsText.style.color="black"
        minutsText.style.color="black"
    }
    else{
      alert("Timer already running")
    }

}
function stop () {
	clearInterval(control);
    var hundrethsText = document.getElementById("hundrethsText")
    var secondsText = document.getElementById("secondsText")
    var minutsText = document.getElementById("minutsText")


    hundrethsText.innerText = ":"+hundredths;
    secondsText.innerText = ":"+seconds;
    minutsText.innerText = minuts;
    if(timer>maxTime){
        hundrethsText.style.color="red"
        secondsText.style.color="red"
        minutsText.style.color="red"
    }
    else{
        		

        hundrethsText.style.color="green"
        secondsText.style.color="green"
        minutsText.style.color="green"
    }

    var recordText = minuts+":"+seconds+":"+hundredths+"\n";
     const blob = new Blob([recordText], { type: 'text/plain' });
     const link = document.createElement('a');
     link.href = window.URL.createObjectURL(blob);
     link.download = 'timer_record.txt';
     link.click();

}
function restart () {
	clearInterval(control);
	hundredths = 0;
	seconds = 0;
	minuts = 0;
	document.getElementById("hundrethsText").innerHTML = ":00";
	document.getElementById("secondsText").innerHTML = ":00";
	document.getElementById("minutsText").innerHTML = "00";
    start()
}
function cronometer () {

    var hundrethsText = document.getElementById("hundrethsText")
    var secondsText = document.getElementById("secondsText")
    var minutsText = document.getElementById("minutsText")
    var progressBar = document.getElementById("progressBar")
    progressBar.value = timer;
	if (hundredths < 99) {
		hundredths++;
        timer++;

		if (hundredths < 10) {
             hundredths = "0"+hundredths 
            }
	}
	if (hundredths >= 99) {
		hundredths = -1;
	}
	if (hundredths == 0) {
		seconds ++;
		if (seconds < 10) { seconds = "0"+seconds }
	}
	if (seconds == 59) {
		seconds = -1;
	}
	if ( (hundredths == 0)&&(seconds == 0) ) {
		minuts++;
		if (minuts < 10) { minuts = "0"+minuts }
	}
	if (minuts == 59) {
        hundrethsText.innerText = ":"+hundredths;
        hundrethsText.style.color=red
        secondsText.innerText = ":"+seconds;
        hundrethsText.style.color=red
        minutsText.innerText = minuts;
        hundrethsText.style.color=red
	}
}
