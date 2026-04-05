# Festival Música

Sitio web de ejemplo para un festival de música Techno & EDM desarrollado como proyecto de aprendizaje de HTML5, CSS3, JavaScript, SASS y Gulp.

## Descripción

Este proyecto es un sitio web estático para promocionar el "Techno & EDM Festival" que se llevará a cabo en Julio 2026 en CDMX, México. Incluye secciones para el line up de artistas, galería de imágenes, información sobre boletos y videos promocionales.

**Versión:** 1.0.0  
**Licencia:** ISC  
**Autor:** Gabriel Diaz

## Estructura del proyecto

- `index.html` - página principal del sitio.
- `build/` - archivos generados y listos para producción.
  - `build/css/app.css` - CSS compilado desde SASS.
  - `build/js/script.js` - JavaScript procesado.
  - `build/img/` - imágenes optimizadas.
- `video/` - videos usados en el diseño.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- SASS
- Gulp
- NPM

## Características

- Diseño responsivo
- Galería de imágenes con miniaturas
- Sección de line up de artistas
- Información sobre boletos
- Videos promocionales
- Optimización de imágenes con Sharp
- Minificación de CSS y JS

## Comandos

- `npm install` - instala dependencias.
- `npm run sass` - observa el directorio `src/scss` y compila los cambios en `build/css`.
- `npm run dev` - ejecuta Gulp para el flujo de trabajo completo.

## Dependencias

### Producción
- `sass` - Preprocesador CSS

### Desarrollo
- `gulp` - Automatización de tareas
- `gulp-sass` - Plugin de Gulp para SASS
- `gulp-terser` - Minificación de JavaScript
- `sharp` - Procesamiento de imágenes
- `glob` - Búsqueda de archivos

## Uso

1. Clona o descarga el proyecto.
2. Ejecuta `npm install` para instalar las dependencias.
3. Inicia el proceso de desarrollo con `npm run dev` o `npm run sass`.
4. Abre `index.html` en el navegador para ver el sitio.

## Autor

- Gabriel Diaz
