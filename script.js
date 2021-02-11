/* Esercitazione 08/02/21

Es. 1
Utilizzando ​try​ / ​catch​, ​async​ / ​await ​e ​fetch​, definire una funzione per ottenere le città 
tramite l’url ​https://api.musement.com/api/v3/cities​.
Gestire l’errore con ​throw​. In caso di errore far apparire un banner rosso con la scritta 
“Ops, c’è stato un errore”.
Nota: per forzare un errore basta scrivere in modo errato l’url del fetch. */

// async function getDataAPI() {
//     try {
//       /* Se ad esempio elimino una lettera da cities, genero un errore e sbuca un babnner sull'html*/
//       const response = await fetch("https://api.musement.com/api/v3/cities"); 
      
//       const result = await response.json();

//       console.log(result);
      
//       if (!response.ok) {
//         throw new Error(`status chiamata ${response.status}`);
//       }
//     } catch (message) {
//       console.error(message);

//       errorBanner();
//     }
//   }
  
//   function errorBanner() {
//     const banner = document.querySelector('.banner');
//     banner.style.display = 'block'; 
//   }

//   getDataAPI();
  
/* Es. 2
Impostare lo stato interno della nostra applicazione con una chiave “config”, nel quale tenere 
salvato i dati utili per effettuare le chiamate con fetch di MovieDB.
Creare una funzione utility che passato un path come parametro ritorni la url completa da 
utilizzare. Aggiungere un’altra chiave allo state dell’applicativo chiamata “movies”.
Eseguire una chiamata al ​DOMContentLoaded​ della pagina che carichi i film più popolari 
(utilizzare sempre try / catch, async / await , throw e fetch) e che li salvi nello stato 
sotto “movies” e poi stampi in console il risultato.
Con l’errore visualizzare il banner dell’esercizio 1.
(​link alla documentazione delle API movies popular​).   */

// const state = {
//   config: {
//     api_key: "21d98811ccc06892cfacaa00806100a9",
//     base_url: "https://api.themoviedb.org/3/",
//   },
//   movies: null
// };

// // Creazione di una funzione utility che, dato un path name, ritorni la url completa

// function getEndPoint(path) {
  
//   const { api_key, base_url } = state.config;

//   return `${base_url}${path}?api_key=${api_key}`;

// };

// // Eseguire una chiamata al DOMContentLoaded della pagina che carichi i film popolari

// async function getPopMovies() {

//   const popMovPath = 'movie/popular';
//   const popMovUrl = getEndPoint(popMovPath);

//   try {

//     const response = await fetch(popMovUrl);
    
//     if (!response.ok) {
//       const errorMsg = await response.json();
//       throw errorMsg;
//     }
//     const result = await response.json();
//     console.log('risultato', result);

//   } catch (errorMsg) {
//     const banner = document.querySelector('.banner');
//     banner.style.display = 'block'; 
//   }
// };

// getPopMovies();

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM caricato')
// });

/* Es. 3
Prendere confidenza con localStorage.
Utilizzare i metodi ​setItem​, ​getItem​ e ​removeItem​ per fare un po’ di pratica.
Esercizio suggerito:
nell’HTML un input e due bottoni rispettivamente “salva” e “rimuovi”.
Al DOMContentLoaded della pagine stampare in console il valore della chiave “test_storage” 
presente nel localStorage se è presente.
Al click di “salva” salvare nel localStorage il valore dell’input sotto la chiave “test_storage”. 
Al click di “rimuovi” eliminare la chiave “test_storage” dal localStorage.
Una volta aggiunto il valore con salva, chiudere e riaprire il browser. Dovrebbe apparire in console 
il valore aggiunto precedentemente. */

const addBtn = document.querySelector('.add_btn');
const removeBtn = document.querySelector('.remove_btn');
const myInput = document.querySelector('.my-input');

function getData() {

  const newInput = myInput.value;
  localStorage.setItem('test_storage', newInput); /* aggiungo la chiave valore test_storage */

  const appResult = localStorage.getItem('test_storage');
  console.log('The input value is: ', appResult);

}

addBtn.addEventListener('click', getData);

function delData() {

  const newInput = myInput.value;
  localStorage.removeItem('test_storage', newInput);

  console.log('Item deleted');

}

removeBtn.addEventListener('click', delData);

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM caricato')
});