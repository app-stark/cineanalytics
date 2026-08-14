
'use strict';

const GA4_ID = 'G-D7DH5RBFXV';

const movies = [
  {
    "id": "interstellar",
    "title": "Interstellar",
    "year": 2014,
    "genre": "Ciencia ficción",
    "genreKey": "ciencia-ficcion",
    "rating": 8.7,
    "duration": "2h 49min",
    "director": "Christopher Nolan",
    "poster": "assets/posters/interstellar.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Interstellar+trailer",
    "description": "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    "review": "Una experiencia de ciencia ficción ambiciosa que combina emoción, ciencia, efectos visuales y una banda sonora inolvidable."
  },
  {
    "id": "inception",
    "title": "Inception",
    "year": 2010,
    "genre": "Ciencia ficción",
    "genreKey": "ciencia-ficcion",
    "rating": 8.8,
    "duration": "2h 28min",
    "director": "Christopher Nolan",
    "poster": "assets/posters/inception.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Inception+2010+trailer",
    "description": "Un especialista en espionaje corporativo entra en los sueños para implantar una idea en la mente de otra persona.",
    "review": "Una propuesta compleja y visualmente espectacular que juega con la percepción y los diferentes niveles de realidad."
  },
  {
    "id": "matrix",
    "title": "The Matrix",
    "year": 1999,
    "genre": "Ciencia ficción",
    "genreKey": "ciencia-ficcion",
    "rating": 8.7,
    "duration": "2h 16min",
    "director": "Lana y Lilly Wachowski",
    "poster": "assets/posters/matrix.jpg",
    "trailer": "https://www.youtube.com/results?search_query=The+Matrix+1999+trailer",
    "description": "Un programador descubre que la realidad que conoce es una simulación y se une a un grupo de rebeldes.",
    "review": "Una película revolucionaria por su estética, efectos visuales y concepto, cuya influencia continúa vigente."
  },
  {
    "id": "avatar",
    "title": "Avatar",
    "year": 2009,
    "genre": "Ciencia ficción",
    "genreKey": "ciencia-ficcion",
    "rating": 7.9,
    "duration": "2h 42min",
    "director": "James Cameron",
    "poster": "assets/posters/avatar.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Avatar+2009+trailer",
    "description": "Un exmarine viaja a Pandora y se ve atrapado entre la misión que recibió y el mundo que empieza a conocer.",
    "review": "Un espectáculo visual que destaca por la construcción de su universo y su escala cinematográfica."
  },
  {
    "id": "batman",
    "title": "The Batman",
    "year": 2022,
    "genre": "Acción",
    "genreKey": "accion",
    "rating": 8.5,
    "duration": "2h 56min",
    "director": "Matt Reeves",
    "poster": "assets/posters/batman.jpg",
    "trailer": "https://www.youtube.com/results?search_query=The+Batman+2022+trailer",
    "description": "Batman investiga una serie de crímenes cometidos por un misterioso asesino que expone la corrupción de Gotham.",
    "review": "Una versión oscura y detectivesca del personaje, destacada por su fotografía y atmósfera noir."
  },
  {
    "id": "dark-knight",
    "title": "The Dark Knight",
    "year": 2008,
    "genre": "Acción",
    "genreKey": "accion",
    "rating": 9.0,
    "duration": "2h 32min",
    "director": "Christopher Nolan",
    "poster": "assets/posters/dark-knight.jpg",
    "trailer": "https://www.youtube.com/results?search_query=The+Dark+Knight+2008+trailer",
    "description": "Batman se enfrenta a una amenaza criminal que lleva a Gotham al límite y pone a prueba sus principios.",
    "review": "Un referente del cine de superhéroes por su guion, tensión y construcción de personajes."
  },
  {
    "id": "avengers",
    "title": "Avengers: Endgame",
    "year": 2019,
    "genre": "Acción",
    "genreKey": "accion",
    "rating": 8.4,
    "duration": "3h 01min",
    "director": "Anthony y Joe Russo",
    "poster": "assets/posters/avengers.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Avengers+Endgame+trailer",
    "description": "Los Vengadores restantes intentan revertir las consecuencias del conflicto que cambió el destino del universo.",
    "review": "Un gran cierre de una etapa del universo Marvel, diseñado alrededor de sus personajes y de la emoción del público."
  },
  {
    "id": "gladiator",
    "title": "Gladiator",
    "year": 2000,
    "genre": "Acción",
    "genreKey": "accion",
    "rating": 8.5,
    "duration": "2h 35min",
    "director": "Ridley Scott",
    "poster": "assets/posters/gladiator.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Gladiator+2000+trailer",
    "description": "Un general romano es traicionado y convertido en esclavo. Su camino como gladiador lo lleva a buscar justicia.",
    "review": "Un drama épico con grandes escenas de acción, actuaciones memorables y una puesta en escena monumental."
  },
  {
    "id": "harry-potter",
    "title": "Harry Potter",
    "year": 2001,
    "genre": "Fantasía",
    "genreKey": "fantasia",
    "rating": 8.2,
    "duration": "2h 32min",
    "director": "Chris Columbus",
    "poster": "assets/posters/harry-potter.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Harry+Potter+Philosophers+Stone+trailer",
    "description": "Harry descubre que es un joven mago y comienza sus estudios en Hogwarts, donde descubre secretos sobre su pasado.",
    "review": "Una película que construye con encanto el mundo mágico de Hogwarts y presenta una aventura inolvidable."
  },
  {
    "id": "lotr",
    "title": "El Señor de los Anillos",
    "year": 2001,
    "genre": "Fantasía",
    "genreKey": "fantasia",
    "rating": 8.8,
    "duration": "2h 58min",
    "director": "Peter Jackson",
    "poster": "assets/posters/lotr.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Lord+of+the+Rings+Fellowship+trailer",
    "description": "Un joven hobbit recibe la misión de destruir un poderoso anillo antes de que caiga en manos de Sauron.",
    "review": "Una extraordinaria adaptación de Tolkien, con un mundo épico, personajes memorables y una gran banda sonora."
  },
  {
    "id": "pirates",
    "title": "Piratas del Caribe",
    "year": 2003,
    "genre": "Fantasía",
    "genreKey": "fantasia",
    "rating": 8.0,
    "duration": "2h 23min",
    "director": "Gore Verbinski",
    "poster": "assets/posters/pirates.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Pirates+of+the+Caribbean+2003+trailer",
    "description": "Un herrero y un excéntrico capitán pirata se embarcan en una aventura para rescatar a una joven secuestrada.",
    "review": "Aventura fantástica con humor, acción y una identidad visual muy reconocible."
  },
  {
    "id": "jurassic",
    "title": "Jurassic Park",
    "year": 1993,
    "genre": "Aventura",
    "genreKey": "aventura",
    "rating": 8.1,
    "duration": "2h 07min",
    "director": "Steven Spielberg",
    "poster": "assets/posters/jurassic.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Jurassic+Park+1993+trailer",
    "description": "Un parque temático lleno de dinosaurios clonados se convierte en una pesadilla cuando los animales escapan.",
    "review": "Una referencia del cine de aventuras y efectos especiales que combina tensión, espectáculo y personajes memorables."
  },
  {
    "id": "back-future",
    "title": "Volver al Futuro",
    "year": 1985,
    "genre": "Aventura",
    "genreKey": "aventura",
    "rating": 8.3,
    "duration": "1h 56min",
    "director": "Robert Zemeckis",
    "poster": "assets/posters/back-future.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Back+to+the+Future+1985+trailer",
    "description": "Un adolescente viaja accidentalmente al pasado y debe conseguir que sus padres se conozcan para poder regresar a casa.",
    "review": "Una aventura de viajes en el tiempo convertida en uno de los grandes clásicos populares del cine."
  },
  {
    "id": "indiana",
    "title": "Indiana Jones",
    "year": 1981,
    "genre": "Aventura",
    "genreKey": "aventura",
    "rating": 8.4,
    "duration": "1h 55min",
    "director": "Steven Spielberg",
    "poster": "assets/posters/indiana.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Raiders+of+the+Lost+Ark+trailer",
    "description": "Un arqueólogo aventurero se enfrenta a rivales y peligros sobrenaturales mientras busca un antiguo artefacto.",
    "review": "Una aventura clásica, dinámica y carismática que ayudó a definir el género."
  },
  {
    "id": "parasite",
    "title": "Parásitos",
    "year": 2019,
    "genre": "Drama",
    "genreKey": "drama",
    "rating": 8.5,
    "duration": "2h 12min",
    "director": "Bong Joon Ho",
    "poster": "assets/posters/parasite.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Parasite+2019+trailer",
    "description": "Una familia con dificultades económicas empieza a relacionarse con una familia rica, desencadenando una situación inesperada.",
    "review": "Una obra socialmente incisiva que mezcla drama, humor negro, suspense y crítica de clase."
  },
  {
    "id": "shawshank",
    "title": "Sueño de Fuga",
    "year": 1994,
    "genre": "Drama",
    "genreKey": "drama",
    "rating": 9.3,
    "duration": "2h 22min",
    "director": "Frank Darabont",
    "poster": "assets/posters/shawshank.jpg",
    "trailer": "https://www.youtube.com/results?search_query=Shawshank+Redemption+trailer",
    "description": "Un banquero condenado injustamente encuentra amistad y esperanza durante sus años en prisión.",
    "review": "Un drama humano sobre la esperanza, la amistad y la perseverancia que se convirtió en un clásico."
  }
];

const genreNames = {
  todos: 'Mostrando selección completa',
  'ciencia-ficcion': 'Ciencia ficción',
  accion: 'Acción',
  fantasia: 'Fantasía',
  aventura: 'Aventura',
  drama: 'Drama'
};

const state = {
  genre: 'todos',
  search: '',
  favorites: loadFavorites(),
  favoritesOnly: false,
  selected: null
};

const $ = id => document.getElementById(id);

function track(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

function loadFavorites() {
  try {
    const data = JSON.parse(localStorage.getItem('cineanalytics_favorites') || '[]');
    return Array.isArray(data) ? data.map(String) : [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem('cineanalytics_favorites', JSON.stringify(state.favorites));
  updateFavoriteCount();
}

function updateFavoriteCount() {
  const el = $('favoriteCount');
  if (el) el.textContent = state.favorites.length;
}

function showToast(message) {
  const toast = $('cineToast');
  const text = $('toastText');
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function filteredMovies() {
  const term = state.search.trim().toLowerCase();

  return movies.filter(movie => {
    const genreOk = state.genre === 'todos' || movie.genreKey === state.genre;
    const favoriteOk = !state.favoritesOnly || state.favorites.includes(movie.id);
    const searchOk =
      !term ||
      movie.title.toLowerCase().includes(term) ||
      movie.genre.toLowerCase().includes(term) ||
      String(movie.year).includes(term);

    return genreOk && favoriteOk && searchOk;
  });
}

function renderMovies() {
  const grid = $('moviesGrid');
  if (!grid) return;

  const list = filteredMovies();
  grid.innerHTML = '';

  list.forEach(movie => {
    const favorite = state.favorites.includes(movie.id);
    const card = document.createElement('article');

    card.className = 'movie-card';
    card.dataset.movieId = movie.id;

    card.innerHTML = `
      <div class="movie-poster">
        <img src="${movie.poster}" alt="Póster de ${movie.title}" loading="lazy">
        <div class="movie-rating">★ ${movie.rating}</div>
        ${favorite ? '<div class="favorite-badge">♥</div>' : ''}
      </div>
      <div class="movie-info">
        <span class="movie-genre">${movie.genre}</span>
        <h3>${movie.title}</h3>
        <span class="movie-year">${movie.year} · ${movie.duration}</span>
        <div class="movie-actions">
          <button class="movie-button" type="button" data-action="details" data-id="${movie.id}">
            Ver detalles
          </button>
        </div>
      </div>
    `;

    const image = card.querySelector('img');
    image.addEventListener('error', () => {
      image.src = 'assets/posters/placeholder.jpg';
    }, { once: true });

    grid.appendChild(card);
  });

  const count = $('movieCount');
  if (count) {
    count.textContent = `${list.length} ${list.length === 1 ? 'película' : 'películas'}`;
  }

  const active = $('activeCategory');
  if (active) {
    if (state.favoritesOnly) {
      active.textContent = list.length
        ? 'Mostrando tus películas favoritas'
        : 'No tienes películas favoritas';
    } else if (state.search.trim()) {
      active.textContent = `Resultados para "${state.search.trim()}"`;
    } else {
      active.textContent = genreNames[state.genre] || genreNames.todos;
    }
  }

  const empty = $('noResults');
  if (empty) empty.classList.toggle('show', list.length === 0);

  updateFilterCounts();
}

function updateFilterCounts() {
  document.querySelectorAll('.filter-button').forEach(button => {
    const genre = button.dataset.genre;
    const amount = genre === 'todos'
      ? movies.length
      : movies.filter(movie => movie.genreKey === genre).length;

    const badge = button.querySelector('b');
    if (badge) badge.textContent = amount;
  });
}

function setGenre(genre, sendEvent = true) {
  state.genre = genre;
  state.search = '';
  state.favoritesOnly = false;

  const input = $('searchInput');
  if (input) input.value = '';

  document.querySelector('.search-wrap')?.classList.remove('has-value');

  document.querySelectorAll('.filter-button').forEach(button => {
    button.classList.toggle('active', button.dataset.genre === genre);
  });

  $('showFavorites')?.classList.remove('active');

  renderMovies();

  if (sendEvent) {
    track('filtro_genero', {
      categoria: genre,
      genero: genreNames[genre] || genre
    });
  }
}

function setupFilters() {
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => setGenre(button.dataset.genre));
  });
}

function setupSearch() {
  const input = $('searchInput');
  const clear = $('clearSearch');
  const wrap = document.querySelector('.search-wrap');

  if (!input) return;

  input.addEventListener('input', () => {
    state.search = input.value;
    state.genre = 'todos';
    state.favoritesOnly = false;

    document.querySelectorAll('.filter-button').forEach(button => {
      button.classList.toggle('active', button.dataset.genre === 'todos');
    });

    $('showFavorites')?.classList.remove('active');
    wrap?.classList.toggle('has-value', Boolean(state.search.trim()));

    renderMovies();

    clearTimeout(setupSearch.timer);
    setupSearch.timer = setTimeout(() => {
      if (state.search.trim()) {
        track('buscar_pelicula', { termino: state.search.trim() });
      }
    }, 700);
  });

  clear?.addEventListener('click', () => {
    state.search = '';
    input.value = '';
    wrap?.classList.remove('has-value');
    setGenre('todos', false);
    track('limpiar_busqueda');
  });

  $('resetSearch')?.addEventListener('click', () => {
    state.search = '';
    input.value = '';
    setGenre('todos');
    track('restablecer_catalogo');
  });
}

function openMovie(movie) {
  state.selected = movie;

  const poster = $('modalPoster');
  poster.src = movie.poster;
  poster.alt = `Póster de ${movie.title}`;
  poster.onerror = () => {
    poster.src = 'assets/posters/placeholder.jpg';
  };

  $('modalGenre').textContent = movie.genre;
  $('modalTitle').textContent = movie.title;
  $('modalYear').textContent = movie.year;
  $('modalDuration').textContent = movie.duration;
  $('modalRating').textContent = `★ ${movie.rating}`;
  $('modalDescription').textContent = movie.description;
  $('modalDirector').textContent = movie.director;
  $('modalTrailer').href = movie.trailer;

  updateModalFavorite();

  const modal = $('movieModal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  history.replaceState(null, '', `?pelicula=${movie.id}`);

  track('seleccionar_pelicula', {
    pelicula: movie.title,
    pelicula_id: String(movie.id),
    genero: movie.genre,
    anio: String(movie.year),
    puntuacion: movie.rating
  });
}

function closeModal(clearUrl = true) {
  const modal = $('movieModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  document.body.classList.remove('modal-open');
  state.selected = null;

  if (clearUrl) {
    history.replaceState(null, '', window.location.pathname + window.location.hash);
  }
}

function updateModalFavorite() {
  const button = $('modalFavorite');
  if (!button || !state.selected) return;

  const active = state.favorites.includes(state.selected.id);
  button.textContent = active ? '♥' : '♡';
  button.classList.toggle('is-favorite', active);
  button.setAttribute('aria-label', active ? 'Quitar de favoritos' : 'Añadir a favoritos');
}

function toggleFavorite(movie) {
  const index = state.favorites.indexOf(movie.id);

  if (index === -1) {
    state.favorites.push(movie.id);
    showToast(`${movie.title} añadido a favoritos`);
    track('agregar_favorito', {
      pelicula: movie.title,
      pelicula_id: String(movie.id),
      genero: movie.genre
    });
  } else {
    state.favorites.splice(index, 1);
    showToast(`${movie.title} eliminado de favoritos`);
    track('eliminar_favorito', {
      pelicula: movie.title,
      pelicula_id: String(movie.id),
      genero: movie.genre
    });
  }

  saveFavorites();
  updateModalFavorite();
  renderMovies();
}

function setupModal() {
  $('modalClose')?.addEventListener('click', () => closeModal());
  $('modalOverlay')?.addEventListener('click', () => closeModal());

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });

  $('modalFavorite')?.addEventListener('click', () => {
    if (state.selected) toggleFavorite(state.selected);
  });

  $('modalReview')?.addEventListener('click', () => {
    if (!state.selected) return;

    showToast(state.selected.review);
    track('leer_resena', {
      pelicula: state.selected.title,
      pelicula_id: String(state.selected.id)
    });
  });

  $('modalShare')?.addEventListener('click', shareMovie);

  $('modalTrailer')?.addEventListener('click', () => {
    if (!state.selected) return;

    track('ver_trailer', {
      pelicula: state.selected.title,
      pelicula_id: String(state.selected.id),
      genero: state.selected.genre
    });
  });
}

async function shareMovie() {
  if (!state.selected) return;

  const url = new URL(window.location.href);
  url.searchParams.set('pelicula', state.selected.id);

  const data = {
    title: `${state.selected.title} | CineAnalytics`,
    text: `Descubre ${state.selected.title} en CineAnalytics.`,
    url: url.toString()
  };

  try {
    if (navigator.share) {
      await navigator.share(data);
      track('compartir_pelicula', {
        pelicula: state.selected.title,
        pelicula_id: String(state.selected.id),
        metodo: 'nativo'
      });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url.toString());
      showToast('Enlace copiado al portapapeles');
      track('compartir_pelicula', {
        pelicula: state.selected.title,
        pelicula_id: String(state.selected.id),
        metodo: 'copiar_enlace'
      });
    } else {
      window.prompt('Copia este enlace:', url.toString());
    }
  } catch {
    /* El usuario canceló compartir. */
  }
}

function randomMovie() {
  const list = filteredMovies();
  const pool = list.length ? list : movies;
  const movie = pool[Math.floor(Math.random() * pool.length)];

  openMovie(movie);
  track('pelicula_aleatoria', {
    pelicula: movie.title,
    pelicula_id: String(movie.id)
  });
}

function setupMovieGrid() {
  $('moviesGrid')?.addEventListener('click', event => {
    const button = event.target.closest('[data-action="details"]');
    const card = event.target.closest('.movie-card');
    const id = button?.dataset.id || card?.dataset.movieId;

    if (!id) return;

    const movie = movies.find(item => item.id === id);
    if (movie) openMovie(movie);
  });
}

function setupFavorites() {
  $('showFavorites')?.addEventListener('click', () => {
    state.favoritesOnly = !state.favoritesOnly;

    if (state.favoritesOnly) {
      state.genre = 'todos';
      state.search = '';

      const input = $('searchInput');
      if (input) input.value = '';

      document.querySelector('.search-wrap')?.classList.remove('has-value');

      document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.toggle('active', button.dataset.genre === 'todos');
      });

      $('showFavorites').classList.add('active');

      track('ver_favoritos', {
        cantidad: state.favorites.length
      });
    } else {
      $('showFavorites').classList.remove('active');
    }

    renderMovies();
  });
}

function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link')
        .forEach(item => item.classList.remove('active'));

      link.classList.add('active');

      track('navegacion', {
        destino: link.textContent.trim()
      });

      $('navMenu')?.classList.remove('open');
      $('mobileMenu')?.setAttribute('aria-expanded', 'false');
    });
  });

  $('mobileMenu')?.addEventListener('click', () => {
    const nav = $('navMenu');
    if (!nav) return;

    const open = nav.classList.toggle('open');
    $('mobileMenu').setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  $('exploreButton')?.addEventListener('click', () => track('explorar_catalogo'));
  $('logoLink')?.addEventListener('click', () => track('clic_logo'));
}

function setupRandomButtons() {
  $('randomMovie')?.addEventListener('click', randomMovie);
  $('randomMovieTop')?.addEventListener('click', randomMovie);
}

function openFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('pelicula');
  if (!id) return;

  const movie = movies.find(item => item.id === id);
  if (movie) setTimeout(() => openMovie(movie), 300);
}

function init() {
  updateFavoriteCount();
  setupFilters();
  setupSearch();
  setupModal();
  setupMovieGrid();
  setupFavorites();
  setupNavigation();
  setupRandomButtons();
  renderMovies();
  openFromURL();

  const heroCount = $('heroMovieCount');
  if (heroCount) heroCount.textContent = movies.length;

  track('visita_cineanalytics', {
    peliculas_disponibles: movies.length,
    categorias_disponibles: 5,
    ga4_measurement_id: GA4_ID
  });

  console.log(`🎬 CineAnalytics listo · ${movies.length} películas · GA4 ${GA4_ID}`);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
