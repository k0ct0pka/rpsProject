let score = JSON.parse(localStorage.getItem('score'))
      || {
        wins: 0,
        losses: 0,
        ties: 0
      };
      playerComputerPicks();
      resultP();
      scoreUpdate();                                                                                                                                                                                          
        function playGame(playerMove) {
          const computerMove = pickComputerMove();
          let result = '';
  
          if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
              result = 'You lose.';
            } else if (computerMove === 'paper') {
              result = 'You win.';
            } else if (computerMove === 'scissors') {
              result = 'Tie.';
            }
  
          } else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
              result = 'You win.';
            } else if (computerMove === 'paper') {
              result = 'Tie.';
            } else if (computerMove === 'scissors') {
              result = 'You lose.';
            }
            
          } else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
              result = 'Tie.';
            } else if (computerMove === 'paper') {
              result = 'You lose.';
            } else if (computerMove === 'scissors') {
              result = 'You win.';
            }
          }
          if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }
          playerComputerPicks(playerMove,computerMove);
          resultP(result);
          localStorage.setItem('score', JSON.stringify(score));
          scoreUpdate();
        }
        function playerComputerPicks(playerMove,computerMove){
          document.querySelector('.js-picks')
        .innerHTML=`You pick <img src="${playerMove}-emoji.png" alt=""> --- <img src="${computerMove}-emoji.png" alt=""> computer pick  `;
        if(playerMove,computerMove === undefined){
            document.querySelector('.js-picks').innerHTML= `waiting for your pick first (pick smth first)`}
        }
        function resultP(result){
          document.querySelector('.js-result')
          .innerHTML= `result:${result}`;
          if(result === undefined){
            document.querySelector('.js-result').innerHTML= `waiting for result (pick smth first)`
          }
        }
        function scoreUpdate(){
          document.querySelector('.js-score')
            .innerHTML= `wins:  ${score.wins}  losses:  ${score.losses}  ties:  ${score.ties}`;
        }
        function pickComputerMove() {
          const randomNumber = Math.random();
  
          let computerMove = '';
  
          if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
          } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
          } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
          }
          console.log(Math.random());
          return computerMove;
        }
let isAutoPlaying=false;
        let intervalId;
        function autoPlay(){
          
          
          if(!isAutoPlaying){
            document.querySelector('.auto-play').innerHTML='Stop Play';
            intervalId=setInterval(() =>{
              const playerMove=pickComputerMove();
              playGame(playerMove);
            },1000);
            isAutoPlaying=true;
          } else if(isAutoPlaying){
            document.querySelector('.auto-play').innerHTML='Auto Play';
            clearInterval(intervalId);
            isAutoPlaying=false;
          }
        }
document.body.addEventListener('keydown',(event)=>{
          if(event.key=='r'){
            playGame('rock');
          } else if(event.key=='s'){
            playGame('scissors');
          } else if(event.key=='p'){
            playGame('paper');
          }
        })
        document.body.addEventListener('keydown',(event)=>{
          if(event.key=='a'){
            autoPlay();
          } 
        })
