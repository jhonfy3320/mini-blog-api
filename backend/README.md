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

# Autor

**Jhon Freddy Tavera Blandón**

Proyecto Integrador Backend.