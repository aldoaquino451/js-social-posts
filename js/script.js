
/*

  // 1. Costruiamo l'array posts di oggetti post
  // 2. Cicliamo l'array posts per stampare ogni oggetto post all'interno dell'html
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

createPosts();





/*-------------------
     FUNCTIONS 
-------------------*/



function createPosts () {
  posts.forEach( (post) => {

    printPost(post)
    
  });

};



function printPost(post) {
  const {author, created, content, media, likes, id} = post;

  container.innerHTML += ` 
  <div class="post">
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
      <img src="${media}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${id}">
            <i
              class="like-button__icon fas fa-thumbs-up"
              aria-hidden="true"
            ></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">
          Piace a
          <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
        </div>
      </div>
    </div>

  </div>
  `;

  
}





