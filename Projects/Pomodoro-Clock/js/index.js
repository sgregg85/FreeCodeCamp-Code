$(document).ready(function() {
  var timerStatus = 0;
  var session = 25;
  var breakTime = 5;
  $("#session-time").html(session);
  $("#break-time").html(breakTime);

  $("#session-down").on("click", function() {
    session -= 1; //decrement session value
    checkForZero(); //make sure we are not going below zero
    reset(); // reset clock if it is paused and time is changed
    $("#session-time").html(session); //change the session time on screen
  });

  $("#session-up").on("click", function() {
    session += 1; //increment session value
    $("#session-time").html(session); //update session value on screen
    reset(); //reset clock if it is paused
  });

  $("#break-up").on("click", function() {
    breakTime += 1; //increment breakTime value
    $("#break-time").html(breakTime); //update value on screen
    reset(); //reset clock if it is paused
  });

  $("#break-down").on("click", function() {
    breakTime -= 1; //decrement breakTime value
    checkForZero(); //
    $("#break-time").html(breakTime);
    reset(); //make sure we are not going below zero
  });

  $('.timer-btn').on("click", function () {
    if (timerStatus == 0) {
      startTimer();
      $(".timer-btn").text("PAUSE");
      timerStatus = 1; //timer is running
    } else if (timerStatus == 1) {
      $('#timer').timer("pause");
      $('#progBarTimer').timer("pause");
      timerStatus = 2; //timer is paused
      $(".timer-btn").text("RESUME");
    } else if (timerStatus == 2) {
      $('#timer').timer("resume");
      $('#progBarTimer').timer("resume");
      timerStatus = 1; //timer is running
      $(".timer-btn").text("Pause");
    } else { //any other value not specified
      alert("An error has occurred");
      reset();
    }
  });

  function checkForZero() { //show error if user attempts to bring time below zero
    if (session === 0) { 
      session += 1;
      alert("The work time cannot be below 1 minute");
    }
    if (breakTime === 0) {
      breakTime += 1;
      alert("The break time cannot be below 1 minute");
    }
  }

  function startTimer() {
    $('#timer').timer({ //start the displayed timer
      countdown: true,
      duration: String(session) + "m",
      format: "%m:%S",
      callback: function() { //once completed play sound and call the break timer
        $('#timer').timer("remove");
        breakTimer();
        $.playSound('https://tristanagregg.net/codepen/pomodoro/sound');
        //alert("Take a break"); // shows alert to let user know time is up
                                 // decided to use an audible alert instead 
      },
    });
    updateProgress(session); //start progress bar
    timerStatus = 1; //set status to running
    $("#timer").css("color", "red");
    $("#identifier").text("Work");
    $("#identifier").css("color","red");
  }

  function breakTimer() {
    $('#timer').timer({
      countdown: true,
      duration: String(breakTime) + "m",
      format: "%m:%S",
      callback: function() {
        $('#timer').timer("remove");
        startTimer();
        $.playSound('https://tristanagregg.net/codepen/pomodoro/sound');
        //alert("Back to work"); // shows alert to let user know time is up
                                 // decided to use an audible alert instead
      }
    });
    updateProgress(breakTime);
    timerStatus = 1;
    $("#timer").css("color", "blue");
    $("#identifier").text("Break");
    $("#identifier").css("color","blue");
  }

  function updateProgress(time) {
    $('#progBarTimer').timer({ //timer that updates progress bar
      duration: '2s', //how often should the progress bar be updated
      callback: function() {
        var percent;
        var width;
        var elapsed = $("#timer").data('seconds'); //how much time is left
        percent = 100 - (Math.round((elapsed / (time * 60)) * 100)); //calculate percentage
        width = "width:" + percent + "%"; //create string which includes percentage value
        $("#progressbar").attr("style", width); //change the value of the progress bar
      },
      repeat: true //repeatedly calls the callback function
    });
    $("#progBarTimer").hide(); //hide the progress bar timer
  }

  function reset() {
    if (timerStatus == 2) { // checks that the timer is paused before resetting
      $("#timer").timer("remove"); //clear timer
      $("#progBarTimer").timer("remove"); //clear progress bar timer
      $(".timer-btn").text("START"); //change text of button to say "START"
//      session = 25;
//      breakTime = 5;
//      $("#session-time").html(session);
//      $("#break-time").html(breakTime);
      timerStatus = 0; //set the timer status to not running (0) 
      $("#progressbar").attr("style", "width:0%"); // set progress bar to zero (0) 
      $("#timer").html(""); // erase the previous time
      $("#identifier").html(""); //clear the work/break identifier
    }
  }

});
