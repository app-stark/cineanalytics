/* =========================================================
   CINEANALYTICS
   Google Analytics 4
   Measurement ID: G-D7DH5RBFXV
========================================================= */


/* =========================================================
   DATOS DE LAS PELÍCULAS
========================================================= */

const movies = [
    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genre: "Ciencia ficción",
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description:
            "Un grupo de astronautas emprende una misión a través de un agujero de gusano para encontrar un nuevo hogar para la humanidad.",
        review:
            "Interstellar combina ciencia ficción, exploración espacial y drama humano en una experiencia cinematográfica ambiciosa. Su historia plantea preguntas sobre el tiempo, el amor y la supervivencia.",
        trailer:
            "https://www.youtube.com/results?search_query=Interstellar+trailer"
    },

    {
        id: 2,
        title: "Batman",
        year: 2022,
        genre: "Acción",
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w780/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        description:
            "Batman se enfrenta a un asesino que está dejando una serie de pistas y secretos que revelan la corrupción de Gotham City.",
        review:
            "Una versión oscura y detectivesca del personaje de Batman. La película destaca por su atmósfera, fotografía y una interpretación más sombría del héroe.",
        trailer:
            "https://www.youtube.com/results?search_query=The+Batman+2022+trailer"
    },

    {
        id: 3,
        title: "Harry Potter",
        year: 2001,
        genre: "Fantasía",
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w780/fbxQ44VRdM2PVzHSNajUseUteem.jpg",
        description:
            "Un joven descubre que pertenece al mundo mágico y comienza sus estudios en el Colegio Hogwarts de Magia y Hechicería.",
        review:
            "Una aventura fantástica que marcó a toda una generación y presentó uno de los universos cinematográficos más reconocibles.",
        trailer:
            "https://www.youtube.com/results?search_query=Harry+Potter+Philosophers+Stone+trailer"
    },

    {
        id: 4,
        title: "Jurassic Park",
        year: 1993,
        genre: "Aventura",
        rating: 8.1,
        poster: "https://image.tmdb.org/t/p/w780/b1xCNd6xQ4p8QK7H0q4X2zQ8LhQ.jpg",
        description:
            "Un parque temático lleno de dinosaurios clonados se convierte en una lucha por la supervivencia cuando las criaturas escapan.",
        review:
            "Una de las películas de aventuras más influyentes de la historia del cine, famosa por sus efectos visuales y su capacidad para crear tensión.",
        trailer:
            "https://www.youtube.com/results?search_query=Jurassic+Park+1993+trailer"
    }
];


/* =========================================================
   GOOGLE ANALYTICS 4
========================================================= */

/*
    Función central para enviar eventos a GA4.

    Comprobamos primero que gtag exista para evitar errores
    si Analytics todavía no ha terminado de cargar.
*/

function sendAnalyticsEvent(eventName, parameters = {}) {

    if (typeof gtag === "function") {

        gtag("event", eventName, parameters);

        console.log(
            "GA4 EVENT:",
            eventName,
            parameters
        );

    } else {

        console.warn(
            "Google Analytics todavía no está disponible."
        );

    }
}


/* =========================================================
   ELEMENTOS DEL DOM
========================================================= */

const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const movieCount = document.getElementById("movieCount");
const noResults = document.getElementById("noResults");
const resetSearch = document.getElementById("resetSearch");

const movieModal = document.getElementById("movieModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalPoster = document.getElementById("modalPoster");
const modalGenre = document.getElementById("modalGenre");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");
const modalTrailer = document.getElementById("modalTrailer");
const modalReview = document.getElementById("modalReview");

const exploreButton = document.getElementById("exploreButton");


/* =========================================================
   VARIABLES
========================================================= */

let currentMovie = null;


/* =========================================================
   MOSTRAR PELÍCULAS
========================================================= */

function renderMovies(movieList) {

    moviesGrid.innerHTML = "";

    movieCount.textContent =
        `${movieList.length} ${movieList.length === 1 ? "película" : "películas"}`;


    if (movieList.length === 0) {

        noResults.classList.add("show");

        return;

    }


    noResults.classList.remove("show");


    movieList.forEach(movie => {

        const card = document.createElement("article");

        card.className = "movie-card";


        card.innerHTML = `

            <div class="movie-poster">

                <img
                    src="${movie.poster}"
                    alt="Póster de ${movie.title}"
                    loading="lazy"
                    onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
                >

                <div class="movie-rating">
                    ⭐ ${movie.rating}
                </div>

            </div>


            <div class="movie-info">

                <span class="movie-genre">
                    ${movie.genre}
                </span>

                <h3>
                    ${movie.title}
                </h3>

                <p class="movie-year">
                    ${movie.year}
                </p>

                <div class="movie-actions">

                    <button
                        class="movie-button"
                        data-action="open"
                        data-id="${movie.id}"
                    >
                        Ver película
                    </button>

                </div>

            </div>

        `;


        moviesGrid.appendChild(card);

    });


    /*
        Añadimos listeners a las tarjetas.
    */

    document
        .querySelectorAll('[data-action="open"]')
        .forEach(button => {

            button.addEventListener("click", () => {

                const movieId = Number(button.dataset.id);

                openMovie(movieId);

            });

        });

}


/* =========================================================
   ABRIR PELÍCULA
========================================================= */

function openMovie(movieId) {

    const movie = movies.find(
        item => item.id === movieId
    );


    if (!movie) {
        return;
    }


    currentMovie = movie;


    /*
        GA4

        Registramos qué película seleccionó el usuario.
    */

    sendAnalyticsEvent(
        "seleccionar_pelicula",
        {
            pelicula: movie.title,
            genero: movie.genre,
            anio: movie.year,
            valoracion: movie.rating
        }
    );


    /*
        Actualizamos el modal.
    */

    modalPoster.src = movie.poster;
    modalPoster.alt = `Póster de ${movie.title}`;

    modalGenre.textContent = movie.genre;
    modalTitle.textContent = movie.title;
    modalYear.textContent = movie.year;
    modalRating.textContent = `⭐ ${movie.rating}`;
    modalDescription.textContent = movie.description;

    modalTrailer.href = movie.trailer;


    /*
        Mostramos el modal.
    */

    movieModal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================================
   CERRAR MODAL
========================================================= */

function closeMovie() {

    movieModal.classList.remove("active");

    document.body.classList.remove("modal-open");

    currentMovie = null;

}


/* =========================================================
   BOTÓN VER TRÁILER
========================================================= */

modalTrailer.addEventListener("click", () => {

    if (!currentMovie) {
        return;
    }


    /*
        Evento GA4:
        ver_trailer

        Este será uno de nuestros eventos principales.
    */

    sendAnalyticsEvent(
        "ver_trailer",
        {
            pelicula: currentMovie.title,
            genero: currentMovie.genre,
            anio: currentMovie.year,
            valoracion: currentMovie.rating
        }
    );

});


/* =========================================================
   BOTÓN LEER RESEÑA
========================================================= */

modalReview.addEventListener("click", () => {

    if (!currentMovie) {
        return;
    }


    /*
        Evento GA4:
        leer_resena
    */

    sendAnalyticsEvent(
        "leer_resena",
        {
            pelicula: currentMovie.title,
            genero: currentMovie.genre,
            anio: currentMovie.year,
            valoracion: currentMovie.rating
        }
    );


    /*
        Mostramos la reseña.
    */

    alert(
        `${currentMovie.title}\n\n${currentMovie.review}`
    );

});


/* =========================================================
   BUSCADOR
========================================================= */

let lastSearch = "";


searchInput.addEventListener("input", () => {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    /*
        Si no hay búsqueda mostramos todo.
    */

    if (searchTerm === "") {

        renderMovies(movies);

        return;

    }


    /*
        Buscamos por:
        - título
        - género
        - año
    */

    const filteredMovies = movies.filter(movie => {

        return (
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.genre.toLowerCase().includes(searchTerm) ||
            movie.year.toString().includes(searchTerm)
        );

    });


    renderMovies(filteredMovies);


    /*
        Para no enviar cientos de eventos mientras el usuario
        escribe una palabra, registramos la búsqueda solamente
        cuando cambia el término.
    */

    if (searchTerm !== lastSearch) {

        sendAnalyticsEvent(
            "buscar_pelicula",
            {
                termino_busqueda: searchTerm,
                resultados: filteredMovies.length
            }
        );

        lastSearch = searchTerm;

    }

});


/* =========================================================
   LIMPIAR BÚSQUEDA
========================================================= */

clearSearch.addEventListener("click", () => {

    searchInput.value = "";

    lastSearch = "";

    renderMovies(movies);


    sendAnalyticsEvent(
        "limpiar_busqueda"
    );

});


/* =========================================================
   REINICIAR BÚSQUEDA
========================================================= */

resetSearch.addEventListener("click", () => {

    searchInput.value = "";

    lastSearch = "";

    renderMovies(movies);


    sendAnalyticsEvent(
        "reset_busqueda"
    );

});


/* =========================================================
   BOTÓN EXPLORAR PELÍCULAS
========================================================= */

if (exploreButton) {

    exploreButton.addEventListener("click", () => {

        sendAnalyticsEvent(
            "explorar_catalogo",
            {
                catalogo: "peliculas_destacadas"
            }
        );

    });

}


/* =========================================================
   NAVEGACIÓN
========================================================= */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            const section =
                link.textContent
                    .trim()
                    .toLowerCase();


            sendAnalyticsEvent(
                "navegacion",
                {
                    seccion: section
                }
            );

        });

    });


/* =========================================================
   LOGO
========================================================= */

const logoLink = document.getElementById("logoLink");


if (logoLink) {

    logoLink.addEventListener("click", () => {

        sendAnalyticsEvent(
            "click_logo"
        );

    });

}


/* =========================================================
   CERRAR MODAL
========================================================= */

modalClose.addEventListener(
    "click",
    closeMovie
);


modalOverlay.addEventListener(
    "click",
    closeMovie
);


/* =========================================================
   CERRAR MODAL CON ESC
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeMovie();

    }

});


/* =========================================================
   INICIALIZAR PÁGINA
========================================================= */

renderMovies(movies);


/* =========================================================
   EVENTO DE CARGA DEL CATÁLOGO
========================================================= */

sendAnalyticsEvent(
    "catalogo_cargado",
    {
        numero_peliculas: movies.length
    }
);


console.log(
    "🎬 CineAnalytics iniciado correctamente."
);

console.log(
    `📊 Google Analytics 4 configurado: G-D7DH5RBFXV`
);