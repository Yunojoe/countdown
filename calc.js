function getdate123() {
	var StartDistance = 32630400000;
    var input = document.getElementById("calc").value;
	var countDownDate = new Date("May 2, 2019 13:00:00").getTime();
    var newdate = new Date(input).getTime();
	var distance = countDownDate - newdate;
	var elapsed = StartDistance - distance; 
    
	var Progress = (100 * elapsed) / (StartDistance);
	alert(Progress);
}



//See Jill and Robert 11th Aug
//Christmas hols start 14th Dec 

