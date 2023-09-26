
/*

  4. al click parte una seconda funzione che filtra gli elementi che hanno la classe liked
  - restituiamo un array con tutti gli oggetti liked
  5. formattare le date
  6. se la chiave immagine è vuota inserire una scritta
  7. alla funzione aumento like inserisco un controllo
  - se la classe liked già è presente allora tolgo la classe
  - diminuisco il counter
  ? CONTROLLA SE L'ARRAY CON I LIKED VIENE AGGIIORNATO

  const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "06-25-2021"
    }
  ]

  // const posts = [ {}, {}, {}, ... ];

  // .post-meta__icon          author image   (!! in alt possiamo metter il nome)
  // .post-meta__author        author name
  // .post-meta__time          created
  // .post__text               content
  // .post__image              media
  // #like-counter-1           likes

*/


const container = document.getElementById('container');
container.innerHTML = '';

init();

const postArr = document.querySelectorAll('.post');
// console.log(postsArr[1].id);   

const likesBtnArr = document.querySelectorAll('.js-like-button');
const likesNumbArr = document.querySelectorAll('.js-likes-counter');

addRemoveLike();



const newarray = postArr.filter( (id) => {
  return id >0;
})

console.log(newarray);
/*-------------------
     FUNCTIONS 
-------------------*/

/* ------------------------- */

/* - TOGGLE-LIKE - Cambia il colore al bottone e il numero al counter dei like*/

function addRemoveLike() {
  likesBtnArr.forEach((btn, i) => {
    btn.addEventListener('click', function() {
      
      let likesCounter = likesNumbArr[i].innerHTML;

      if (!btn.classList.contains('js-liked')) {
        btn.classList.add('js-liked');
        likesCounter ++;
      }
      else {
        btn.classList.remove('js-liked');
        likesCounter --;  
      }
      
      likesNumbArr[i].innerHTML = likesCounter;
      


    });
  });
};


/* - PRINT-POST - Stampa tutti gli elementi HTML di ogni Post usando i dati del database*/

function printPost(post) {
  const {author, created, content, media, likes, id} = post;

  container.innerHTML += ` 
  <div class="post" id="${id}">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${author.image}" alt="Phil Mangione"/>
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${author.name}</div>
          <div class="post-meta__time">${created}</div>
        </div>
      </div>
    </div>
    <div class="post__text">${content}</div>
    <div class="post__image">
      <img src="${media}" alt=""/>
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${id}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">
          Piace a
          <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
        </div>
      </div>
    </div>
  </div>
  `;



};


/* - CREATE POSTS - Crea nuovi post con i dati del database */

function init() {

  posts.forEach(post => {
    printPost(post); 
  });

};



