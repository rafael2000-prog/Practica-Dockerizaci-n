# **Microservicios simples con Docker Compose**
Este proyecto muestra un ejemplo básico de arquitectura de microservicios, utilizando:
*saludo-service → Devuelve un mensaje de saludo.
*cliente-service → Llama al saludo-service y muestra el mensaje combinado.
Ambos servicios corren y se comunican entre sí mediante Docker Compose.

 **Estructura del proyecto**
 
microservicios-simples/

│
├── saludo-service/

│   ├── Dockerfile

│   └── app.js
│
├── cliente-service/

│   ├── Dockerfile

│   └── app.js

│
└── docker-compose.yml

 -Cómo ejecutar el proyecto
1️.- Clonar el repositorio

git clone <URL_DE_TU_REPOSITORIO>

cd microservicios-simples

2️.- Construir e iniciar los microservicios

Ejecuta en la carpeta donde está el archivo docker-compose.yml:

docker compose up --build


Esto hará:
Construir la imagen del saludo-service
Construir la imagen del cliente-service
Crear una red interna para que se comuniquen
Levantarlos en los puertos 3000 y 4000

 **Probar el funcionamiento**
1. Abrir el cliente-service en el navegador

Visita:
http://localhost:4000


El cliente-service llamará automáticamente al saludo-service y mostrará algo como:
Cliente recibió: 👋 Hola desde el servicio de saludo!
