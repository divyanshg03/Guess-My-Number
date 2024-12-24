'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent  = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('guess').value = 23;
console.log(document.querySelector('guess').value);
*/
let secretnumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function()
{
    let guess = Number(document.querySelector('.guess').value);


    if(!guess)
    {
        document.querySelector('.message').textContent = 'No Number!';   
    }
    else if(guess === secretnumber)
    {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score>highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
    }
    else if(guess > secretnumber)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            (document.querySelector('.score').textContent = score);
        }
      else
      {
          document.querySelector('.message').textContent = 'You Lost the Game!';
          document.querySelector('.score').textContent = 0;
      }
    }
    else if(guess < secretnumber)
    {
        if(score>1)
            {
                document.querySelector('.message').textContent = 'Too Low!';
                score--;
                (document.querySelector('.score').textContent = score);
            }
          else
          {
              document.querySelector('.message').textContent = 'You Lost the Game!';
              document.querySelector('.score').textContent = 0;
          }
    }
    else
    {
        document.querySelector('.message').textContent = 'Wrong Number!';
    }
});

document.querySelector('.again').addEventListener('click',function()
{
    score = 20;
    secretnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
});