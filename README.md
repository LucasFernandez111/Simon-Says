# Proyecto SimonSays



## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://url-del-repositorio.git
    ```

2. Accede al directorio FrontEnd y Backend y ejecuta `npm install` en cada uno para instalar las dependencias:

    ```bash
    cd FrontEnd
    npm install

    cd ../BackEnd
    npm install
    ```

3. Crea un archivo `.env` en el directorio BackEnd y copia las variables de ejemplo del archivo `exampleENV`. Luego, completa las variables según sea necesario.

4. Importa el archivo `simonsays.sql` a tu servidor MySQL para crear la base de datos necesaria para el proyecto.

## Uso

1. Para iniciar el servidor de desarrollo del FrontEnd, ejecuta:

    ```bash
    cd FrontEnd
    npm run dev
    ```

   Esto iniciará el servidor de desarrollo del FrontEnd en [http://localhost:3000](http://localhost:3000).

2. Para iniciar el servidor del BackEnd, ejecuta:

    ```bash
    cd BackEnd
    node index.js
    ```

   Esto iniciará el servidor del BackEnd. Asegúrate de que el servidor MySQL esté en ejecución y que las variables de entorno necesarias estén configuradas correctamente en el archivo `.env`.


