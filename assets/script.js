//Need to create varibles 
let currentQuestionIndex = 0;
let time = questions.length * 20;
let timerId;

let logScorcesEL = document.getElementById("logscores")
let timerEl = document.getElementById("timer")
let timeEL = document.getElementById("time")
let launchScreenEl = document.getElementById("launchscreen")
let startBtnEl = document.getElementById("start")
let questionsLstEl = document.getElementById("questionsLst")
let questionDescEl = document.getElementById("questionDesc")
let questionAnsLstEl = document.getElementById("questionAnsLst")
let startQzEL = document.getElementsByClassName("startquiz")
let hideEL = document.getElementsByClassName("hide")




//Timer used w3Schools
/*<!-- Display the countdown timer in an element -->
<p id="demo"></p>

<script>
// Update the count down every 1 second
var x = setInterval(function() {

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo" //Need to change the id
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>