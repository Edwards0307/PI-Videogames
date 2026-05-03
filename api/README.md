# API — Videogames Backend

Express + Sequelize REST API that serves game data from the [RAWG API](https://rawg.io/apidocs) and from a local PostgreSQL database.

## Stack

- **Runtime:** Node.js >= 14.0.0
- **Framework:** Express 4
- **ORM:** Sequelize 6 + pg (PostgreSQL)
- **HTTP client:** Axios
- **Testing:** Mocha + Chai + Supertest

## Project Structure

```
api/
├── index.js               # Entry point — starts the server
└── src/
    ├── app.js             # Express app setup (CORS, middlewares, routes)
    ├── db.js              # Sequelize connection
    ├── Controllers/
    │   └── videoGamesController.js   # Business logic (RAWG fetch + DB queries)
    ├── handlers/
    │   └── gamesHandlres.js          # Route handlers
    ├── helpers/
    │   └── getGenres.js              # Seed helper for genres
    ├── middlewares/
    │   └── validate.js               # Request body validation
    ├── models/
    │   ├── Videogame.js              # Videogame model
    │   └── Genre.js                  # Genre model (many-to-many with Videogame)
    ├── routes/
    │   ├── index.js                  # Router mount
    │   └── videoGames.js             # /videogames routes
    └── Utils/
        └── tool.js                   # Shared utilities
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create the database

```bash
psql -U postgres -c "CREATE DATABASE videogames;"
```

### 3. Configure environment variables

Create a `.env` file in this directory:

```env
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=videogames
YOUR_API_KEY=your_rawg_api_key
PORT=3001
```

Get a free RAWG API key at [rawg.io/apidocs](https://rawg.io/apidocs).

### 4. Start the server

```bash
npm start
```

Sequelize syncs all models on first run — no manual migrations needed. The server listens on `http://localhost:3001`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/videogames` | All games (RAWG + DB) |
| GET | `/videogames?name=query` | Search games by name |
| GET | `/videogames/:id` | Game detail by ID |
| POST | `/videogames` | Create a custom game |

### POST `/videogames` — body

```json
{
  "name": "My Game",
  "description": "A short description",
  "platforms": ["PC", "PlayStation 4"],
  "image": "https://example.com/cover.jpg",
  "releaseDate": "2024-01-15",
  "rating": 4.5,
  "genres": ["Action", "RPG"]
}
```

## Tests

```bash
npm test
```

Runs Mocha in watch mode against `tests/models/` and `tests/routes/`.
