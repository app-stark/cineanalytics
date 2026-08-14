/* =========================================================
   CINEANALYTICS
   Catálogo cinematográfico + Google Analytics 4

   GitHub Pages:
   https://app-stark.github.io/cineanalytics/

   Estructura:
   /index.html
   /styles.css
   /script.js
   /assets/posters/*.jpg
========================================================= */

'use strict';

/* =========================================================
   GOOGLE ANALYTICS
========================================================= */

const GA4_ID = 'G-D7DH5RBFXV';

/* =========================================================
   RUTA DE LAS IMÁGENES
=========================================================

   IMPORTANTE:
   No utilizamos:

   /cineanalytics/assets/posters/

   ni:

   https://app-stark.github.io/...

   En su lugar usamos document.baseURI.

   Esto permite que el navegador resuelva correctamente
   la carpeta assets aunque el proyecto esté dentro de
   un subdirectorio de GitHub Pages.
========================================================= */

const POSTERS_PATH = new URL(
    'assets/posters/',
    document.baseURI
).href;

const PLACEHOLDER_POSTER =
    `${POSTERS_PATH}placeholder.jpg`;


/* =========================================================
   PELÍCULAS
========================================================= */

const movies = [

    {
        id: 1,
        title: 'Interstellar',
        year: 2014,
        genre: 'Ciencia ficción',
        genreKey: 'ciencia-ficcion',
        rating: 8.7,
        duration: '2h 49min',
        director: 'Christopher Nolan',
        poster: `${POSTERS_PATH}interstellar.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Interstellar+trailer',
        description:
            'Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad mientras la Tierra enfrenta una crisis ambiental.',
        review:
            'Una experiencia de ciencia ficción ambiciosa que combina emoción, ciencia, efectos visuales y una poderosa banda sonora.'
    },

    {
        id: 2,
        title: 'Inception',
        year: 2010,
        genre: 'Ciencia ficción',
        genreKey: 'ciencia-ficcion',
        rating: 8.8,
        duration: '2h 28min',
        director: 'Christopher Nolan',
        poster: `${POSTERS_PATH}inception.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Inception+2010+trailer',
        description:
            'Un especialista en espionaje corporativo utiliza una tecnología capaz de entrar en los sueños para implantar una idea en la mente de otra persona.',
        review:
            'Una propuesta compleja y visualmente espectacular que juega con la percepción, los sueños y diferentes niveles de realidad.'
    },

    {
        id: 3,
        title: 'The Matrix',
        year: 1999,
        genre: 'Ciencia ficción',
        genreKey: 'ciencia-ficcion',
        rating: 8.7,
        duration: '2h 16min',
        director: 'Lana y Lilly Wachowski',
        poster: `${POSTERS_PATH}matrix.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=The+Matrix+1999+trailer',
        description:
            'Un programador descubre que la realidad que conoce es una simulación y se une a un grupo de rebeldes para descubrir la verdad.',
        review:
            'Una película revolucionaria por su estética, efectos visuales y concepto, cuya influencia sigue presente en la ciencia ficción.'
    },

    {
        id: 4,
        title: 'Avatar',
        year: 2009,
        genre: 'Ciencia ficción',
        genreKey: 'ciencia-ficcion',
        rating: 7.8,
        duration: '2h 42min',
        director: 'James Cameron',
        poster: `${POSTERS_PATH}avatar.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Avatar+2009+trailer',
        description:
            'Un exmarine participa en una misión en Pandora y termina involucrándose con la población local y su mundo.',
        review:
            'Una experiencia visual espectacular que destacó por su tecnología, mundo fantástico y efectos digitales.'
    },

    {
        id: 5,
        title: 'The Batman',
        year: 2022,
        genre: 'Acción',
        genreKey: 'accion',
        rating: 8.5,
        duration: '2h 56min',
        director: 'Matt Reeves',
        poster: `${POSTERS_PATH}batman.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=The+Batman+2022+trailer',
        description:
            'Batman investiga una serie de crímenes cometidos por un misterioso asesino que está poniendo al descubierto la corrupción de Gotham City.',
        review:
            'Una versión oscura y detectivesca del personaje, destacada por su fotografía, ambientación y tono noir.'
    },

    {
        id: 6,
        title: 'The Dark Knight',
        year: 2008,
        genre: 'Acción',
        genreKey: 'accion',
        rating: 9.0,
        duration: '2h 32min',
        director: 'Christopher Nolan',
        poster: `${POSTERS_PATH}dark-knight.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=The+Dark+Knight+trailer',
        description:
            'Batman se enfrenta a un criminal impredecible que amenaza con sumir Gotham en el caos.',
        review:
            'Una de las películas de superhéroes más influyentes de la historia, con una narrativa intensa y actuaciones memorables.'
    },

    {
        id: 7,
        title: 'Avengers: Endgame',
        year: 2019,
        genre: 'Acción',
        genreKey: 'accion',
        rating: 8.4,
        duration: '3h 01min',
        director: 'Anthony y Joe Russo',
        poster: `${POSTERS_PATH}avengers.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Avengers+Endgame+trailer',
        description:
            'Los héroes supervivientes deben encontrar una manera de revertir las consecuencias del devastador enfrentamiento ocurrido anteriormente.',
        review:
            'Un gran cierre para una etapa del universo cinematográfico de Marvel, cargado de acción y momentos emocionales.'
    },

    {
        id: 8,
        title: 'Gladiator',
        year: 2000,
        genre: 'Acción',
        genreKey: 'accion',
        rating: 8.5,
        duration: '2h 35min',
        director: 'Ridley Scott',
        poster: `${POSTERS_PATH}gladiator.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Gladiator+2000+trailer',
        description:
            'Un general romano es traicionado y convertido en esclavo. Su camino como gladiador lo llevará a enfrentarse contra quienes destruyeron su vida.',
        review:
            'Un drama épico con grandes escenas de acción y una interpretación protagonista memorable.'
    },

    {
        id: 9,
        title: 'Harry Potter y la piedra filosofal',
        year: 2001,
        genre: 'Fantasía',
        genreKey: 'fantasia',
        rating: 8.2,
        duration: '2h 32min',
        director: 'Chris Columbus',
        poster: `${POSTERS_PATH}harry-potter.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Harry+Potter+Philosophers+Stone+trailer',
        description:
            'Harry Potter descubre que es un joven mago y comienza sus estudios en Hogwarts, donde descubre secretos relacionados con su pasado.',
        review:
            'Una película que construye con encanto el mundo mágico de Hogwarts y presenta una aventura que se convirtió en un clásico.'
    },

    {
        id: 10,
        title: 'El Señor de los Anillos',
        year: 2001,
        genre: 'Fantasía',
        genreKey: 'fantasia',
        rating: 8.8,
        duration: '2h 58min',
        director: 'Peter Jackson',
        poster: `${POSTERS_PATH}lotr.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Lord+of+the+Rings+Fellowship+trailer',
        description:
            'Un joven hobbit recibe la misión de destruir un poderoso anillo antes de que caiga en manos del señor oscuro Sauron.',
        review:
            'Una extraordinaria adaptación de la obra de Tolkien, con un mundo épico, personajes memorables y una gran banda sonora.'
    },

    {
        id: 11,
        title: 'Piratas del Caribe',
        year: 2003,
        genre: 'Fantasía',
        genreKey: 'fantasia',
        rating: 8.1,
        duration: '2h 23min',
        director: 'Gore Verbinski',
        poster: `${POSTERS_PATH}pirates.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Pirates+of+the+Caribbean+trailer',
        description:
            'Un pirata excéntrico se embarca en una aventura para recuperar su barco y enfrentarse a una tripulación maldita.',
        review:
            'Una aventura entretenida que combina humor, fantasía, acción y personajes carismáticos.'
    },

    {
        id: 12,
        title: 'Jurassic Park',
        year: 1993,
        genre: 'Aventura',
        genreKey: 'aventura',
        rating: 8.1,
        duration: '2h 07min',
        director: 'Steven Spielberg',
        poster: `${POSTERS_PATH}jurassic.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Jurassic+Park+1993+trailer',
        description:
            'Un parque temático lleno de dinosaurios clonados se convierte en una pesadilla cuando los animales escapan de sus instalaciones.',
        review:
            'Una referencia del cine de aventuras y efectos especiales que combina tensión, espectáculo y personajes memorables.'
    },

    {
        id: 13,
        title: 'Volver al Futuro',
        year: 1985,
        genre: 'Aventura',
        genreKey: 'aventura',
        rating: 8.5,
        duration: '1h 56min',
        director: 'Robert Zemeckis',
        poster: `${POSTERS_PATH}back-future.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Back+to+the+Future+trailer',
        description:
            'Un adolescente viaja accidentalmente al pasado utilizando una máquina del tiempo construida por un científico excéntrico.',
        review:
            'Una aventura clásica que combina viajes en el tiempo, humor y una historia extraordinariamente entretenida.'
    },

    {
        id: 14,
        title: 'Indiana Jones',
        year: 1981,
        genre: 'Aventura',
        genreKey: 'aventura',
        rating: 8.4,
        duration: '1h 55min',
        director: 'Steven Spielberg',
        poster: `${POSTERS_PATH}indiana.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Indiana+Jones+Raiders+trailer',
        description:
            'Un arqueólogo aventurero emprende una peligrosa misión para encontrar un antiguo artefacto antes que sus enemigos.',
        review:
            'Una de las grandes aventuras cinematográficas, con acción, misterio, humor y un protagonista icónico.'
    },

    {
        id: 15,
        title: 'Parásitos',
        year: 2019,
        genre: 'Drama',
        genreKey: 'drama',
        rating: 8.5,
        duration: '2h 12min',
        director: 'Bong Joon-ho',
        poster: `${POSTERS_PATH}parasite.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Parasite+2019+trailer',
        description:
            'Una familia con dificultades económicas comienza a infiltrarse progresivamente en la vida de una familia mucho más adinerada.',
        review:
            'Una película inteligente que mezcla drama, humor negro y crítica social con una construcción narrativa excepcional.'
    },

    {
        id: 16,
        title: 'Sueño de Fuga',
        year: 1994,
        genre: 'Drama',
        genreKey: 'drama',
        rating: 9.3,
        duration: '2h 22min',
        director: 'Frank Darabont',
        poster: `${POSTERS_PATH}shawshank.jpg`,
        trailer:
            'https://www.youtube.com/results?search_query=Shawshank+Redemption+trailer',
        description:
            'Un hombre condenado injustamente encuentra esperanza y amistad durante sus años en prisión.',
        review:
            'Un drama humano sobre la esperanza, la amistad y la perseverancia que se ha convertido en un clásico.'
    }

];


/* =========================================================
   CATEGORÍAS
========================================================= */

const genreNames = {

    todos: 'Todas las películas',

    'ciencia-ficcion':
        'Ciencia ficción',

    accion:
        'Acción',

    fantasia:
        'Fantasía',

    aventura:
        'Aventura',

    drama:
        'Drama'

};


/* =========================================================
   ESTADO DE LA APLICACIÓN
========================================================= */

let currentGenre = 'todos';

let currentSearch = '';

let selectedMovie = null;

let showingFavorites = false;

let searchTimer = null;


/* =========================================================
   FAVORITOS
========================================================= */

function loadFavorites() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    'cineanalytics_favorites'
                ) || '[]'
            );

        if (!Array.isArray(saved)) {
            return [];
        }

        return saved.map(Number);

    } catch (error) {

        console.warn(
            'No se pudieron cargar los favoritos.'
        );

        return [];
    }
}


let favorites = loadFavorites();


/* =========================================================
   UTILIDAD PARA SELECCIONAR ELEMENTOS
========================================================= */

function $(id) {

    return document.getElementById(id);

}


/* =========================================================
   GOOGLE ANALYTICS
========================================================= */

function trackEvent(
    eventName,
    parameters = {}
) {

    if (
        typeof window.gtag ===
        'function'
    ) {

        window.gtag(
            'event',
            eventName,
            parameters
        );

    }

}


/* =========================================================
   OBTENER PELÍCULAS FILTRADAS
========================================================= */

function getFilteredMovies() {

    const term =
        currentSearch
            .trim()
            .toLowerCase();

    return movies.filter(
        movie => {

            const genreMatch =
                currentGenre === 'todos' ||
                movie.genreKey === currentGenre;

            const searchMatch =
                !term ||
                movie.title
                    .toLowerCase()
                    .includes(term) ||

                movie.genre
                    .toLowerCase()
                    .includes(term) ||

                String(movie.year)
                    .includes(term);

            const favoriteMatch =
                !showingFavorites ||
                favorites.includes(
                    movie.id
                );

            return (
                genreMatch &&
                searchMatch &&
                favoriteMatch
            );
        }
    );
}


/* =========================================================
   GUARDAR FAVORITOS
========================================================= */

function saveFavorites() {

    try {

        localStorage.setItem(
            'cineanalytics_favorites',
            JSON.stringify(
                favorites
            )
        );

    } catch (error) {

        console.warn(
            'No se pudieron guardar los favoritos.'
        );

    }

}


/* =========================================================
   NOTIFICACIÓN
========================================================= */

function showToast(message) {

    const toast =
        $('cineToast');

    const toastText =
        $('toastText');

    if (
        !toast ||
        !toastText
    ) {

        /*
           Si el HTML no tiene sistema de Toast,
           utilizamos una notificación sencilla.
        */

        console.log(
            message
        );

        return;
    }

    toastText.textContent =
        message;

    toast.classList.add(
        'show'
    );

    clearTimeout(
        showToast.timer
    );

    showToast.timer =
        setTimeout(
            () => {

                toast.classList.remove(
                    'show'
                );

            },
            3500
        );
}


/* =========================================================
   RENDERIZAR CATÁLOGO
========================================================= */

function renderMovies() {

    const grid =
        $('moviesGrid');

    const emptyState =
        $('noResults');

    if (!grid) {

        console.error(
            'No existe #moviesGrid en index.html'
        );

        return;
    }

    const filteredMovies =
        getFilteredMovies();

    grid.innerHTML = '';


    filteredMovies.forEach(
        movie => {

            const isFavorite =
                favorites.includes(
                    movie.id
                );

            const card =
                document.createElement(
                    'article'
                );

            card.className =
                'movie-card';

            card.dataset.movieId =
                movie.id;


            card.innerHTML = `

                <div class="movie-poster">

                    <img
                        src="${movie.poster}"
                        alt="Póster de ${movie.title}"
                        loading="lazy"
                    >

                    <div class="movie-rating">
                        ⭐ ${movie.rating}
                    </div>

                    ${
                        isFavorite
                            ? `
                                <div class="favorite-badge">
                                    ♥
                                </div>
                              `
                            : ''
                    }

                </div>


                <div class="movie-info">

                    <span class="movie-genre">
                        ${movie.genre}
                    </span>

                    <h3>
                        ${movie.title}
                    </h3>

                    <div class="movie-meta">
                        <span>
                            ${movie.year}
                        </span>

                        <span>
                            •
                        </span>

                        <span>
                            ${movie.duration}
                        </span>
                    </div>


                    <div class="movie-actions">

                        <button
                            type="button"
                            class="movie-button"
                            data-action="details"
                            data-movie-id="${movie.id}"
                        >
                            Ver detalles
                        </button>

                    </div>

                </div>

            `;


            const image =
                card.querySelector(
                    'img'
                );


            if (image) {

                image.addEventListener(
                    'error',
                    () => {

                        /*
                           Evitamos bucles si incluso
                           placeholder.jpg tuviera algún
                           problema.
                        */

                        if (
                            image.src !==
                            PLACEHOLDER_POSTER
                        ) {

                            image.src =
                                PLACEHOLDER_POSTER;

                        }

                    },
                    {
                        once: true
                    }
                );

            }


            grid.appendChild(
                card
            );

        }
    );


    /* =====================================================
       CONTADOR
    ===================================================== */

    const movieCount =
        $('movieCount');

    if (movieCount) {

        movieCount.textContent =
            `${filteredMovies.length} ${
                filteredMovies.length === 1
                    ? 'película'
                    : 'películas'
            }`;

    }


    /* =====================================================
       CATEGORÍA ACTIVA
    ===================================================== */

    const activeCategory =
        $('activeCategory');

    if (activeCategory) {

        if (showingFavorites) {

            activeCategory.textContent =
                filteredMovies.length
                    ? 'Mis películas favoritas'
                    : 'No tienes películas favoritas';

        }

        else if (
            currentSearch.trim()
        ) {

            activeCategory.textContent =
                `Resultados para "${currentSearch.trim()}"`;

        }

        else {

            activeCategory.textContent =
                genreNames[
                    currentGenre
                ] ||
                genreNames.todos;

        }

    }


    /* =====================================================
       ESTADO SIN RESULTADOS
    ===================================================== */

    if (emptyState) {

        emptyState.classList.toggle(
            'show',
            filteredMovies.length === 0
        );

    }

}


/* =========================================================
   CAMBIAR CATEGORÍA
========================================================= */

function setActiveCategory(
    genre,
    options = {}
) {

    const track =
        options.track !== false;

    currentGenre =
        genre;

    showingFavorites =
        false;


    document
        .querySelectorAll(
            '.filter-button'
        )
        .forEach(
            button => {

                button.classList.toggle(
                    'active',
                    button.dataset.genre ===
                        genre
                );

            }
        );


    const favoritesButton =
        $('showFavorites');

    if (favoritesButton) {

        favoritesButton.classList.remove(
            'active'
        );

    }


    renderMovies();


    if (track) {

        trackEvent(
            'filtro_genero',
            {
                genero:
                    genreNames[
                        genre
                    ] || genre,

                categoria:
                    genre
            }
        );

    }

}


/* =========================================================
   CONFIGURAR FILTROS
========================================================= */

function setupFilters() {

    document
        .querySelectorAll(
            '.filter-button'
        )
        .forEach(
            button => {

                button.addEventListener(
                    'click',
                    () => {

                        currentSearch =
                            '';

                        const input =
                            $('searchInput');

                        if (input) {

                            input.value =
                                '';

                        }


                        setActiveCategory(
                            button.dataset.genre
                        );

                    }
                );

            }
        );

}


/* =========================================================
   BUSCADOR
========================================================= */

function setupSearch() {

    const input =
        $('searchInput');

    const clearButton =
        $('clearSearch');


    if (input) {

        input.addEventListener(
            'input',
            () => {

                currentSearch =
                    input.value;

                showingFavorites =
                    false;


                const favoritesButton =
                    $('showFavorites');

                if (favoritesButton) {

                    favoritesButton.classList.remove(
                        'active'
                    );

                }


                document
                    .querySelectorAll(
                        '.filter-button'
                    )
                    .forEach(
                        button => {

                            button.classList.toggle(
                                'active',
                                button.dataset.genre ===
                                    'todos'
                            );

                        }
                    );


                currentGenre =
                    'todos';


                renderMovies();


                clearTimeout(
                    searchTimer
                );


                searchTimer =
                    setTimeout(
                        () => {

                            const search =
                                currentSearch.trim();

                            if (search) {

                                trackEvent(
                                    'buscar_pelicula',
                                    {
                                        termino:
                                            search
                                    }
                                );

                            }

                        },
                        700
                    );

            }
        );

    }


    if (clearButton) {

        clearButton.addEventListener(
            'click',
            () => {

                currentSearch =
                    '';

                const input =
                    $('searchInput');

                if (input) {

                    input.value =
                        '';

                }


                setActiveCategory(
                    'todos',
                    {
                        track: false
                    }
                );


                trackEvent(
                    'limpiar_busqueda'
                );

            }
        );

    }


    const reset =
        $('resetSearch');

    if (reset) {

        reset.addEventListener(
            'click',
            () => {

                currentSearch =
                    '';

                showingFavorites =
                    false;


                const input =
                    $('searchInput');

                if (input) {

                    input.value =
                        '';

                }


                setActiveCategory(
                    'todos'
                );


                trackEvent(
                    'restablecer_catalogo'
                );

            }
        );

    }

}


/* =========================================================
   MODAL
========================================================= */

function updateFavoriteButton() {

    const button =
        $('modalFavorite');

    if (
        !button ||
        !selectedMovie
    ) {

        return;
    }


    const isFavorite =
        favorites.includes(
            selectedMovie.id
        );


    button.textContent =
        isFavorite
            ? '♥'
            : '♡';


    button.title =
        isFavorite
            ? 'Quitar de favoritos'
            : 'Añadir a favoritos';


    button.setAttribute(
        'aria-label',
        button.title
    );


    button.classList.toggle(
        'is-favorite',
        isFavorite
    );

}


function openModal(movie) {

    if (!movie) {
        return;
    }


    selectedMovie =
        movie;


    const poster =
        $('modalPoster');

    if (poster) {

        poster.src =
            movie.poster;

        poster.alt =
            `Póster de ${movie.title}`;


        poster.onerror =
            () => {

                poster.src =
                    PLACEHOLDER_POSTER;

            };

    }


    const genre =
        $('modalGenre');

    if (genre) {

        genre.textContent =
            movie.genre;

    }


    const title =
        $('modalTitle');

    if (title) {

        title.textContent =
            movie.title;

    }


    const year =
        $('modalYear');

    if (year) {

        year.textContent =
            movie.year;

    }


    const duration =
        $('modalDuration');

    if (duration) {

        duration.textContent =
            movie.duration;

    }


    const rating =
        $('modalRating');

    if (rating) {

        rating.textContent =
            `⭐ ${movie.rating}`;

    }


    const description =
        $('modalDescription');

    if (description) {

        description.textContent =
            movie.description;

    }


    const director =
        $('modalDirector');

    if (director) {

        director.textContent =
            movie.director;

    }


    const trailer =
        $('modalTrailer');

    if (trailer) {

        trailer.href =
            movie.trailer;

    }


    updateFavoriteButton();


    const modal =
        $('movieModal');

    if (modal) {

        modal.classList.add(
            'active'
        );

        modal.setAttribute(
            'aria-hidden',
            'false'
        );

    }


    document.body.classList.add(
        'modal-open'
    );


    trackEvent(
        'seleccionar_pelicula',
        {

            pelicula:
                movie.title,

            pelicula_id:
                String(movie.id),

            genero:
                movie.genre,

            anio:
                String(movie.year),

            puntuacion:
                movie.rating

        }
    );

}


function closeModal() {

    const modal =
        $('movieModal');

    if (modal) {

        modal.classList.remove(
            'active'
        );

        modal.setAttribute(
            'aria-hidden',
            'true'
        );

    }


    document.body.classList.remove(
        'modal-open'
    );


    selectedMovie =
        null;

}


/* =========================================================
   CONFIGURAR MODAL
========================================================= */

function setupModal() {

    const close =
        $('modalClose');

    const overlay =
        $('modalOverlay');


    if (close) {

        close.addEventListener(
            'click',
            closeModal
        );

    }


    if (overlay) {

        overlay.addEventListener(
            'click',
            closeModal
        );

    }


    document.addEventListener(
        'keydown',
        event => {

            if (
                event.key ===
                'Escape'
            ) {

                closeModal();

            }

        }
    );


    /* =====================================================
       TRÁILER
    ===================================================== */

    const trailer =
        $('modalTrailer');

    if (trailer) {

        trailer.addEventListener(
            'click',
            () => {

                if (!selectedMovie) {
                    return;
                }


                trackEvent(
                    'ver_trailer',
                    {

                        pelicula:
                            selectedMovie.title,

                        pelicula_id:
                            String(
                                selectedMovie.id
                            ),

                        genero:
                            selectedMovie.genre

                    }
                );

            }
        );

    }


    /* =====================================================
       RESEÑA
    ===================================================== */

    const review =
        $('modalReview');

    if (review) {

        review.addEventListener(
            'click',
            () => {

                if (!selectedMovie) {
                    return;
                }


                trackEvent(
                    'leer_resena',
                    {

                        pelicula:
                            selectedMovie.title,

                        pelicula_id:
                            String(
                                selectedMovie.id
                            )

                    }
                );


                showToast(
                    selectedMovie.review
                );

            }
        );

    }


    /* =====================================================
       FAVORITO
    ===================================================== */

    const favorite =
        $('modalFavorite');

    if (favorite) {

        favorite.addEventListener(
            'click',
            () => {

                if (
                    selectedMovie
                ) {

                    toggleFavorite(
                        selectedMovie
                    );

                }

            }
        );

    }


    /* =====================================================
       COMPARTIR
    ===================================================== */

    const share =
        $('modalShare');

    if (share) {

        share.addEventListener(
            'click',
            shareSelectedMovie
        );

    }

}


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(movie) {

    if (!movie) {
        return;
    }


    const index =
        favorites.indexOf(
            movie.id
        );


    if (index === -1) {

        favorites.push(
            movie.id
        );


        showToast(
            `${movie.title} añadido a favoritos`
        );


        trackEvent(
            'agregar_favorito',
            {

                pelicula:
                    movie.title,

                pelicula_id:
                    String(
                        movie.id
                    ),

                genero:
                    movie.genre

            }
        );

    }

    else {

        favorites.splice(
            index,
            1
        );


        showToast(
            `${movie.title} eliminado de favoritos`
        );


        trackEvent(
            'eliminar_favorito',
            {

                pelicula:
                    movie.title,

                pelicula_id:
                    String(
                        movie.id
                    ),

                genero:
                    movie.genre

            }
        );

    }


    saveFavorites();

    updateFavoriteButton();

    renderMovies();

}


/* =========================================================
   BOTÓN FAVORITOS
========================================================= */

function setupFavorites() {

    const button =
        $('showFavorites');

    if (!button) {
        return;
    }


    button.addEventListener(
        'click',
        () => {

            showingFavorites =
                !showingFavorites;


            if (showingFavorites) {

                currentGenre =
                    'todos';

                currentSearch =
                    '';


                const input =
                    $('searchInput');

                if (input) {

                    input.value =
                        '';

                }


                document
                    .querySelectorAll(
                        '.filter-button'
                    )
                    .forEach(
                        filter => {

                            filter.classList.toggle(
                                'active',
                                filter.dataset.genre ===
                                    'todos'
                            );

                        }
                    );


                button.classList.add(
                    'active'
                );


                trackEvent(
                    'ver_favoritos',
                    {

                        cantidad:
                            favorites.length

                    }
                );

            }

            else {

                button.classList.remove(
                    'active'
                );

            }


            renderMovies();

        }
    );

}


/* =========================================================
   COMPARTIR PELÍCULA
========================================================= */

async function shareSelectedMovie() {

    if (!selectedMovie) {
        return;
    }


    const url =
        new URL(
            window.location.href
        );


    url.searchParams.set(
        'pelicula',
        selectedMovie.id
    );


    const shareData = {

        title:
            `${selectedMovie.title} | CineAnalytics`,

        text:
            `Descubre ${selectedMovie.title} en CineAnalytics.`,

        url:
            url.toString()

    };


    try {

        if (
            navigator.share
        ) {

            await navigator.share(
                shareData
            );


            trackEvent(
                'compartir_pelicula',
                {

                    pelicula:
                        selectedMovie.title,

                    pelicula_id:
                        String(
                            selectedMovie.id
                        ),

                    metodo:
                        'nativo'

                }
            );

        }

        else if (
            navigator.clipboard &&
            navigator.clipboard.writeText
        ) {

            await navigator.clipboard.writeText(
                url.toString()
            );


            showToast(
                'Enlace copiado al portapapeles'
            );


            trackEvent(
                'compartir_pelicula',
                {

                    pelicula:
                        selectedMovie.title,

                    pelicula_id:
                        String(
                            selectedMovie.id
                        ),

                    metodo:
                        'copiar_enlace'

                }
            );

        }

        else {

            window.prompt(
                'Copia este enlace:',
                url.toString()
            );

        }

    }

    catch (error) {

        /*
           El usuario canceló el diálogo
           de compartir.
        */

        console.log(
            'Compartir cancelado.'
        );

    }

}


/* =========================================================
   PELÍCULA ALEATORIA
========================================================= */

function setupRandomMovie() {

    const button =
        $('randomMovie');

    if (!button) {
        return;
    }


    button.addEventListener(
        'click',
        () => {

            const available =
                getFilteredMovies();


            const pool =
                available.length
                    ? available
                    : movies;


            const randomIndex =
                Math.floor(
                    Math.random() *
                    pool.length
                );


            const movie =
                pool[
                    randomIndex
                ];


            openModal(
                movie
            );


            trackEvent(
                'pelicula_aleatoria',
                {

                    pelicula:
                        movie.title,

                    pelicula_id:
                        String(
                            movie.id
                        )

                }
            );

        }
    );

}


/* =========================================================
   CLIC SOBRE TARJETAS
========================================================= */

function setupMovieGrid() {

    const grid =
        $('moviesGrid');

    if (!grid) {
        return;
    }


    grid.addEventListener(
        'click',
        event => {

            const button =
                event.target.closest(
                    '[data-action="details"]'
                );


            const card =
                event.target.closest(
                    '.movie-card'
                );


            const id =
                button?.dataset.movieId ||
                card?.dataset.movieId;


            if (!id) {
                return;
            }


            const movie =
                movies.find(
                    item =>
                        item.id ===
                        Number(id)
                );


            if (movie) {

                openModal(
                    movie
                );

            }

        }
    );

}


/* =========================================================
   NAVEGACIÓN
========================================================= */

function setupNavigation() {

    document
        .querySelectorAll(
            '.nav-link'
        )
        .forEach(
            link => {

                link.addEventListener(
                    'click',
                    () => {

                        document
                            .querySelectorAll(
                                '.nav-link'
                            )
                            .forEach(
                                item => {

                                    item.classList.remove(
                                        'active'
                                    );

                                }
                            );


                        link.classList.add(
                            'active'
                        );


                        trackEvent(
                            'navegacion',
                            {

                                destino:
                                    link.textContent.trim()

                            }
                        );


                        const nav =
                            $('navMenu');


                        if (nav) {

                            nav.classList.remove(
                                'open'
                            );

                        }

                    }
                );

            }
        );


    const mobileMenu =
        $('mobileMenu');


    if (mobileMenu) {

        mobileMenu.addEventListener(
            'click',
            () => {

                const nav =
                    $('navMenu');

                if (!nav) {
                    return;
                }


                nav.classList.toggle(
                    'open'
                );


                mobileMenu.setAttribute(
                    'aria-expanded',

                    nav.classList.contains(
                        'open'
                    )
                        ? 'true'
                        : 'false'
                );

            }
        );

    }


    const explore =
        $('exploreButton');


    if (explore) {

        explore.addEventListener(
            'click',
            () => {

                trackEvent(
                    'explorar_catalogo'
                );

            }
        );

    }


    const logo =
        $('logoLink');


    if (logo) {

        logo.addEventListener(
            'click',
            () => {

                trackEvent(
                    'clic_logo'
                );

            }
        );

    }

}


/* =========================================================
   ABRIR PELÍCULA DESDE URL
========================================================= */

function openMovieFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(
            params.get(
                'pelicula'
            )
        );


    if (!id) {
        return;
    }


    const movie =
        movies.find(
            item =>
                item.id === id
        );


    if (!movie) {
        return;
    }


    setTimeout(
        () => {

            openModal(
                movie
            );

        },
        500
    );

}


/* =========================================================
   VERIFICAR GOOGLE ANALYTICS
========================================================= */

function verifyAnalytics() {

    if (
        typeof window.gtag ===
        'function'
    ) {

        console.log(
            `✅ Google Analytics 4 activo: ${GA4_ID}`
        );

    }

    else {

        console.warn(
            '⚠️ Google Analytics todavía no está disponible.'
        );

    }

}


/* =========================================================
   EVENTO DE VISTA DE PÁGINA
========================================================= */

function sendInitialAnalyticsEvent() {

    trackEvent(
        'visita_cineanalytics',
        {

            peliculas_disponibles:
                movies.length,

            categorias_disponibles:
                Object.keys(
                    genreNames
                ).length - 1,

            ga4_measurement_id:
                GA4_ID

        }
    );

}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

function init() {

    console.log(
        '🎬 CineAnalytics iniciando...'
    );


    console.log(
        '📁 Carpeta de pósters:',
        POSTERS_PATH
    );


    console.log(
        `🎞️ ${movies.length} películas cargadas.`
    );


    setupFilters();

    setupSearch();

    setupModal();

    setupFavorites();

    setupRandomMovie();

    setupMovieGrid();

    setupNavigation();

    renderMovies();

    openMovieFromURL();

    verifyAnalytics();

    sendInitialAnalyticsEvent();


    console.log(
        '✅ CineAnalytics listo.'
    );

}


/* =========================================================
   ARRANQUE
========================================================= */

if (
    document.readyState ===
    'loading'
) {

    document.addEventListener(
        'DOMContentLoaded',
        init
    );

}

else {

    init();

}