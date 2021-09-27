// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Global variables ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let possibleWords = [
    "xylophone",
    "pachyderme",
    "tetraplegique",
    "printemps",
    "coit",
    "jubilation",
    "algorithme",
    "chimpanze",
    "gang",
    "tyran"
]

let remainingTry = 7;
let randomWord = randomPick();
let hiddenWord = hiddenPick();
let splittedWord = randomWord.split("");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function randomPick() {
  let randomWord =  possibleWords[Math.floor(Math.random() * possibleWords.length)]
  return randomWord;
}

function hiddenPick() {
  let hiddenWord = [];
  
  for (let n = 0; n < randomWord.length; n++) {
    hiddenWord.push("_");
  }
  return hiddenWord;
}

function interface () {
  let command = prompt("Une petite partie de Pendu? \nVeuillez choisir votre destination: tapez j si voulez jouer, r si vous souhaitez consulter les règles, et q si vous désirez quitter le jeu")
    
  if (command === "j") {
      alert("Très bien, commençons à jouer");
      return hangman();
  } 
    else if (command === "r") {
      alert("Voici les règles du jeu: \nVous devez choisir une lettre à chaque tour. \nSi vous vous trompez 7 fois: game over! \nSi vous trouvez le mot avant cela: vous gagnez!");
      return interface();
  } 
    else if (command === "q") {
      alert("Au revoir!");
  } 
    else {
      alert("Votre saisie est invalide! Veuillez recommencer");
      return interface();
  }
} 

function hangman() {
  let letter = prompt(`${remainingTry} essais restants. \nChoisissez une lettre. \n ${hiddenWord.join(" ")}`);
  
  if (remainingTry < 1) {
    alert(`Tu as epuisé tous tes essais... GAME OVER\nLe mot caché était ${randomWord}`);
    return interface();
  }
  else if (hiddenWord.indexOf("_") === -1) {
    alert("Bingo! " + randomWord + " était bien le mot caché! Tu as gagné!");
    return interface();
  }
  else {
    if (letter.length !== 1) {
        alert("Votre saisie est invalide! Une vie en moins!");
        remainingTry --;
        return hangman();
    } 
    else if (letter.length === 1 && remainingTry >= 1 && hiddenWord.indexOf("_") !== -1) {
        alert("Voyons si il y a un " + letter +" dans notre mot...")
        
        for(let n = 0; n < splittedWord.length ; n++) {
            if (letter === splittedWord[n]) {
                alert("Bien joué!");
                hiddenWord.splice(n, 1, letter);
                return hangman();
            }   
            else {
                alert("Il n'y a pas de " + letter + " dans ce mot, désolé...");
                remainingTry--;
                return hangman();
            }
        }
    }
  }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Start Hangman ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

interface();