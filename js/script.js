console.log('JS OK');
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da  farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?

//* Palidroma
//* Chiedere all’utente di inserire una parola
//* Creare una funzione per capire se la parola inserita è palindroma

//! Raccolta dati 
// creare il prompt per chiedere la parola all'utente;
// Creare una funzione per capire se la parola inserita è palindroma
//   SE 
//     la parola è palindroma print 'Questa parola è palindroma'
//   ALTRIMENTI 
//     print 'la parola inserita non è palindroma'

//! Svolgimento
// creare il prompt per chiedere la parola all'utente;
const insertWord = prompt("inserisci la parola"); 
// Creare una funzione per capire se la parola inserita è palindroma;
function palindroma(insertWord){    
    for(let i = 0; i < insertWord.length / 2; i++){     
      if(insertWord[i] !== insertWord[insertWord.length - i - 1]){
            return false;
        }
    }
    return true;
}

//! Output
if(palindroma(insertWord)){
    console.log(insertWord + ' ->' + " Questa parola è palindroma");
    window.alert(insertWord + ' ->' + " Questa parola è palindroma");
  } 
  else {
    console.log(insertWord + ' ->' + " la parola inserita non è palindroma");
    window.alert(insertWord + ' ->' + " la parola inserita non è palindroma");
  }

//* Pari e Dispari
//* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//* Sommiamo i due numeri
//* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//* Dichiariamo chi ha vinto.


//! Raccolta dati 


//! Svolgimento


//! Output