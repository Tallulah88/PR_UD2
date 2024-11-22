Cliente API REST
Descripción

Este proyecto es un cliente web que consume una API REST para gestionar datos en diferentes formatos: Storage (clase genérica), JSON, y CSV. El cliente permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los datos mediante una interfaz sencilla.

El backend expone una API REST implementada con Node.js y Express, mientras que el frontend utiliza Vue.js como framework. Docker se utiliza para contenerizar ambos servicios y facilitar la ejecución del entorno de desarrollo.
Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

    Node.js (versión recomendada: 16 o superior)
    Docker
    Docker Compose

Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

PR_UD2/
├── frontend/         # Código del cliente (Vue.js)
│   ├── src/          # Archivos fuente de Vue.js
│   ├── public/       # Archivos estáticos
│   ├── package.json  # Dependencias del frontend
├── backend/          # Código del servidor (Node.js)
│   ├── server.js     # Archivo principal del backend
│   ├── package.json  # Dependencias del backend
├── docker-compose.yml # Configuración para levantar el entorno completo
└── README.md         # Instrucciones del proyecto

Funcionalidades

El cliente permite realizar las siguientes operaciones sobre la API REST:
Clase Storage (/api/hello)

    GET /api/hello: Obtiene un mensaje de bienvenida.
    GET /api/hello/{filename}: Obtiene información sobre un archivo.
    POST /api/hello: Crea un archivo.
    PUT /api/hello/{filename}: Actualiza el contenido de un archivo.
    DELETE /api/hello/{filename}: Elimina un archivo.

JSON (/api/json)

    GET /api/json: Lista todos los archivos JSON.
    GET /api/json/{filename}: Obtiene un archivo JSON específico.
    POST /api/json: Crea un archivo JSON.
    PUT /api/json/{filename}: Actualiza un archivo JSON.
    DELETE /api/json/{filename}: Elimina un archivo JSON.

CSV (/api/csv)

    GET /api/csv: Lista todos los archivos CSV.
    GET /api/csv/{filename}: Obtiene un archivo CSV específico.
    POST /api/csv: Crea un archivo CSV.
    PUT /api/csv/{filename}: Actualiza un archivo CSV.
    DELETE /api/csv/{filename}: Elimina un archivo CSV.

Instrucciones para Ejecutar el Proyecto

Sigue los pasos a continuación para levantar el entorno local:

    Clonar el Repositorio

git clone <url_repo>
cd <nombre_del_repositorio>

Levantar el Entorno con Docker

    Ejecuta el siguiente comando para levantar los servicios del frontend y el backend:

    docker compose up -d

Acceder a los Servicios

    Frontend: Abre en tu navegador la URL:

http://localhost:8080

Backend: Puedes acceder a las rutas de la API REST directamente:

    http://localhost:3000

Detener los Servicios (Opcional)

    Si necesitas detener el entorno, usa:

        docker compose down

Notas Adicionales

    Variables de Entorno
        El proyecto puede configurarse utilizando un archivo .env. Asegúrate de incluir las URLs correctas para el backend si cambias los puertos predeterminados.

    Pruebas
        Para verificar que las rutas del backend funcionan correctamente, utiliza herramientas como Postman, Insomnia o cURL.

    Resolución de Problemas
        Si Docker no encuentra los cambios recientes en tu código, fuerza una reconstrucción de las imágenes:

    docker compose up --build

Despliegue

    Este proyecto está diseñado para entornos de desarrollo. Para producción, recuerda construir el frontend con:

npm run build