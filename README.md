Social Posts
===

## Esercizio

Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

### Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.      

*Non è necessario creare date casuali*       
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*

### Milestone 2
Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.  

### Milestone 3
Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

#### Bonus
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
3. Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


## JavaScript

1. Costruiamo l'array posts di oggetti post
2. Cicliamo l'array posts per stampare ogni oggetto post all'interno dell'html
3. Associamo al click del  bottone dei like la funzione per aumentare i like e cambiare colore
  - diamo un counter ai likes
  - al click il counter aumenta 
  - aggiungiamo una classe liked per cambiare colore 
4. al click parte una seconda funzione che filtra gli elementi che hanno la classe liked
  - restituiamo un array con tutti gli oggetti liked
5. formattare le date
6. se la chiave immagine è vuota inserire una scritta
7. alla funzione aumento like inserisco un controllo
  - se la classe liked già è presente allora tolgo la classe
  - diminuisco il counter
? CONTROLLA SE L'ARRAY CON I LIKED VIENE AGGIIORNATO


