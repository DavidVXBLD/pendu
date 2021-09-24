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

let score = {
    "player" : 0
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function interface () {
    let command = prompt("Veuillez choisir votre destination: tapez j si voulez jouer, r si vous souhaitez consulter les règles, et q si vous désirez quitter le jeu")
    
    if (command === "j") {
        alert("Très bien, commençons à jouer");
    } 
      else if (command === "r") {
        alert("Voici les règles du jeu: \n Vous devez choisir une lettre à chaque tour. \n Si vous vous trompez 7 fois: game over! \n Si vous trouvez le mot avant cela: vous gagnez!");
        return interface();
    } 
      else if (command === "q") {
        alert("Au revoir!")
    } 
      else {
        alert("Votre saisie est invalide! Veuillez recommencer");
        return interface();
    }
}

function randomWord() {
    let randomPick =  wordsArray[Math.floor(Math.random() * wordsArray.length)]
    
    let hiddenWord = "";
      
    for (i = 0; i < randomPick.length; i++) {
      hiddenWord = hiddenWord + " _";
    }
    return hiddenWord;
}