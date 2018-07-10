// var originalDate = new Date("April 19, 2018, 21:00:00").getTime();
var countDownDate = new Date("May 2, 2019 13:00:00").getTime();
var StartDistance = 32630400000;

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
	var now = new Date().getTime();
  // Find the distance between now an the count down date
    var distance = countDownDate - now;
    var elapsed = StartDistance - distance; 
    var Progress = (100 * elapsed) / (StartDistance); 
	
  // Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
// Time calculations for days, hours, minutes and seconds
	var elapsed_days = Math.floor(elapsed/ (1000 * 60 * 60 * 24));
	var elapsed_hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var elapsed_minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
	var elapsed_seconds = Math.floor((elapsed % (1000 * 60)) / 1000);


  // Display the results
	// to go bar
	document.getElementById("dynamic2").innerHTML = days + " days " + hours + " hours to go";
	//elapsed bar
	document.getElementById("dynamic").innerHTML = elapsed_days + " days down";
	
	//change settings of bar 1 (elapsed)
	$("#dynamic")
      .css("width", Progress + "%")
      .attr("aria-valuenow", Progress)
	
	//change settings of bar 2 (remaining)
	$("#dynamic2")
      .css("width", (100 - Progress) + "%")
      .attr("aria-valuenow", (100 - Progress))
	
	//show the actual countdown
	document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished do this 
  if (distance < 0) {
	  clearInterval(x);
	  document.getElementById("dynamic").innerHTML = "There's a great big beautiful tomorrow";
  }
}, 1000);