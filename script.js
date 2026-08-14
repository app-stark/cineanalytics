/* ============================================================
   CineAnalytics — medición GA4
   Measurement ID: G-D7DH5RBFXV
   Mantiene la estructura:
   index.html
   styles.css
   script.js
   assets/posters/*
   ============================================================ */

const GA4_ID = 'G-D7DH5RBFXV';

const movies = [
  {id:1,title:'Interstellar',year:2014,genre:'Ciencia ficción',key:'ciencia-ficcion',rating:8.7,director:'Christopher Nolan',duration:'2h 49m',poster:'assets/posters/interstellar.jpg',trailer:'https://www.youtube.com/results?search_query=Interstellar+trailer',description:'Una misión espacial busca un nuevo hogar para la humanidad mientras el tiempo adquiere un significado extraordinario.',review:'Una experiencia de ciencia ficción ambiciosa, emocional y visualmente memorable.'},
  {id:2,title:'Inception',year:2010,genre:'Ciencia ficción',key:'ciencia-ficcion',rating:8.8,director:'Christopher Nolan',duration:'2h 28m',poster:'assets/posters/inception.jpg',trailer:'https://www.youtube.com/results?search_query=Inception+trailer',description:'Un especialista en infiltrarse en sueños recibe una misión aparentemente imposible.',review:'Compleja, estimulante y construida alrededor de una idea visualmente poderosa.'},
  {id:3,title:'The Matrix',year:1999,genre:'Ciencia ficción',key:'ciencia-ficcion',rating:8.7,director:'Lana y Lilly Wachowski',duration:'2h 16m',poster:'assets/posters/matrix.jpg',trailer:'https://www.youtube.com/results?search_query=The+Matrix+1999+trailer',description:'Un programador descubre que la realidad que conoce podría ser una simulación.',review:'Innovadora, filosófica y visualmente revolucionaria.'},
  {id:4,title:'Avatar',year:2009,genre:'Ciencia ficción',key:'ciencia-ficcion',rating:7.9,director:'James Cameron',duration:'2h 42m',poster:'assets/posters/avatar.jpg',trailer:'https://www.youtube.com/results?search_query=Avatar+2009+trailer',description:'Un exmarine llega a Pandora y se ve atrapado entre dos mundos.',review:'Una experiencia audiovisual inmersiva que destaca por su universo visual.'},
  {id:5,title:'Batman Begins',year:2005,genre:'Acción',key:'accion',rating:8.2,director:'Christopher Nolan',duration:'2h 20m',poster:'assets/posters/batman.jpg',trailer:'https://www.youtube.com/results?search_query=Batman+Begins+trailer',description:'Bruce Wayne regresa a Gotham y comienza a convertirse en Batman.',review:'Un origen sólido y oscuro que reconstruyó al personaje para una nueva generación.'},
  {id:6,title:'The Dark Knight',year:2008,genre:'Acción',key:'accion',rating:9.0,director:'Christopher Nolan',duration:'2h 32m',poster:'assets/posters/dark-knight.jpg',trailer:'https://www.youtube.com/results?search_query=Dark+Knight+trailer',description:'Batman enfrenta a un enemigo que lleva Gotham al límite.',review:'Un thriller criminal intenso con personajes memorables y enorme tensión dramática.'},
  {id:7,title:'Avengers: Endgame',year:2019,genre:'Acción',key:'accion',rating:8.4,director:'Anthony y Joe Russo',duration:'3h 1m',poster:'assets/posters/avengers.jpg',trailer:'https://www.youtube.com/results?search_query=Avengers+Endgame+trailer',description:'Los héroes restantes intentan revertir las consecuencias de una batalla que cambió el universo.',review:'Un cierre espectacular para una etapa histórica del cine de superhéroes.'},
  {id:8,title:'Gladiator',year:2000,genre:'Drama',key:'drama',rating:8.5,director:'Ridley Scott',duration:'2h 35m',poster:'assets/posters/gladiator.jpg',trailer:'https://www.youtube.com/results?search_query=Gladiator+2000+trailer',description:'Un general romano busca justicia después de perderlo todo.',review:'Un drama histórico épico con una poderosa carga emocional.'},
  {id:9,title:'Harry Potter y la piedra filosofal',year:2001,genre:'Fantasía',key:'fantasia',rating:8.2,director:'Chris Columbus',duration:'2h 32m',poster:'assets/posters/harry-potter.jpg',trailer:'https://www.youtube.com/results?search_query=Harry+Potter+Sorcerers+Stone+trailer',description:'Un joven descubre que pertenece a un mundo mágico y comienza sus estudios en Hogwarts.',review:'Una aventura encantadora que presenta uno de los universos fantásticos más reconocibles.'},
  {id:10,title:'El Señor de los Anillos',year:2001,genre:'Fantasía',key:'fantasia',rating:8.8,director:'Peter Jackson',duration:'2h 58m',poster:'assets/posters/lotr.jpg',trailer:'https://www.youtube.com/results?search_query=Lord+of+the+Rings+Fellowship+trailer',description:'Un hobbit inicia un peligroso viaje para destruir un poderoso anillo.',review:'Una epopeya fantástica de gran escala, con un mundo detallado y personajes memorables.'},
  {id:11,title:'Piratas del Caribe',year:2003,genre:'Aventura',key:'aventura',rating:8.1,director:'Gore Verbinski',duration:'2h 23m',poster:'assets/posters/pirates.jpg',trailer:'https://www.youtube.com/results?search_query=Pirates+of+the+Caribbean+trailer',description:'Un pirata excéntrico se embarca en una aventura para rescatar a Elizabeth.',review:'Aventura, humor y acción combinados con una identidad visual muy reconocible.'},
  {id:12,title:'Jurassic Park',year:1993,genre:'Aventura',key:'aventura',rating:8.1,director:'Steven Spielberg',duration:'2h 7m',poster:'assets/posters/jurassic.jpg',trailer:'https://www.youtube.com/results?search_query=Jurassic+Park+1993+trailer',description:'Un parque temático con dinosaurios reales se convierte en una lucha por sobrevivir.',review:'Aventura y ciencia ficción combinadas con tensión, espectáculo y criaturas inolvidables.'},
  {id:13,title:'Volver al Futuro',year:1985,genre:'Aventura',key:'aventura',rating:8.5,director:'Robert Zemeckis',duration:'1h 56m',poster:'assets/posters/back-future.jpg',trailer:'https://www.youtube.com/results?search_query=Back+to+the+Future+trailer',description:'Un adolescente viaja accidentalmente al pasado y altera la historia de su familia.',review:'Una aventura de viajes en el tiempo ingeniosa, divertida y atemporal.'},
  {id:14,title:'Indiana Jones',year:1981,genre:'Aventura',key:'aventura',rating:8.4,director:'Steven Spielberg',duration:'1h 55m',poster:'assets/posters/indiana.jpg',trailer:'https://www.youtube.com/results?search_query=Raiders+of+the+Lost+Ark+trailer',description:'Un arqueólogo aventurero compite contra fuerzas que buscan un antiguo artefacto.',review:'Una referencia del cine de aventuras con ritmo, humor y secuencias memorables.'},
  {id:15,title:'Parasite',year:2019,genre:'Thriller',key:'thriller',rating:8.5,director:'Bong Joon-ho',duration:'2h 12m',poster:'assets/posters/parasite.jpg',trailer:'https://www.youtube.com/results?search_query=Parasite+2019+trailer',description:'Una familia con dificultades económicas se introduce progresivamente en la vida de otra familia.',review:'Una obra inteligente que mezcla drama, humor negro y suspense social.'},
  {id:16,title:'The Shawshank Redemption',year:1994,genre:'Drama',key:'drama',rating:9.3,director:'Frank Darabont',duration:'2h 22m',poster:'assets/posters/shawshank.jpg',trailer:'https://www.youtube.com/results?search_query=Shawshank+Redemption+trailer',description:'Dos presos desarrollan una amistad que resiste años de adversidad.',review:'Un drama humano sobre esperanza, amistad y libertad.'}
];

const categories = [
  {key:'ciencia-ficcion',name:'Ciencia ficción',icon:'◈',color:'#7667ff'},
  {key:'accion',name:'Acción',icon:'⚡',color:'#ff4d5a'},
  {key:'fantasia',name:'Fantasía',icon:'✦',color:'#bf63ff'},
  {key:'aventura',name:'Aventura',icon:'◇',color:'#27c9a4'},
  {key:'drama',name:'Drama',icon:'◉',color:'#ffb347'},
  {key:'animacion',name:'Animación',icon:'✿',color:'#35b9ff'},
  {key:'crimen',name:'Crimen',icon:'◆',color:'#8b96a8'},
  {key:'thriller',name:'Thriller',icon:'△',color:'#e94cff'}
];

let activeGenre='all';
let currentMovie=null;
let sortMode='featured';
let eventCount=0;
let favorites=JSON.parse(localStorage.getItem('cineanalytics_favorites')||'[]');

function track(eventName, params={}){
  eventCount++;
  const clean={
    ...params,
    ga4_measurement_id:GA4_ID
  };
  if(typeof window.gtag==='function') window.gtag('event',eventName,clean);
  const counter=document.getElementById('trackedEvents');
  if(counter) counter.textContent=eventCount;
}

function params(movie){
  return {
    pelicula:movie.title,
    pelicula_id:String(movie.id),
    genero:movie.genre,
    categoria:movie.key,
    anio:String(movie.year),
    puntuacion:Number(movie.rating)
  };
}

function isFavorite(id){return favorites.includes(id)}
function saveFavorites(){
  localStorage.setItem('cineanalytics_favorites',JSON.stringify(favorites));
  updateFavoriteUI();
}
function updateFavoriteUI(){
  document.getElementById('favoritesCount').textContent=favorites.length;
  document.getElementById('sessionFavorites').textContent=favorites.length;
}
function escapeHTML(value){
  return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function getFilteredMovies(){
  const query=document.getElementById('searchInput').value.trim().toLowerCase();
  let result=movies.filter(movie=>{
    const genreOK=activeGenre==='all'||movie.key===activeGenre;
    const haystack=`${movie.title} ${movie.genre} ${movie.director} ${movie.year}`.toLowerCase();
    return genreOK&&(!query||haystack.includes(query));
  });

  if(sortMode==='rating')result.sort((a,b)=>b.rating-a.rating);
  if(sortMode==='year-desc')result.sort((a,b)=>b.year-a.year);
  if(sortMode==='year-asc')result.sort((a,b)=>a.year-b.year);
  if(sortMode==='title')result.sort((a,b)=>a.title.localeCompare(b.title,'es'));

  return result;
}

function renderMovies(){
  const result=getFilteredMovies();
  const grid=document.getElementById('moviesGrid');
  document.getElementById('resultCount').textContent=result.length;
  document.getElementById('emptyState').classList.toggle('hidden',result.length!==0);
  grid.innerHTML='';

  result.forEach(movie=>{
    const article=document.createElement('article');
    article.className='movie-card';
    article.innerHTML=`
      <div class="poster">
        <img src="${movie.poster}" alt="Póster de ${escapeHTML(movie.title)}" loading="lazy"
             onerror="this.onerror=null;this.src='assets/posters/placeholder.jpg'">
        <span class="rating">★ ${movie.rating}</span>
        <button class="favorite ${isFavorite(movie.id)?'active':''}" data-favorite="${movie.id}" aria-label="Agregar a favoritos">${isFavorite(movie.id)?'♥':'♡'}</button>
      </div>
      <div class="movie-body">
        <div class="movie-genre">${escapeHTML(movie.genre)}</div>
        <h3 title="${escapeHTML(movie.title)}">${escapeHTML(movie.title)}</h3>
        <div class="movie-meta">${movie.year} · ${movie.duration} · ${escapeHTML(movie.director)}</div>
        <div class="movie-actions">
          <button class="primary" data-details="${movie.id}">Ver ficha</button>
          <a href="${movie.trailer}" target="_blank" rel="noopener noreferrer" data-trailer="${movie.id}">▶ Tráiler</a>
          <button data-review="${movie.id}">▣ Reseña</button>
          <button data-share="${movie.id}">↗ Compartir</button>
        </div>
      </div>`;
    grid.appendChild(article);
  });
}

function renderCategories(){
  const grid=document.getElementById('categoryGrid');
  grid.innerHTML='';
  categories.forEach(cat=>{
    const count=movies.filter(m=>m.key===cat.key).length;
    const card=document.createElement('button');
    card.className='category-card';
    card.style.setProperty('--cat-color',cat.color);
    card.dataset.category=cat.key;
    card.innerHTML=`<span class="category-icon">${cat.icon}</span><h3>${cat.name}</h3><span>${count} ${count===1?'película':'películas'}</span>`;
    grid.appendChild(card);
  });
}

function openMovie(id,source='card'){
  const movie=movies.find(m=>m.id===Number(id));
  if(!movie)return;
  currentMovie=movie;

  const modal=document.getElementById('movieModal');
  document.getElementById('modalPoster').src=movie.poster;
  document.getElementById('modalPoster').onerror=()=>{document.getElementById('modalPoster').src='assets/posters/placeholder.jpg'};
  document.getElementById('modalPoster').alt=`Póster de ${movie.title}`;
  document.getElementById('modalGenre').textContent=movie.genre;
  document.getElementById('modalTitle').textContent=movie.title;
  document.getElementById('modalMeta').textContent=`${movie.year} · ★ ${movie.rating} · ${movie.duration}`;
  document.getElementById('modalDirector').textContent=`Director: ${movie.director}`;
  document.getElementById('modalDescription').textContent=movie.description;
  document.getElementById('modalTrailer').href=movie.trailer;
  document.getElementById('modalFavorite').textContent=isFavorite(movie.id)?'♥ En favoritos':'♡ Favorita';
  document.getElementById('reviewBox').classList.add('hidden');

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  track('seleccionar_pelicula',{...params(movie),origen:source});
}

function closeModal(){
  const modal=document.getElementById('movieModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  currentMovie=null;
}

function toggleFavorite(id,source='card'){
  const movie=movies.find(m=>m.id===Number(id));
  if(!movie)return;
  if(isFavorite(movie.id)){
    favorites=favorites.filter(x=>x!==movie.id);
    track('eliminar_favorito',{...params(movie),origen:source});
    showToast('Eliminada de favoritos');
  }else{
    favorites.push(movie.id);
    track('agregar_favorito',{...params(movie),origen:source});
    showToast('Añadida a favoritos');
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
  track('leer_resena',params(movie));
}

async function shareMovie(id){
  const movie=movies.find(m=>m.id===Number(id));
  if(!movie)return;
  const url=`${location.href.split('#')[0]}#pelicula-${movie.id}`;
  try{
    if(navigator.share){
      await navigator.share({title:`${movie.title} · CineAnalytics`,text:`Descubre ${movie.title} en CineAnalytics.`,url});
      track('compartir_pelicula',{...params(movie),metodo:'share'});
      showToast('Contenido compartido');
    }else if(navigator.clipboard){
      await navigator.clipboard.writeText(url);
      track('compartir_pelicula',{...params(movie),metodo:'clipboard'});
      showToast('Enlace copiado');
    }else{
      showToast('Copia el enlace desde el navegador');
    }
  }catch(error){
    if(error.name!=='AbortError')track('error_compartir',{...params(movie)});
  }
}

function randomMovie(){
  const list=getFilteredMovies();
  const pool=list.length?list:movies;
  const movie=pool[Math.floor(Math.random()*pool.length)];
  track('pelicula_aleatoria',params(movie));
  openMovie(movie.id,'random');
}

function showFavorites(){
  document.getElementById('searchInput').value='';
  activeGenre='all';
  document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.genre==='all'));
  const fav=movies.filter(m=>favorites.includes(m.id));
  document.getElementById('resultCount').textContent=fav.length;
  const grid=document.getElementById('moviesGrid');
  grid.innerHTML='';
  document.getElementById('emptyState').classList.toggle('hidden',fav.length!==0);

  fav.forEach(movie=>{
    const article=document.createElement('article');
    article.className='movie-card';
    article.innerHTML=`
      <div class="poster"><img src="${movie.poster}" alt="${escapeHTML(movie.title)}" onerror="this.onerror=null;this.src='assets/posters/placeholder.jpg'"><span class="rating">★ ${movie.rating}</span></div>
      <div class="movie-body"><div class="movie-genre">${escapeHTML(movie.genre)}</div><h3>${escapeHTML(movie.title)}</h3><div class="movie-meta">${movie.year} · ${movie.duration}</div><div class="movie-actions"><button class="primary" data-details="${movie.id}">Ver ficha</button><button data-review="${movie.id}">▣ Reseña</button></div></div>`;
    grid.appendChild(article);
  });
  document.getElementById('catalogo').scrollIntoView({behavior:'smooth'});
  track('ver_favoritos',{cantidad:fav.length});
}

function showToast(message){
  const toast=document.getElementById('toast');
  toast.textContent=message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer=setTimeout(()=>toast.classList.remove('show'),2200);
}

document.addEventListener('click',event=>{
  const details=event.target.closest('[data-details]');
  const favorite=event.target.closest('[data-favorite]');
  const review=event.target.closest('[data-review]');
  const share=event.target.closest('[data-share]');
  const trailer=event.target.closest('[data-trailer]');
  const category=event.target.closest('[data-category]');

  if(details){openMovie(details.dataset.details);return}
  if(favorite){event.preventDefault();toggleFavorite(favorite.dataset.favorite);return}
  if(review){event.preventDefault();showReview(review.dataset.review);return}
  if(share){event.preventDefault();shareMovie(share.dataset.share);return}
  if(trailer){
    const movie=movies.find(m=>m.id===Number(trailer.dataset.trailer));
    if(movie)track('ver_trailer',params(movie));
    return;
  }
  if(category){
    activeGenre=category.dataset.category;
    document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.genre===activeGenre));
    renderMovies();
    document.getElementById('catalogo').scrollIntoView({behavior:'smooth'});
    track('seleccionar_categoria',{categoria:activeGenre});
  }
});

document.getElementById('searchInput').addEventListener('input',event=>{
  renderMovies();
  const term=event.target.value.trim();
  if(term)track('buscar_pelicula',{termino:term});
});

document.getElementById('clearSearch').addEventListener('click',()=>{
  document.getElementById('searchInput').value='';
  renderMovies();
  track('limpiar_busqueda');
});

document.getElementById('sortSelect').addEventListener('change',event=>{
  sortMode=event.target.value;
  renderMovies();
  track('ordenar_catalogo',{orden:sortMode});
});

document.getElementById('genreFilters').addEventListener('click',event=>{
  const btn=event.target.closest('[data-genre]');
  if(!btn)return;
  activeGenre=btn.dataset.genre;
  document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===btn));
  renderMovies();
  track('filtro_genero',{genero:activeGenre});
});

document.getElementById('resetFilters').addEventListener('click',()=>{
  activeGenre='all';sortMode='featured';
  document.getElementById('searchInput').value='';
  document.getElementById('sortSelect').value='featured';
  document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.genre==='all'));
  renderMovies();
  track('restablecer_catalogo');
});

document.getElementById('heroExplore').addEventListener('click',()=>track('explorar_catalogo',{origen:'hero'}));
document.getElementById('heroRandom').addEventListener('click',randomMovie);
document.getElementById('favoritesButton').addEventListener('click',showFavorites);
document.getElementById('logoLink').addEventListener('click',()=>track('clic_logo'));

document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click',()=>track('navegacion',{destino:link.dataset.nav}));
});

document.getElementById('modalClose').addEventListener('click',closeModal);
document.getElementById('modalBackdrop').addEventListener('click',closeModal);
document.getElementById('modalReview').addEventListener('click',()=>{
  if(!currentMovie)return;
  document.getElementById('reviewBox').classList.remove('hidden');
  document.getElementById('modalReviewText').textContent=currentMovie.review;
  track('leer_resena',{...params(currentMovie),origen:'modal'});
});
document.getElementById('modalFavorite').addEventListener('click',()=>{if(currentMovie)toggleFavorite(currentMovie.id,'modal')});
document.getElementById('modalShare').addEventListener('click',()=>{if(currentMovie)shareMovie(currentMovie.id)});
document.getElementById('modalTrailer').addEventListener('click',()=>{if(currentMovie)track('ver_trailer',{...params(currentMovie),origen:'modal'})});

document.addEventListener('keydown',event=>{
  if(event.key==='Escape')closeModal();
});

window.addEventListener('scroll',()=>{
  const sections=['inicio','catalogo','categorias','nosotros'];
  const position=window.scrollY+150;
  let current='inicio';
  sections.forEach(id=>{const el=document.getElementById(id);if(el&&position>=el.offsetTop)current=id});
  document.querySelectorAll('.nav-link').forEach(link=>link.classList.toggle('active',link.dataset.nav===current));
});

window.addEventListener('beforeunload',()=>{
  if(typeof window.gtag==='function')window.gtag('event','salida_sitio',{pagina:location.pathname});
});

document.addEventListener('DOMContentLoaded',()=>{
  renderMovies();
  renderCategories();
  updateFavoriteUI();

  track('visita_cineanalytics',{
    peliculas_disponibles:movies.length,
    categorias_disponibles:categories.length
  });
});
