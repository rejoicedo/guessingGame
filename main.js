


let numUser = getCookie("username");
let starsAns = getCookie("stars");


let para = document.querySelector("#demo");
let guessAns = document.querySelector("#answer");
let wonGame = document.querySelector("#won");
let button = document.querySelector('button');
let level = 2;
let levelCounter = 1;

let starCounter = 0;

button.addEventListener('click', () => {
  let gameOne = prompt('Guess any number of your choice between 1 and ' + level + ' , ' + 'Any number at all');
  let randNum = ((Math.random() * levelCounter) + 1).toFixed(1);
  console.log(randNum);
  let num = (parseFloat(gameOne)).toFixed(1);
  let numTry = parseFloat(num);
  let guessFloat = parseFloat(randNum);
  
  let stillGreat = numTry >= level;
  let stillLess = numTry <= level && numTry >= 1;
  let notNum = isNaN(numTry);
  
  if (stillLess) {
    if(numTry != guessFloat) {
     let guessWon = 'Do Something ' + numUser;
      guessAns.textContent = guessWon;

    } else {
      level++;
      levelCounter++;
      wonGame.textContent = 'Congratulations, ' + numUser + ' You are now in level ' + levelCounter;
      setCookie("stars", starCounter++ , 30);
      console.log(starsAns);
    }
    
  } else if (stillGreat) {
    guessAns.textContent = 'Use the number between 1 and 2';
    
  } else if (notNum) {
    guessAns.textContent = 'Not a Number';
  }
   else {
    guessAns.textContent = 'Use the number greater than 1';
  }




})

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  if (numUser != "") {
    para.textContent = 'Welcome back ' + numUser + ' to the world guessing game';
  } else {
     numUser = prompt("Please enter your name:","");
     if (numUser != "" && numUser != null) {
       setCookie("username", numUser, 30);
       para.textContent = 'Welcome ' + numUser + ' to the world guessing game';
     }
  }
}



