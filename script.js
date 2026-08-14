/* ==========================================================
   CineAnalytics · Google Analytics 4
   Measurement ID: G-D7DH5RBFXV
   ========================================================== */

const GA4_ID = 'G-D7DH5RBFXV';

const movies = [
 {id:1,title:'Interstellar',year:2014,genre:'Ciencia ficción',genreKey:'ciencia-ficcion',rating:8.7,duration:'2h 49m',director:'Christopher Nolan',poster:'assets/posters/interstellar.jpg',trailer:'https://www.youtube.com/results?search_query=Interstellar+trailer',description:'Una misión espacial busca un nuevo hogar para la humanidad mientras el tiempo adquiere un significado extraordinario.',review:'Una experiencia de ciencia ficción ambiciosa, emocional y visualmente memorable.'},
 {id:2,title:'Batman: The Dark Knight',year:2008,genre:'Acción',genreKey:'accion',rating:8.5,duration:'2h 32m',director:'Christopher Nolan',poster:'assets/posters/batman.jpg',trailer:'https://www.youtube.com/results?search_query=The+Dark+Knight+trailer',description:'Batman se enfrenta a un enemigo que lleva a Gotham al límite y cuestiona los límites entre héroe y villano.',review:'Un thriller de superhéroes intenso, con una construcción de personajes sobresaliente.'},
 {id:3,title:'Harry Potter y la piedra filosofal',year:2001,genre:'Fantasía',genreKey:'fantasia',rating:8.2,duration:'2h 32m',director:'Chris Columbus',poster:'assets/posters/harry-potter.jpg',trailer:'https://www.youtube.com/results?search_query=Harry+Potter+Sorcerers+Stone+trailer',description:'Un joven descubre que pertenece a un mundo mágico y comienza sus estudios en Hogwarts.',review:'Una aventura encantadora que presenta uno de los universos fantásticos más reconocibles del cine.'},
 {id:4,title:'Jurassic Park',year:1993,genre:'Aventura',genreKey:'aventura',rating:8.1,duration:'2h 7m',director:'Steven Spielberg',poster:'assets/posters/jurassic-park.jpg',trailer:'https://www.youtube.com/results?search_query=Jurassic+Park+1993+trailer',description:'Un parque temático con dinosaurios reales se convierte en una lucha por sobrevivir.',review:'Aventura y ciencia ficción combinadas con tensión, espectáculo y criaturas inolvidables.'},
 {id:5,title:'El Señor de los Anillos',year:2001,genre:'Fantasía',genreKey:'fantasia',rating:8.8,duration:'2h 58m',director:'Peter Jackson',poster:'assets/posters/lotr.jpg',trailer:'https://www.youtube.com/results?search_query=Lord+of+the+Rings+Fellowship+trailer',description:'Un hobbit inicia un peligroso viaje para destruir un poderoso anillo.',review:'Una epopeya fantástica de gran escala, con un mundo detallado y personajes memorables.'},
 {id:6,title:'Avengers: Endgame',year:2019,genre:'Acción',genreKey:'accion',rating:8.4,duration:'3h 1m',director:'Anthony Russo, Joe Russo',poster:'assets/posters/avengers-endgame.jpg',trailer:'https://www.youtube.com/results?search_query=Avengers+Endgame+trailer',description:'Los héroes restantes intentan revertir las consecuencias de una batalla que cambió el universo.',review:'Un cierre espectacular para una etapa histórica del cine de superhéroes.'},
 {id:7,title:'Toy Story',year:1995,genre:'Animación',genreKey:'animacion',rating:8.3,duration:'1h 21m',director:'John Lasseter',poster:'assets/posters/toy-story.jpg',trailer:'https://www.youtube.com/results?search_query=Toy+Story+1995+trailer',description:'Los juguetes de un niño cobran vida cuando los humanos no están presentes.',review:'Una historia sencilla, divertida y emotiva que marcó un antes y un después en la animación.'},
 {id:8,title:'El Padrino',year:1972,genre:'Crimen',genreKey:'crimen',rating:9.2,duration:'2h 55m',director:'Francis Ford Coppola',poster:'assets/posters/godfather.jpg',trailer:'https://www.youtube.com/results?search_query=The+Godfather+1972+trailer',description:'Una familia criminal enfrenta cambios internos mientras protege su poder y legado.',review:'Un clásico del cine con actuaciones, fotografía y narrativa extraordinarias.'},
 {id:9,title:'Matrix',year:1999,genre:'Ciencia ficción',genreKey:'ciencia-ficcion',rating:8.7,duration:'2h 16m',director:'Lana y Lilly Wachowski',poster:'assets/posters/matrix.jpg',trailer:'https://www.youtube.com/results?search_query=The+Matrix+1999+trailer',description:'Un programador descubre que la realidad que conoce podría ser una simulación.',review:'Innovadora, filosófica y visualmente revolucionaria.'},
 {id:10,title:'Gladiador',year:2000,genre:'Drama',genreKey:'drama',rating:8.5,duration:'2h 35m',director:'Ridley Scott',poster:'assets/posters/gladiator.jpg',trailer:'https://www.youtube.com/results?search_query=Gladiator+2000+trailer',description:'Un general romano busca justicia después de perderlo todo.',review:'Un drama histórico épico con una poderosa carga emocional.'},
 {id:11,title:'Spider-Man: No Way Home',year:2021,genre:'Acción',genreKey:'accion',rating:8.2,duration:'2h 28m',director:'Jon Watts',poster:'assets/posters/spiderman.jpg',trailer:'https://www.youtube.com/results?search_query=Spider-Man+No+Way+Home+trailer',description:'Peter Parker se enfrenta a consecuencias multiversales después de intentar solucionar su identidad pública.',review:'Una aventura nostálgica y espectacular que explota las posibilidades del multiverso.'},
 {id:12,title:'Coco',year:2017,genre:'Animación',genreKey:'animacion',rating:8.4,duration:'1h 45m',director:'Lee Unkrich',poster:'assets/posters/coco.jpg',trailer:'https://www.youtube.com/results?search_query=Coco+2017+trailer',description:'Un niño viaja a la Tierra de los Muertos para descubrir secretos de su familia.',review:'Emotiva, colorida y musicalmente memorable.'},
 {id:13,title:'Inception',year:2010,genre:'Ciencia ficción',genreKey:'ciencia-ficcion',rating:8.8,duration:'2h 28m',director:'Christopher Nolan',poster:'assets/posters/inception.jpg',trailer:'https://www.youtube.com/results?search_query=Inception+trailer',description:'Un especialista en infiltrarse en sueños recibe una misión aparentemente imposible.',review:'Compleja y estimulante, con una estructura narrativa que invita a múltiples lecturas.'},
 {id:14,title:'Volver al Futuro',year:1985,genre:'Aventura',genreKey:'aventura',rating:8.5,duration:'1h 56m',director:'Robert Zemeckis',poster:'assets/posters/back-to-the-future.jpg',trailer:'https://www.youtube.com/results?search_query=Back+to+the+Future+trailer',description:'Un adolescente viaja accidentalmente al pasado y altera la historia de su familia.',review:'Una aventura de viajes en el tiempo ingeniosa, divertida y atemporal.'},
 {id:15,title:'Joker',year:2019,genre:'Drama',genreKey:'drama',rating:8.3,duration:'2h 2m',director:'Todd Phillips',poster:'assets/posters/joker.jpg',trailer:'https://www.youtube.com/results?search_query=Joker+2019+trailer',description:'Un hombre marginado atraviesa una transformación que altera su relación con la sociedad.',review:'Un drama oscuro centrado en el personaje y en la transformación de su protagonista.'},
 {id:16,title:'El origen de los Guardianes',year:2012,genre:'Fantasía',genreKey:'fantasia',rating:7.2,duration:'1h 37m',director:'Peter Ramsey',poster:'assets/posters/rise-of-the-guardians.jpg',trailer:'https://www.youtube.com/results?search_query=Rise+of+the+Guardians+trailer',description:'Un grupo de guardianes protege la imaginación y los sueños de los niños.',review:'Una aventura familiar con una estética fantástica y una propuesta visual atractiva.'}
];

let activeGenre='todos';
let currentMovie=null;
let favorites=JSON.parse(localStorage.getItem('cineanalytics_favorites')||'[]');

function trackEvent(eventName, parameters={}){
  if(typeof window.gtag==='function'){
    window.gtag('event',eventName,parameters);
  }
}

function movieParams(movie){
  return {
    pelicula:movie.title,
    pelicula_id:String(movie.id),
    genero:movie.genre,
    genero_key:movie.genreKey,
    anio:String(movie.year),
    puntuacion:Number(movie.rating)
  };
}

function isFavorite(id){return favorites.includes(id)}
function saveFavorites(){
  localStorage.setItem('cineanalytics_favorites',JSON.stringify(favorites));
  updateFavoriteCounters();
}
function updateFavoriteCounters(){
  document.getElementById('favoritesCount').textContent=favorites.length;
  document.getElementById('aboutFavorites').textContent=favorites.length;
}

function renderMovies(){
  const query=document.getElementById('searchInput').value.trim().toLowerCase();
  const filtered=movies.filter(m=>{
    const genreOK=activeGenre==='todos'||m.genreKey===activeGenre;
    const text=[m.title,m.genre,m.director,String(m.year)].join(' ').toLowerCase();
    return genreOK && (!query||text.includes(query));
  });

  const grid=document.getElementById('moviesGrid');
  grid.innerHTML='';
  document.getElementById('movieCount').textContent=`${filtered.length} ${filtered.length===1?'película':'películas'}`;
  document.getElementById('resultsInfo').textContent=`Mostrando ${filtered.length} de ${movies.length} películas`;
  document.getElementById('noResults').classList.toggle('hidden',filtered.length>0);

  filtered.forEach(movie=>{
    const card=document.createElement('article');
    card.className='movie-card';
    card.innerHTML=`
      <div class="poster-wrap">
        <img src="${movie.poster}" alt="Póster de ${movie.title}" loading="lazy"
             onerror="this.onerror=null;this.src='https://placehold.co/600x900/151922/ffffff?text=CineAnalytics'">
        <span class="rating">★ ${movie.rating}</span>
        <button class="favorite-btn ${isFavorite(movie.id)?'active':''}" data-favorite="${movie.id}" aria-label="Favorito">${isFavorite(movie.id)?'♥':'♡'}</button>
      </div>
      <div class="card-body">
        <span class="genre">${movie.genre}</span>
        <h3>${movie.title}</h3>
        <div class="meta">${movie.year} · ${movie.duration}</div>
        <div class="card-actions">
          <button class="primary" data-details="${movie.id}">Ver película</button>
          <a href="${movie.trailer}" target="_blank" rel="noopener noreferrer" data-trailer="${movie.id}">▶ Tráiler</a>
          <button data-review="${movie.id}">📖 Reseña</button>
          <button data-share="${movie.id}">↗ Compartir</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function openMovie(id,source='card'){
  const movie=movies.find(m=>m.id===Number(id));
  if(!movie)return;
  currentMovie=movie;
  document.getElementById('modalPoster').src=movie.poster;
  document.getElementById('modalPoster').alt=`Póster de ${movie.title}`;
  document.getElementById('modalGenre').textContent=movie.genre;
  document.getElementById('modalTitle').textContent=movie.title;
  document.getElementById('modalYear').textContent=movie.year;
  document.getElementById('modalRating').textContent=`★ ${movie.rating}`;
  document.getElementById('modalDuration').textContent=movie.duration;
  document.getElementById('modalDirector').textContent=`Director: ${movie.director}`;
  document.getElementById('modalDescription').textContent=movie.description;
  document.getElementById('modalTrailer').href=movie.trailer;
  document.getElementById('modalFavorite').textContent=isFavorite(movie.id)?'♥ En favoritos':'♡ Favorita';
  document.getElementById('reviewBox').classList.add('hidden');

  document.getElementById('movieModal').classList.add('open');
  document.getElementById('movieModal').setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';

  trackEvent('seleccionar_pelicula',{...movieParams(movie),origen:source});
}

function closeModal(){
  document.getElementById('movieModal').classList.remove('open');
  document.getElementById('movieModal').setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  currentMovie=null;
}

function toggleFavorite(id,source='card'){
  const movie=movies.find(m=>m.id===Number(id));
  if(!movie)return;
  const exists=isFavorite(movie.id);
  if(exists){
    favorites=favorites.filter(x=>x!==movie.id);
    trackEvent('eliminar_favorito',{...movieParams(movie),origen:source});
  }else{
    favorites.push(movie.id);
    trackEvent('agregar_favorito',{...movieParams(movie),origen:source});
  }
  saveFavorites();
  renderMovies();
  if(currentMovie&&currentMovie.id===movie.id){
    document.getElementById('modalFavorite').textContent=isFavorite(movie.id)?'♥ En favoritos':'♡ Favorita';
  }
}

function showReview(id){
  const movie=movies.find(m=>m.id===Number(id));
  if(!movie)return;
  openMovie(movie.id,'review');
  document.getElementById('reviewBox').classList.remove('hidden');
  document.getElementById('modalReviewText').textContent=movie.review;
  trackEvent('leer_resena',movieParams(movie));
}

async function shareMovie(id){
  const movie=movies.find(m=>m.id===Number(id));
  if(!movie)return;
  const shareData={title:`${movie.title} · CineAnalytics`,text:`Mira ${movie.title} en CineAnalytics.`,url:`${location.href.split('#')[0]}#pelicula-${movie.id}`};
  try{
    if(navigator.share) await navigator.share(shareData);
    else await navigator.clipboard.writeText(shareData.url);
    trackEvent('compartir_pelicula',{...movieParams(movie),metodo:navigator.share?'share_api':'clipboard'});
  }catch(e){
    if(e.name!=='AbortError') trackEvent('compartir_pelicula',{...movieParams(movie),metodo:'error'});
  }
}

function showFavorites(){
  const favMovies=movies.filter(m=>favorites.includes(m.id));
  const grid=document.getElementById('moviesGrid');
  const previous=document.getElementById('resultsInfo');
  document.getElementById('peliculas').scrollIntoView({behavior:'smooth'});
  if(!favMovies.length){
    previous.textContent='No tienes películas favoritas todavía.';
    renderMovies();
    trackEvent('ver_favoritos',{cantidad:0});
    return;
  }
  activeGenre='todos';
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.genre==='todos'));
  document.getElementById('searchInput').value='';
  grid.innerHTML='';
  favMovies.forEach(movie=>{
    const card=document.createElement('article');
    card.className='movie-card';
    card.innerHTML=`
      <div class="poster-wrap"><img src="${movie.poster}" alt="Póster de ${movie.title}" onerror="this.onerror=null;this.src='https://placehold.co/600x900/151922/ffffff?text=CineAnalytics'"><span class="rating">★ ${movie.rating}</span></div>
      <div class="card-body"><span class="genre">${movie.genre}</span><h3>${movie.title}</h3><div class="meta">${movie.year} · ${movie.duration}</div>
      <div class="card-actions"><button class="primary" data-details="${movie.id}">Ver película</button><button data-review="${movie.id}">📖 Reseña</button></div></div>`;
    grid.appendChild(card);
  });
  document.getElementById('movieCount').textContent=`${favMovies.length} favoritas`;
  previous.textContent=`Mostrando ${favMovies.length} películas favoritas`;
  document.getElementById('noResults').classList.add('hidden');
  trackEvent('ver_favoritos',{cantidad:favMovies.length});
}

document.addEventListener('click',e=>{
  const details=e.target.closest('[data-details]');
  const favorite=e.target.closest('[data-favorite]');
  const review=e.target.closest('[data-review]');
  const share=e.target.closest('[data-share]');
  const trailer=e.target.closest('[data-trailer]');

  if(details){openMovie(details.dataset.details,'card');return}
  if(favorite){e.preventDefault();toggleFavorite(favorite.dataset.favorite,'card');return}
  if(review){e.preventDefault();showReview(review.dataset.review);return}
  if(share){e.preventDefault();shareMovie(share.dataset.share);return}
  if(trailer){
    const movie=movies.find(m=>m.id===Number(trailer.dataset.trailer));
    if(movie)trackEvent('ver_trailer',movieParams(movie));
    return;
  }
});

document.getElementById('searchInput').addEventListener('input',e=>{
  renderMovies();
  const q=e.target.value.trim();
  if(q)trackEvent('buscar_pelicula',{termino:q});
});

document.getElementById('clearSearch').addEventListener('click',()=>{
  document.getElementById('searchInput').value='';
  renderMovies();
  trackEvent('limpiar_busqueda');
});

document.getElementById('genreFilters').addEventListener('click',e=>{
  const btn=e.target.closest('[data-genre]');
  if(!btn)return;
  activeGenre=btn.dataset.genre;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b===btn));
  renderMovies();
  trackEvent('filtro_genero',{genero:activeGenre});
});

document.getElementById('resetSearch').addEventListener('click',()=>{
  activeGenre='todos';
  document.getElementById('searchInput').value='';
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.genre==='todos'));
  renderMovies();
  trackEvent('restablecer_catalogo');
});

document.getElementById('randomMovie').addEventListener('click',()=>{
  const movie=movies[Math.floor(Math.random()*movies.length)];
  trackEvent('pelicula_aleatoria',movieParams(movie));
  openMovie(movie.id,'random');
});

document.getElementById('favoritesNav').addEventListener('click',showFavorites);

document.getElementById('modalClose').addEventListener('click',closeModal);
document.getElementById('modalOverlay').addEventListener('click',closeModal);

document.getElementById('modalReview').addEventListener('click',()=>{
  if(!currentMovie)return;
  document.getElementById('reviewBox').classList.remove('hidden');
  document.getElementById('modalReviewText').textContent=currentMovie.review;
  trackEvent('leer_resena',{...movieParams(currentMovie),origen:'modal'});
});

document.getElementById('modalFavorite').addEventListener('click',()=>{
  if(currentMovie)toggleFavorite(currentMovie.id,'modal');
});

document.getElementById('modalShare').addEventListener('click',()=>{
  if(currentMovie)shareMovie(currentMovie.id);
});

document.getElementById('modalTrailer').addEventListener('click',()=>{
  if(currentMovie)trackEvent('ver_trailer',{...movieParams(currentMovie),origen:'modal'});
});

document.getElementById('exploreButton').addEventListener('click',()=>{
  trackEvent('explorar_catalogo',{origen:'hero'});
});

document.getElementById('logoLink').addEventListener('click',()=>{
  trackEvent('clic_logo');
});

document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click',()=>{
    trackEvent('navegacion',{destino:link.dataset.nav});
  });
});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape')closeModal();
});

document.addEventListener('DOMContentLoaded',()=>{
  updateFavoriteCounters();
  renderMovies();

  trackEvent('visita_cineanalytics',{
    peliculas_disponibles:movies.length,
    categorias_disponibles:8,
    ga4_measurement_id:GA4_ID
  });
});
