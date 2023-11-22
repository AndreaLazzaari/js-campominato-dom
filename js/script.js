// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione:
// nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
// - abbiamo calpestato una bomba
// - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di 
// numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// creare una funzione che generi 16 numeri casuali tutti diversi
// i numeri generati vanno all'interno di un array
// i numeri dentro all'array corrispondono alla rispettiva cella












let mainContainerElement = document.querySelector('div.main-container')
let buttonElement = document.querySelector ('button');



buttonElement.addEventListener('click', function(){
    mainContainerElement.innerHTML = '';

  for (let i = 1; i <= 100; i++) {


    let quadrato = creazioneQuadrato();
    const contenutoQuadrato = i;
    quadrato.innerHTML += `<span> ${contenutoQuadrato} </span`;
  
    mainContainerElement.appendChild(quadrato);
  

    quadrato.addEventListener ('click', function(){
      this.classList.toggle('cliccato')
      console.log(contenutoQuadrato)
    })
  }

})

let numeri = creazioneNumeriRandom()
console.log(numeri)




// FUNZIONI

/**funzione che vuole andare a creare un quadrato
 * elemento div a cui è stato assegnato una classe quadrato
 * @returns elemento singolo quadrato
 */
function creazioneQuadrato() {
  let elementoArticle = document.createElement('article');
  elementoArticle.classList.add('quadrato');
  
  return elementoArticle;
}


/**creato un array vuoto
 * generato un numero casuale da 1 a 16
 * condizione while per generare i 16 numeri tutti diversi
 * @returns array con all'interno 16 numeri generati randomici tutti diversi
 */
function creazioneNumeriRandom() {
  const numeriGenerati = [];
  let num = Math.round(Math.random(1, 100) * 16) + 1;
  while (numeriGenerati.includes(num)) {
    num = Math.round(Math.random(1, 100) * 16) + 1;
    numeriGenerati.push(num)
  }
  return numeriGenerati;
}