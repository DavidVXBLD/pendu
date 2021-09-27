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
let randomWord = ""
let hiddenWord = [];
let splittedWord = "";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Choix aléatoire d'un mot
function randomPick() {
  let randomWord =  possibleWords[Math.floor(Math.random() * possibleWords.length)] 
  return randomWord;
}

// Transformation du mot en underscore
function hiddenPick() {
  let hiddenWord = [];
  
  for (let n = 0; n < randomWord.length; n++) {
    hiddenWord.push("_");
  }
  return hiddenWord;
}

// Initiation du programme: commandes et jeu
function interface () {
  remainingTry = 7;
  randomWord = randomPick();
  hiddenWord = hiddenPick();
  splittedWord = randomWord.split("");
  while(remainingTry >= 0 && hiddenWord.indexOf("_") !== -1 && true) {
    let command = prompt("Une petite partie de Pendu? Veuillez choisir votre destination: \nTapez j si voulez jouer. \nTapez r si vous souhaitez consulter les règles. \nTapez q si vous désirez quitter le jeu.") 
    if (command === "j") {
        alert("Très bien, commençons à jouer");
        
        hangman();
    } 
    else if (command === "r") {
      alert("Voici les règles du jeu: \nVous devez choisir une lettre à chaque tour. \nSi vous vous trompez 7 fois: game over! \nSi vous trouvez le mot avant cela: vous gagnez!");
      interface();
    } 
    else if (command === "q") {
      alert("Fermez la page ou changez d'avis!");
    } 
    else {
      alert("Votre saisie est invalide! Veuillez recommencer");
      interface();
    }
  }
} 

// Fonction principale
function hangman() {
  while (remainingTry >= 0 ) {
    let hasFoundLetter = false;
 
    if (hiddenWord.indexOf("_") === -1) {
      alert("Bingo! " + randomWord + " était bien le mot caché! Tu as gagné!");
      interface();
    }
    else if (remainingTry < 1) {
      alert(`Tu as epuisé tous tes essais... GAME OVER\nLe mot caché était ${randomWord}`);
      interface();
    }
    else {
      let letter = prompt(`${remainingTry} essais restants. \nChoisissez une lettre. \n ${hiddenWord.join(" ")}`);
      if (letter.length !== 1) {
        alert("Votre saisie est invalide! Une vie en moins!");
        remainingTry --; 
        return hangman();
      }  
      for(let n = 0; n < splittedWord.length ; n++) {
        if (letter === splittedWord[n]) {
          hiddenWord[n] = letter;
          hasFoundLetter = true;
        }   
      } 
      if (!hasFoundLetter) {
        alert("Il n'y a pas de " + letter + " dans ce mot, désolé...");
        remainingTry--; 
      } 
      else {
        alert("Bien joué !");
      }
    }
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Start Hangman ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

interface();