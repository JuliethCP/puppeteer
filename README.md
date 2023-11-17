**Algoritmo de web scrapping para el reconocimiento de emociones con MorphCastm Emotion AI - Video Frame Analyzer**
En este documento, se explicará cómo implementar un algoritmo de web scrapping para el reconocimiento de emociones con MorphCastm Emotion AI - Video Frame Analyzer. Este algoritmo sube los videos generados por el algoritmo de captura de pantalla a la página de MorphCast y descarga los resultados del análisis emocional.


## Instalación

1. **Clona este repositorio:**
    ```bash
    git clone https://github.com/JuliethCP/puppeteer.git
    ```

2. **Instala las dependencias de ser necesario:**
    ```bash
    npm install
    ```
3. **Generar una clave de licencia:**
Primero, genera una clave de licencia para el SDK de MorphCast aquí [Morphcast SDK](https://www.morphcast.com/sdk-licence-request/)  Luego, intercambie la clave en:
   ```bash
    const textoAEscribir = '3afd07bfe6e9b3aed20a3ea33a4656b6cc83a134bedc';
```
   
    

## Uso

1. **Iniciar el algoritmo:**


```bash
node playwright.js
```

Esto abrirá la aplicación Chromium que es controlada por el algoritmo y empezará a analizar los video disponibles en Descargas y posteriormente a descargar los informes sobre el análisis emocional de los videos.


