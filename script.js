/* =========================================
   CINEANALYTICS
   JavaScript principal
========================================= */


/* =========================================
   BASE DE DATOS DE PELÍCULAS
========================================= */

const movies = [

    {
        id: 1,

        title: "Interstellar",

        year: 2014,

        genre: "Ciencia ficción",

        rating: 8.7,

        poster:
            "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",

        description:
            "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",

        review:
            "Interstellar combina ciencia ficción, exploración espacial y drama familiar en una historia ambiciosa sobre el futuro de la humanidad.",

        trailer:
            "https://www.youtube.com/results?search_query=Interstellar+trailer"
    },


    {
        id: 2,

        title: "The Batman",

        year: 2022,

        genre: "Acción",

        rating: 8.5,

        poster:
            "https://image.tmdb.org/t/p/w780/74xTEgt7R36Fpooo50r9T25onhq.jpg",

        description:
            "Batman investiga una serie de asesinatos que revelan una conspiración relacionada con el pasado de Gotham.",

        review:
            "Una versión oscura y detectivesca de Batman que destaca por su atmósfera, fotografía y actuación.",

        trailer:
            "https://www.youtube.com/results?search_query=The+Batman+2022+trailer"
    },


    {
        id: 3,

        title: "Harry Potter",

        year: 2001,

        genre: "Fantasía",

        rating: 8.2,

        poster:
            "https://image.tmdb.org/t/p/w780/1NqwE6LP9IEd1SYvutW1fHjB5XG.jpg",

        description:
            "Un joven descubre que pertenece al mundo mágico y comienza sus estudios en el Colegio Hogwarts.",

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

        poster:
            "https://image.tmdb.org/t/p/w780/fjTU1Bgh3KJu4lR3I7ZQ5C3p7F8.jpg",

        description:
            "Un parque temático lleno de dinosaurios clonados se convierte en una lucha por la supervivencia.",

        review:
            "Una de las películas de aventuras más influyentes de la historia del cine, con efectos visuales revolucionarios.",

        trailer:
            "https://www.youtube.com/results?search_query=Jurassic+Park+1993+trailer"
    }

];


/* =========================================
   ELEMENTOS HTML
========================================= */

const moviesGrid = document.getElementById("moviesGrid");

const searchInput = document.getElementById("searchInput");

const clearSearch = document.getElementById("clearSearch");

const movieCount = document.getElementById("movieCount");

const noResults = document.getElementById("noResults");

const resetSearch = document.getElementById("resetSearch");

const modal = document.getElementById("movieModal");

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


/* =========================================
   MOSTRAR PELÍCULAS
========================================= */

function displayMovies(movieList) {

    moviesGrid.innerHTML = "";


    movieList.forEach(movie => {

        const movieCard = document.createElement("article");

        movieCard.classList.add("movie-card");


        movieCard.innerHTML = `

            <div class="movie-poster">

                <img
                    src="${movie.poster}"
                    alt="Póster de ${movie.title}"
                    loading="lazy"
                >

                <span class="movie-rating">
                    ⭐ ${movie.rating}
                </span>

            </div>


            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>


                <div class="movie-meta">

                    <span>${movie.year}</span>

                    <span>•</span>

                    <span>${movie.genre}</span>

                </div>


                <p class="movie-description">
                    ${movie.description}
                </p>


                <div class="movie-actions">

                    <button
                        class="trailer-card-button"
                        data-id="${movie.id}"
                    >
                        ▶ Tráiler
                    </button>

                    <button
                        class="review-card-button"
                        data-id="${movie.id}"
                    >
                        📖 Reseña
                    </button>

                </div>

            </div>
        `;


        moviesGrid.appendChild(movieCard);

    });


    /*
        Actualizar contador
    */

    movieCount.textContent =
        `${movieList.length} ${movieList.length === 1 ? "película" : "películas"}`;


    /*
        Mostrar / ocultar mensaje
    */

    if (movieList.length === 0) {

        moviesGrid.style.display = "none";

        noResults.style.display = "block";

    } else {

        moviesGrid.style.display = "grid";

        noResults.style.display = "none";

    }


    /*
        Activar botones
    */

    addMovieButtonEvents();

}


/* =========================================
   EVENTOS DE LAS PELÍCULAS
========================================= */

function addMovieButtonEvents() {

    const trailerButtons =
        document.querySelectorAll(".trailer-card-button");


    const reviewButtons =
        document.querySelectorAll(".review-card-button");


    /*
        Botones de tráiler
    */

    trailerButtons.forEach(button => {

        button.addEventListener("click", function () {

            const movieId =
                Number(this.dataset.id);

            const movie =
                movies.find(movie => movie.id === movieId);


            if (!movie) return;


            /*
                FUTURO EVENTO GOOGLE ANALYTICS

                Aquí registraremos:

                ver_trailer

                película: nombre de la película
            */

            console.log(
                "Evento: ver_trailer",
                movie.title
            );


            openMovieModal(movie);

        });

    });


    /*
        Botones de reseña
    */

    reviewButtons.forEach(button => {

        button.addEventListener("click", function () {

            const movieId =
                Number(this.dataset.id);

            const movie =
                movies.find(movie => movie.id === movieId);


            if (!movie) return;


            /*
                FUTURO EVENTO GOOGLE ANALYTICS

                Aquí registraremos:

                leer_resena

                película: nombre de la película
            */

            console.log(
                "Evento: leer_resena",
                movie.title
            );


            openMovieModal(movie);

        });

    });

}


/* =========================================
   ABRIR MODAL
========================================= */

function openMovieModal(movie) {

    modalPoster.src = movie.poster;

    modalPoster.alt =
        `Póster de ${movie.title}`;

    modalGenre.textContent =
        movie.genre;

    modalTitle.textContent =
        movie.title;

    modalYear.textContent =
        movie.year;

    modalRating.textContent =
        `⭐ ${movie.rating}`;

    modalDescription.textContent =
        movie.description;

    modalTrailer.href =
        movie.trailer;


    /*
        Guardamos la reseña
        temporalmente en el botón.
    */

    modalReview.dataset.review =
        movie.review;


    modal.classList.add("show");

    document.body.style.overflow = "hidden";


    /*
        FUTURO EVENTO GOOGLE ANALYTICS

        seleccionar_pelicula
    */

    console.log(
        "Evento: seleccionar_pelicula",
        movie.title
    );

}


/* =========================================
   CERRAR MODAL
========================================= */

function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    closeModal
);


/*
    Cerrar con ESC
*/

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================
   BOTÓN DE RESEÑA
========================================= */

modalReview.addEventListener(
    "click",
    function () {

        const review =
            this.dataset.review;


        alert(
            "⭐ Reseña de CineAnalytics\n\n" +
            review
        );


        /*
            FUTURO EVENTO GOOGLE ANALYTICS

            leer_resena
        */

        console.log(
            "Evento: leer_resena"
        );

    }
);


/* =========================================
   BUSCADOR
========================================= */

searchInput.addEventListener(
    "input",
    function () {

        const search =
            this.value
                .toLowerCase()
                .trim();


        /*
            Mostrar botón X
        */

        if (search.length > 0) {

            clearSearch.style.display =
                "block";

        } else {

            clearSearch.style.display =
                "none";

        }


        /*
            Filtrar películas
        */

        const filteredMovies =
            movies.filter(movie => {

                return (

                    movie.title
                        .toLowerCase()
                        .includes(search)

                    ||

                    movie.genre
                        .toLowerCase()
                        .includes(search)

                    ||

                    movie.year
                        .toString()
                        .includes(search)

                );

            });


        displayMovies(filteredMovies);


        /*
            FUTURO EVENTO GOOGLE ANALYTICS

            buscar_pelicula

            Lo añadiremos cuando
            conectemos GA4.
        */

        if (search.length > 2) {

            console.log(
                "Búsqueda:",
                search
            );

        }

    }
);


/* =========================================
   LIMPIAR BUSCADOR
========================================= */

clearSearch.addEventListener(
    "click",
    function () {

        searchInput.value = "";

        clearSearch.style.display =
            "none";

        displayMovies(movies);

    }
);


/* =========================================
   RESTABLECER BÚSQUEDA
========================================= */

resetSearch.addEventListener(
    "click",
    function () {

        searchInput.value = "";

        clearSearch.style.display =
            "none";

        displayMovies(movies);

    }
);


/* =========================================
   NAVEGACIÓN
========================================= */

document.querySelectorAll(
    ".nav-link"
).forEach(link => {

    link.addEventListener(
        "click",
        function () {

            document
                .querySelectorAll(".nav-link")
                .forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


            this.classList.add("active");

        }
    );

});


/* =========================================
   BOTÓN EXPLORAR
========================================= */

document
    .getElementById("exploreButton")
    .addEventListener(
        "click",
        function () {

            /*
                Futuro evento GA4:

                explorar_catalogo
            */

            console.log(
                "Evento: explorar_catalogo"
            );

        }
    );


/* =========================================
   INICIALIZAR SITIO
========================================= */

displayMovies(movies);


console.log(
    "CineAnalytics iniciado correctamente."
);