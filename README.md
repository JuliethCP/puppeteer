## **Algoritmo de web scrapping para el reconocimiento de emociones con MorphCastm Emotion AI - Video Frame Analyzer**
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
    ```bash
    npx playwright install
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


## Elementos a tener en cuenta
En el proceso de automatización de la página de MorphCast, se quedará abierta una ventana para elegir el video a analizar, SOLO se debe IGNORAR o CERRARLA manualmente, ya que el algoritmo no puede cerrarla automáticamente.
![image](https://github.com/JuliethCP/puppeteer/assets/61554258/71764c87-73b1-4251-b673-fb5e100841cc)

**En caso de Optener este error, hacer lo siguiente**
1. **Abrir el Visual Studio como Administrador **
2. **Correr el siguiente codigo**
 ```bash
npx playwright install
```
3.**Si el error persiste**
Verificar en la siguiente carpeta \su_Usuario\AppData\Local\ms-playwright
 si cuenta con la carpeta chromium-1084, en caso de que no sea así debe de descargarla del siguiente link

```bash
https://estudianteccr-my.sharepoint.com/:u:/g/personal/juliethcp22_estudiantec_cr/ERYH-uX03uVGioOQpYpOFYgBDngAuCqck3WZKynB31gZkw?e=r0V4E4
```

Vuelva a ejecutar el comando para veridicar que todo funcione
```bash
node playwright.js
```




