# CineAnalytics — Google Analytics 4

Proyecto académico de analítica web publicado mediante GitHub Pages.

## Estructura

```text
cineanalytics/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── posters/
        ├── interstellar.jpg
        ├── inception.jpg
        ├── matrix.jpg
        ├── avatar.jpg
        ├── batman.jpg
        ├── dark-knight.jpg
        ├── avengers.jpg
        ├── gladiator.jpg
        ├── harry-potter.jpg
        ├── lotr.jpg
        ├── pirates.jpg
        ├── jurassic.jpg
        ├── back-future.jpg
        ├── indiana.jpg
        ├── parasite.jpg
        ├── shawshank.jpg
        └── placeholder.jpg
```

## Google Analytics 4

ID de medición configurado:

`G-D7DH5RBFXV`

El `index.html` carga `gtag.js` y configura GA4. El `script.js` envía eventos de interacción.

### Eventos principales

- `visita_cineanalytics`
- `navegacion`
- `explorar_catalogo`
- `pelicula_aleatoria`
- `buscar_pelicula`
- `limpiar_busqueda`
- `ordenar_catalogo`
- `filtro_genero`
- `seleccionar_categoria`
- `seleccionar_pelicula`
- `ver_trailer`
- `leer_resena`
- `agregar_favorito`
- `eliminar_favorito`
- `ver_favoritos`
- `compartir_pelicula`
- `error_compartir`
- `restablecer_catalogo`
- `clic_logo`
- `salida_sitio`

Los eventos de película incluyen parámetros como título, ID, género, categoría, año y puntuación.

## Verificar que GA4 funciona

1. Publica los archivos en GitHub Pages.
2. Abre la URL pública de la página.
3. En Google Analytics entra en **Informes > Tiempo real**.
4. Interactúa con la web: busca, filtra, abre una película, mira un tráiler o añade un favorito.
5. Revisa que aparezca el usuario activo y los eventos.

Para comprobar eventos con mayor detalle se puede utilizar **DebugView** de GA4 cuando se utiliza un entorno de depuración.

## Importante sobre las métricas

Google Analytics 4 calcula automáticamente métricas como usuarios, sesiones, páginas vistas, duración media de interacción y fuentes de tráfico a partir de los datos recibidos.

No todas las métricas de una plantilla antigua de Universal Analytics existen exactamente igual en GA4. Por ejemplo, **rebote** fue reemplazado conceptualmente por **tasa de interacción** (engagement rate) en los informes modernos de GA4.

Los datos tampoco aparecen siempre de forma instantánea en todos los informes. **Tiempo real** es la mejor sección para verificar la implementación.

## Conversiones

Para la actividad académica se pueden marcar como eventos clave los eventos que representen una acción de valor, por ejemplo:

- `ver_trailer`
- `leer_resena`
- `agregar_favorito`

En GA4, la interfaz actual puede denominar estas acciones como **eventos clave**.

## Limitación importante

Este proyecto mide interacciones reales que ocurren en el navegador. El JavaScript no fabrica usuarios, sesiones ni visitas falsas. Para generar datos válidos para un trabajo académico, las visitas deben proceder de usuarios reales o de pruebas controladas claramente identificadas.

## GitHub Pages

Los tres archivos principales deben permanecer en la raíz:

- `index.html`
- `styles.css`
- `script.js`

La carpeta `assets/posters` se mantiene exactamente como está.

En GitHub:

**Settings → Pages → Deploy from a branch → main → /(root)**

Después de publicar, utiliza la URL de GitHub Pages para las pruebas.
