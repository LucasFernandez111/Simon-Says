<h1 align="center">SIMON SAYS</h1>

<p align="center">
  <img src="./FrondEnd/src/assets/logoGame.png" width="300 alt="img-simonsays">
</p>

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/LucasFernandez111/Simon-Says.git
   ```

2. Accede al directorio Simon-Says, luego a FrondEnd y Backend y ejecuta `npm install` en cada uno para instalar las dependencias:

   ```bash
   cd FrondEnd
   ```
   ```bash
   npm install
   ```
   ```bash
   cd ../BackEnd
   ```
   ```bash
   npm install
   ```
  

4. Crea un archivo `.env` en el directorio BackEnd y copia las variables de ejemplo del archivo `exampleENV`. Luego, completa las variables según sea necesario.

5. Importa el archivo `simonsays.sql` a tu servidor MySQL para crear la base de datos necesaria para el proyecto.

## Uso

1. Para iniciar el servidor de desarrollo del FrontEnd, ejecuta:

   ```bash
   cd FrontEnd
   ```
   ```bash
   npm run dev
   ```

   Esto iniciará el servidor de desarrollo del FrontEnd en [http://localhost:5173](http://localhost:5173).

2. Para iniciar el servidor del BackEnd, ejecuta:

   ```bash
   cd BackEnd
   ```

   ```bash
   node index.js
   ```

   Esto iniciará el servidor del BackEnd. Asegúrate de que el servidor MySQL esté en ejecución y que las variables de entorno necesarias estén configuradas correctamente en el archivo `.env`.
