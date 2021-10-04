'use strict'

let myName = prompt('Hi, may I have your name?')

alert(`Nice to meet you ${myName}. I have a short quiz for you to help you learn a little more about me.`)

let negativeAnsw = ['NO', 'N']
let positiveAnsw = ['YES', 'Y']


let quiz = {
  questions: [
  'Do I currently work in IT?'
  ,'Is my favorite movie "The Adventures of SharkBoy and LavaGirl?"'
  ,'Yes or No, I\'ve met Gary Sinise more than once?'
  ,'Did I serve in the Army?'
  ,'Do you think I\'ve ever been a pastor before?'
  ,'Guess my favorite number.'
  ],
  answers: [
    {response: 'I do currently work in IT. I work at Kuehne-Nagel as a local Super User for our systems. I work in a medical system, and make sure that the world\'s supply of cartoid (heart) stents and catheters, catheters for aneurysms and clots, and other similar supplies.'
    ,answer: positiveAnsw
    }
    ,  {response: 'No. I don\'t really have a favorite movie anymore. It was never that movie though.'
    ,answer: negativeAnsw
    }
    ,  {response: 'I was with Dr. Don Shelton and doing a Santa Claus appearance for the Snowball Express foundation. Very nice guy. He not only remembered me a year later, but asked me a follow-up to something we discussed the previous time we met. He\'s an amazing guy.'
    ,answer: positiveAnsw
    }
    ,  {response: 'I served 7 years at Fort Bliss, where I received numerous commendations, including several from the Joint Chiefs of Staff.'
    ,answer: positiveAnsw
    }
    ,   {response: 'Fun fact: Nope, but I have been an Elder of my church for a long time now. When the pastor is out, I\'ve stepped up. If we didn\'t have a pastor, I filled that role. (Not that anyone asked, but I\'m Lutheran, and I do have schooling for the pastoral profession. If I take that profession farther, I\'ll be doing freelancing on the side.)'
    ,answer: negativeAnsw
    }
    ,   {response: 'My lucky number is 17!'
    ,answer: 17
    }
  ]

}

let score = 0

for(let i=0; i<quiz.questions.length; i++){
 let guestAnswer = prompt(quiz.questions[i])

  if(guestAnswer.toUpperCase() === quiz.answers[i].answer[0] || guestAnswer.toUpperCase() === quiz.answers[i].answer[1] || (typeof quiz.answers[i].answer === number && guestAnswer === quiz.answers[i].answer[0])){
   score++
   //console.log('correct')
   alert('Correct! ' + quiz.answers[i].response)
   //console.log(quiz.answers[i].response)
  } else {
   //console.log('incorrect')
   //console.log('Sorry, that\'s incorrect. ', quiz.answers[i].response)
   alert('Sorry, that\'s incorrect. '+ quiz.answers[i].response)
  }
}


alert(`Thanks for taking the quiz ${myName}. Your score of ${score}/5 is not bad. Here's a portion of my technical expertise.`)