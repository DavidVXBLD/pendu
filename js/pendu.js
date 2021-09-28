// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Global variables ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let remainingTry = 7;
let randomWord = ""
let hiddenWord = [];
let splittedWord = "";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Choix aléatoire d'un mot à partir d'un tableau
function randomPick() {
  let possibleWords = ["xylophone", "pachyderme", "tetraplegique", "printemps", "coit", "jubilation", "algorithme", "chimpanze", "gang", "tyran"]
  let randomWord =  possibleWords[Math.floor(Math.random() * possibleWords.length)] 
  return randomWord;
}

// Transformation du mot aléatoire en underscore
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
  
  while(remainingTry >= 0 && hiddenWord.indexOf("_") !== -1) {
    let command = prompt("Une petite partie de Pendu? Veuillez choisir votre destination: \nTapez j si voulez jouer. \nTapez r si vous souhaitez consulter les règles. \nTapez q si vous désirez quitter le jeu.")
    // Si le joueur tape j, le jeu se lance
    if (command === "j") {
        alert("Très bien, commençons à jouer");
        hangman();
    }
    // Si le joueur tape r, affiche les règles et retourne au menu
    else if (command === "r") {
      alert("Voici les règles du jeu: \nVous devez choisir une lettre à chaque tour. \nSi vous vous trompez 7 fois: game over! \nSi vous trouvez le mot avant cela: vous gagnez!");
      interface();
    }
    // Si le joueur tape q, retour au menu 
    else if (command === "q") {
      alert("Fermez la page ou changez d'avis!");
    }
    // Si la saisie est invalide, retour au menu
    else {
      alert("Votre saisie est invalide! Veuillez recommencer");
      interface();
    }
  }
} 

// ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ FONCTION PRINCIPALE ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
function hangman() {
  while (remainingTry >= 0 ) {
    let hasFoundLetter = false;

    // Si la condition ci-dessous est validée, le jeu est fini et le joueur a gagné
    if (hiddenWord.indexOf("_") === -1) {
      alert("Bingo! " + randomWord + " était bien le mot caché! Tu as gagné!");
      interface();
    }
    // Si la condition ci-dessous est validée, le jeu est fini et le joueur a perdu
    else if (remainingTry < 1) {
      alert(`Tu as epuisé tous tes essais... GAME OVER\nLe mot caché était ${randomWord}`);
      interface();
    }
    // Demande au joueur de rentrer une lettre pour jouer (tout en affichant le mot caché en underscore)
    else {
      let letter = prompt(`${remainingTry} essais restants. \nChoisissez une lettre. \n ${hiddenWord.join(" ")}`);
    
    // Si le joueur saisie autre chose qu'une lettre, il perd un point et continue de jouer
      if (letter.length !== 1) {
        alert("Votre saisie est invalide! Une vie en moins!");
        remainingTry --; 
        return hangman();
      }
      // Si le joueur saisie une lettre et qu'elle est présente dans le mot: elle s'affiche à l'endroit correspondant  
      for(let n = 0; n < splittedWord.length ; n++) {
        if (letter === splittedWord[n]) {
          hiddenWord[n] = letter;
          hasFoundLetter = true;
        }   
      }
      // Si le joueur saisie une lettre et qu'elle n'est pas présente dans le mot: le joueur perd 1 essai
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