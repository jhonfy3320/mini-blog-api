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

# Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó ChatGPT (OpenAI GPT-5.5) como herramienta de apoyo para:

- Resolver dudas sobre Express.js.
- Diseñar la arquitectura del proyecto.
- Revisar consultas SQL.
- Corregir errores durante el desarrollo.
- Mejorar la documentación.
- Apoyar el despliegue en Railway.
- Explicar conceptos relacionados con PostgreSQL y Node.js.

Todas las decisiones finales, implementación, pruebas y validaciones fueron realizadas por el autor del proyecto.

# Autor

**Jhon Freddy Tavera Blandón**

Proyecto Integrador Backend.
# Licencia

Proyecto desarrollado con fines académicos.