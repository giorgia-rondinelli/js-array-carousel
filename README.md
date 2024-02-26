Carosello Mono Array
===
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
## Svolgimento
- Creazione della struttura html
- in js:
- creo un array con tutti percorsi  delle immagini 
- inserisco i percorsi delle immagini utilizzando un ciclo for 
- concateno le immagini in html con un template literal con classe hide
- aggiungo un counter e lo associo alle immagini 
- rendo la prima immagine visibile togliendogli la classe hide
- creo due variabili prendendo i due bottoni in html

- faccio si che ad ogni clic sui bottoni il counter aumenti o diminuisca 
- di conseguenza all'aumento del counter rimuovo e aggiungo la classe hide per alle immagini 
- creo una situazione di default in cui non è visibile il bottone down
- quando clicco su up, down diventa visibile 
- creo un if all'interno del bottone up che fa scomparire il bottone up una volta reaggiunta la fine dell'array
-  creo un if all'interno del bottone  down che fa scomparire il bottone down quando si è all'inizio dell'array
