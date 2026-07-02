# MiniBlog API

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** para gestionar autores, publicaciones y comentarios. El proyecto implementa operaciones CRUD completas, validaciones, documentación OpenAPI, pruebas automatizadas y está preparado para desplegarse en Railway.

---

# Características

- CRUD completo de Authors
- CRUD completo de Posts
- CRUD de Comments
- Relaciones entre tablas mediante claves foráneas
- Consultas SQL parametrizadas (protección contra SQL Injection)
- Validaciones de entrada
- Manejo centralizado de errores
- Middleware de seguridad (Helmet)
- CORS configurado
- Rate Limiting
- Logger con Morgan
- Documentación con Swagger / OpenAPI
- Testing con Jest y Supertest
- Despliegue preparado para Railway

---

# Tecnologías

## Backend

- Node.js
- Express.js

## Base de datos

- PostgreSQL
- pg

## Documentación

- Swagger UI
- OpenAPI 3.0

## Testing

- Jest
- Supertest

## Seguridad

- Helmet
- CORS
- Express Rate Limit
- Morgan

## Deployment

- Railway

---

# Estructura del proyecto

```
backend/
│
├── scripts/
│   ├── schema.sql
│   └── seed.sql
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   └── app.js
│
├── tests/
│
├── server.js
├── package.json
└── README.md
```

---

# Instalación

Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/mini-blog-api.git
```

Entrar al proyecto

```bash
cd mini-blog-api/backend
```

Instalar dependencias

```bash
npm install
```

---

# Variables de entorno

Crear un archivo `.env`

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=miniblog
DB_USER=postgres
DB_PASSWORD=tu_password

DATABASE_URL=
```

---

# Base de datos

Crear la base

```bash
createdb miniblog
```

Ejecutar el esquema

```bash
psql -U postgres -d miniblog -f scripts/schema.sql
```

Cargar datos iniciales

```bash
psql -U postgres -d miniblog -f scripts/seed.sql
```

---

# Ejecutar el proyecto

Modo desarrollo

```bash
npm run dev
```

Modo producción

```bash
npm start
```

---

# Ejecutar pruebas

```bash
npm test
```

---

# Documentación Swagger

Disponible en

```
http://localhost:3000/api-docs
```

---

# Endpoints principales

## Authors

| Método | Endpoint |
|---------|----------|
| GET | /authors |
| GET | /authors/:id |
| POST | /authors |
| PUT | /authors/:id |
| DELETE | /authors/:id |

---

## Posts

| Método | Endpoint |
|---------|----------|
| GET | /posts |
| GET | /posts/:id |
| GET | /posts/author/:authorId |
| POST | /posts |
| PUT | /posts/:id |
| DELETE | /posts/:id |

---

## Comments

| Método | Endpoint |
|---------|----------|
| GET | /comments |
| POST | /comments |

---
---
# Despliegue

API desplegada en Railway:

https://mini-blog-api-production-8077.up.railway.app

Documentación Swagger:

https://mini-blog-api-production-8077.up.railway.app/api-docs

---
---


La aplicación detecta automáticamente el entorno de Railway utilizando la variable `DATABASE_URL` y establece una conexión segura mediante SSL.

---

# Pruebas de la API

## Página principal

GET

```
https://mini-blog-api-production-8077.up.railway.app/
```

Respuesta

```json
{
  "success": true,
  "message": "Welcome to MiniBlog API"
}
```

---

## Health

GET

```
https://mini-blog-api-production-8077.up.railway.app/health
```

---

## Authors

### Obtener todos

GET

```
https://mini-blog-api-production-8077.up.railway.app/authors
```

### Obtener uno

GET

```
https://mini-blog-api-production-8077.up.railway.app/authors/1
```

### Crear

POST

```
https://mini-blog-api-production-8077.up.railway.app/authors
```

Body

```json
{
    "name":"Juan Pérez",
    "email":"juan@email.com",
    "bio":"Backend Developer"
}
```

### Actualizar

PUT

```
https://mini-blog-api-production-8077.up.railway.app/authors/1
```

### Eliminar

DELETE

```
https://mini-blog-api-production-8077.up.railway.app/authors/21
```

---

## Posts

### Obtener todos

GET

```
https://mini-blog-api-production-8077.up.railway.app/posts
```

### Obtener uno

GET

```
https://mini-blog-api-production-8077.up.railway.app/posts/1
```

### Obtener por autor

GET

```
https://mini-blog-api-production-8077.up.railway.app/posts/author/1
```

### Crear

POST

```
https://mini-blog-api-production-8077.up.railway.app/posts
```

```json
{
    "title":"Nuevo Post",
    "content":"Contenido del artículo",
    "author_id":1,
    "published":true
}
```

### Actualizar

PUT

```
https://mini-blog-api-production-8077.up.railway.app/posts/1
```

### Eliminar

DELETE

```
https://mini-blog-api-production-8077.up.railway.app/posts/21
```

---
---
## Deployment en Railway

La aplicación fue desplegada utilizando Railway.

Variables configuradas:

- DATABASE_URL
- PORT
- NODE_ENV=production

Railway proporciona automáticamente la URL pública y la conexión segura hacia PostgreSQL.

---
---

## Railway

Durante el despliegue se utilizó:

- Public URL: https://mini-blog-api-production-8077.up.railway.app

- Internal URL: utilizada automáticamente por Railway para la comunicación entre servicios dentro del proyecto.

---
---

# Registro del uso de Inteligencia Artificial (IA)

Durante el desarrollo de este proyecto se utilizó **ChatGPT (OpenAI)** como una herramienta de apoyo para el aprendizaje, la resolución de dudas técnicas y la mejora de la documentación. Todas las sugerencias fueron revisadas, comprendidas y adaptadas antes de ser incorporadas al proyecto.

## Objetivos del uso de IA

La IA se utilizó para:

- Resolver dudas sobre el desarrollo de APIs REST con Express.js.
- Comprender conceptos relacionados con PostgreSQL y SQL.
- Apoyar la creación de la documentación de la API mediante OpenAPI (Swagger).
- Corregir errores de sintaxis y configuración.
- Mejorar la organización y estructura del proyecto.
- Explicar buenas prácticas de desarrollo backend.

## Actividades en las que se utilizó

| Actividad | Uso de IA |
| ---------- | --------- |
| Diseño de la API | Apoyo en la definición de endpoints REST y organización de recursos. |
| Base de datos | Explicación de consultas SQL, relaciones y conexión con PostgreSQL. |
| Desarrollo Backend | Resolución de dudas sobre Express.js, middleware, rutas y controladores. |
| Documentación | Generación y corrección de la especificación OpenAPI (`openapi.yaml`) y apoyo en la redacción del README. |
| Depuración | Ayuda para identificar y solucionar errores durante el desarrollo. |
| Buenas prácticas | Recomendaciones sobre estructura del proyecto, separación de responsabilidades y organización del código. |

## Responsabilidad del desarrollador

La inteligencia artificial fue utilizada únicamente como una herramienta de apoyo. Todas las decisiones de diseño, implementación, pruebas y validación del proyecto fueron realizadas por el desarrollador.

Cada sugerencia proporcionada por la IA fue analizada y adaptada según las necesidades del proyecto antes de ser integrada al código.

## Herramienta utilizada

- **ChatGPT (OpenAI)**

## Conclusión

El uso de la inteligencia artificial permitió agilizar el aprendizaje, comprender conceptos técnicos y mejorar la calidad de la documentación y del desarrollo del proyecto. La IA complementó el proceso de desarrollo, pero no reemplazó el análisis, la comprensión ni la responsabilidad del desarrollador.

# Autor

**Jhon Freddy Tavera Blandón**

Proyecto Integrador Backend.
# Licencia

Proyecto desarrollado con fines académicos.