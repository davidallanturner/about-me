'use strict';

function greeting() {
  let myName = prompt('Hi, may I have your name?');
  alert(
    `Nice to meet you ${myName}. I have a short quiz for you to help you learn a little more about me.`
  );
  return myName;
}

let myName = greeting();

let negativeAnsw = ['NO', 'N'];
let positiveAnsw = ['YES', 'Y'];

let quiz = {
  questions: [
    'Do I currently work in IT?',
    'Is my favorite movie "The Adventures of SharkBoy and LavaGirl?"',
    'Yes or No, I\'ve met Gary Sinise more than once?',
    'Did I serve in the Army?',
    'Do you think I\'ve ever been a pastor before?',
    'Guess my favorite number.',
    '"Don\'t use very sad, use morose. Language was invented for one reason, boys - to woo women - and, in that endeavor, laziness will not do. It also won\'t do in your essays." Give me a synonym for love in the phrase "I love you." (One word only!)',
  ],
  answers: [
    {
      response:
        'I do currently work in IT. I work at Kuehne-Nagel as a local Super User for our systems. I work in a medical system, and make sure that the world\'s supply of cartoid (heart) stents and catheters, catheters for aneurysms and clots, and other similar supplies.',
      answer: positiveAnsw,
    },
    {
      response:
        'No. I don\'t really have a favorite movie anymore. It was never that movie though.',
      answer: negativeAnsw,
    },
    {
      response:
        'I was with Dr. Don Shelton and doing a Santa Claus appearance for the Snowball Express foundation. Very nice guy. He not only remembered me a year later, but asked me a follow-up to something we discussed the previous time we met. He\'s an amazing guy.',
      answer: positiveAnsw,
    },
    {
      response:
        'I served 7 years at Fort Bliss, where I received numerous commendations, including several from the Joint Chiefs of Staff.',
      answer: positiveAnsw,
    },
    {
      response:
        'Fun fact: I have not, but I have been an Elder of my church for a long time now. When the pastor is out, I\'ve stepped up. If we didn\'t have a pastor, I filled that role. (Not that anyone asked, but I\'m Lutheran, and I do have schooling for the pastoral profession. If I take that profession farther, I\'ll be doing freelancing on the side.)',
      answer: negativeAnsw,
    },
    { response: 'My lucky number is 17!', answer: '17' },
    {
      response: 'Here\'s all the possible answers',
      answer: [
        'appreciate',
        'enjoy',
        'adore',
        'relish',
        'desire',
        'cherish',
        'worship',
      ],
    },
  ],
};

let score = 0;

function quizTest() {
  for (let i = 0; i < quiz.questions.length; i++) {
    let guestAnswer = prompt(quiz.questions[i]);

    if (
      (typeof guestAnswer !== 'number' &&
        guestAnswer.toUpperCase() === quiz.answers[i].answer[0]) ||
      guestAnswer.toUpperCase() === quiz.answers[i].answer[1]
    ) {
      score++;
      console.log('correct');
      alert('Correct! ' + quiz.answers[i].response);
      //console.log(quiz.answers[i].response)
    } else if (i === 5) {
      //console.log('hit')
      let numAttempts = 3;
      let numCorrect = false;
      // console.log(quiz.answers[i].answer);
      while (numAttempts > 0) {
        //console.log('guestAnswer: ' + guestAnswer);
        //let type = typeof +guestAnswer;
        //console.log('guestAnswer parsed: '+ +guestAnswer, 'typeof :' + type);
        if (isNaN(+guestAnswer)) {
          alert('Numbers only please.');
          guestAnswer = prompt(quiz.questions[i]);
        } else if (guestAnswer === quiz.answers[i].answer) {
          score++;
          //console.log('score added', score);
          numCorrect = true;
          break;
        } else if (+guestAnswer < quiz.answers[i].answer) {
          alert('That\'s a little low. Try again please');
          console.log('current guestAnswer:', guestAnswer);
          guestAnswer = prompt(quiz.questions[i]);

          //console.log('bang', numAttempts)
        } else if (+guestAnswer > quiz.answers[i].answer) {
          alert('That\'s a little high. Try again please');
          guestAnswer = prompt(quiz.questions[i]);

          //console.log('wham', numAttempts)
        }
        numAttempts--;
        //console.log('running now.')
      }
      if (numCorrect === false) {
        alert('Sorry, that\'s incorrect. ' + quiz.answers[i].response);
      } else if (numCorrect === true) {
        alert('Correct. ' + quiz.answers[i].response);
      }

    }else if(i === 6){
      
      for(let x=0; x<=6; x++)){
        console.log('question 7 guestAnswer: ' + guestAnswer);
        console.log('length of answer array: ' + quiz.answers[i].answer.length);
        for(let m=0;m<quiz.answers[i].answer.length; m++){
          if(guestAnswer === quiz.answers[i].answer[m]){
            score++;
            alert('Correct!');
            break;
          }else if(m<6){
            alert('Sorry, that\'s not quite correct. Try again.');
            guestAnswer = prompt(quiz.questions[i]);
          }
          attempts++;
        }

      }
      alert('All posible answers were: ' + JSON.stringify(quiz.answers[i].answer));
    } else {
      //console.log('incorrect')
      //console.log('Sorry, that\'s incorrect. ', quiz.answers[i].response)
      alert('Sorry, that\'s incorrect. ' + quiz.answers[i].response);
    }
  }
}

quizTest();

function goodBye() {
  alert(
    `Thanks for taking the quiz ${myName}. Your score of ${score}/${quiz.questions.length} is not bad. Here's a portion of my technical expertise.`
  );
}

goodBye();
