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
  
4. Crea una base de datos llamada `simonsays` e importa el archivo `simonsays.sql` que se encuentra en BackEnd/src/database: a tu servidor MySQL para crear la base de datos necesaria para el proyecto.


5. En el directorio BackEnd/src/env: crea un archivo llamado `.env`, copia las variables de entorno del archivo `exampleENV` y pégalas en `.env`, completándolas con los datos de tu base de datos. Asegúrate de completar las variables `DB_USER`, `DB_NAME`, `DB_HOST` y `DB_PASSWORD` con la información correspondiente.


## Uso

1. Para iniciar el servidor de desarrollo del FrontEnd, ejecuta:

   ```bash
   cd FrondEnd
   ```
   ```bash
   npm run dev
   ```

   Esto iniciará el servidor de desarrollo del FrontEnd en [http://localhost:5173](http://localhost:5173).

2. Para iniciar el servidor del BackEnd, ejecuta:

   ```bash
   cd BackEnd/src
   ```

   ```bash
   node index.js
   ```

   Esto iniciará el servidor del BackEnd. Asegúrate de que el servidor MySQL esté en ejecución y que las variables de entorno necesarias estén configuradas correctamente en el archivo `.env`.
