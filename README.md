# 04-Coding-Quiz-Challenge
Week 4 Homework - Create a Coding Quiz Challenge using JavaScript

### Pseudocode
Game Object
50 total seconds on timer

1. We need a place (object) to store those questions, answer options, answer
1a. We need a variable to hold score

2. Start Method (function)
Initializes game
Brings up first question, answer options
starts a timer

3. write a function to display/render question and answers

4. function for a timer to start timer

5. select an answer (click an answer button)
on click event listener
conditional
if answer is correct
move to next question
add 20 points to score
else if answer is incorrect 
subtract time -5 seconds
move to next question

6. The game can stop if
if the user has answered all the questions
OR
if the timer runs out
THEN I can save my initials and score
on submit, submit score function

function to submit score

onClick
onSubmit
setInterval on timer
there's another method that goes with timers :)

10.17 notes-going to but the timer in the scripts.js

## ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# 04 Web APIs: Code Quiz

## Your Task

As you proceed in your journey to becoming a full-stack web developer, it’s likely that you’ll be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges. 

To help you become familiar with these tests and give you a chance to apply the skills from this module, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. This week’s coursework will teach you all the skills you need to succeed in this assignment.


## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```


## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

class work 10.15 JS
this is the code for storing the data 
this should be in the other .JS

let privateData = () or [1,2,12,145];
const storage = document.getElementById("storageDiv");
const div = document.getElementById("myDiv");
div.textContent = privateData;
storage.textContent = localStorage.getItem("privateData")

Function handleUpdateClick(){
    localStorage.setItem("privateData", JSON.stringify(privateData))
    privateData = "object name example my name jeff"
    div.textContent = privateData;
}

$ is the JQuery*/

const targetDiv = $('#empty-div') 
targetDiv.text('Hello friends') //this has an argument/assignment

or examlpe can add HTML using JQ

target.div.html('<p>Hello Frineds!</p>')

console.log($targetDiv.text()) //this has no argument
look at the href - https://api.jquery.com/

create an element in JQuery
using the angle < > create the element no <> pull the text

const $newDiv = $('<div>')
$newDiv.text('I am a new div')
$targetDiv.append($newDiv)*/