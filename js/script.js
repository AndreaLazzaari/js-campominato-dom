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



let mainContainerElement = document.querySelector('div.main-container')
let buttonElement = document.querySelector ('button');

let numeri = creazioneNumeriRandom()
console.log(numeri)

buttonElement.addEventListener('click', function(){
    mainContainerElement.innerHTML = '';

  for (let i = 1; i <= 100; i++) {


    let quadrato = creazioneQuadrato();
    let contenutoQuadrato = i;
    quadrato.innerHTML += `<span> ${contenutoQuadrato} </span`;
  
    mainContainerElement.appendChild(quadrato);

  
    
    quadrato.addEventListener ('click', function(){
      
      
    // if che verifica se ho cliccato su una cella che è presente nell'array
    // se la cella cliccata ha lo stesso numero di un numero presente nell'array la cella si colora di rosso
    // altrimenti la cella si colora di blu
    
    if (numeri.includes(contenutoQuadrato)) {
      this.classList.add('click-sbagliato')
      console.log(contenutoQuadrato)
    } else {
      this.classList.add('click-giusto')
      console.log(contenutoQuadrato)
    }

      
    })
  }
  
  // finchè il giocatore non ha cliccato su tutte le celle giuste allora la partita non finisce
  // quando la partita finisce mettere nel dom un messaggio che dice il punteggio dell'utente
    // si può scomporrere



})


// console.log(creazioneNumeriRandom())




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


/**creato un array 
 * generato un numero casuale da 1 a 100
 * condizione while per generare 16 numeri tutti diversi
 * se numeri generati non sono già presenti nell'array lo aggiungo, altrimenti ne creo uno nuovo
 * @returns array con all'interno 16 numeri generati randomici tutti diversi
 */
function creazioneNumeriRandom() {
  const numeriGenerati = [22];

  let num = Math.floor(Math.random() * 100) + 1;
  
  while (numeriGenerati.length < 16) {
    num = Math.floor(Math.random() * 100) + 1;
    if (!numeriGenerati.includes(num)) {
      numeriGenerati.push(num)
    }
   
  }
  return numeriGenerati;
}