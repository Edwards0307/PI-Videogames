# Videogames

A full-stack videogame catalog app built with React, Redux, Node.js, and PostgreSQL. Browse thousands of games from the RAWG API, search and filter by genre or rating, and add your own games to the database.

**Live demo:** [pi-videogames-main-ochre.vercel.app](https://pi-videogames-main-ochre.vercel.app)

## Features

- Browse 500K+ games from the [RAWG API](https://rawg.io/apidocs)
- Search by name, filter by genre and source, sort by name or rating
- Paginated catalog (15 games per page)
- Game detail view with platforms, genres, rating and description
- Create custom games and save them to a PostgreSQL database

## Tech Stack

**Frontend:** React 17, Redux, React Router v5, CSS Modules  
**Backend:** Node.js, Express, Sequelize, PostgreSQL  
**Deployment:** Vercel (client) · Railway (api)

## Project Structure

```
├── api/               # Express + Sequelize backend
│   ├── index.js
│   ├── src/
│   │   ├── app.js
│   │   ├── db.js
│   │   ├── Controllers/
│   │   ├── handlers/
│   │   ├── helpers/
│   │   ├── middlewares/
│   │   ├── models/    # Videogame, Genre (many-to-many)
│   │   ├── routes/
│   │   └── Utils/
│   └── tests/
└── client/            # React + Redux frontend
    └── src/
        ├── components/ # NavBar, Card, CardsContainer, Filter, Order, Paged, SearchBar
        ├── views/      # Landing, Home, Detail, Form
        └── redux/      # store, reducer, actions, action-types
```

## Local Setup

### Prerequisites

- Node.js >= 14.0.0
- PostgreSQL
- A RAWG API key from [rawg.io/apidocs](https://rawg.io/apidocs)

### Backend

```bash
cd api
npm install
```

Create a `.env` file inside `api/`:

```env
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=videogames
YOUR_API_KEY=your_rawg_api_key
PORT=3001
```

Create the database and start the server:

```bash
psql -U postgres -c "CREATE DATABASE videogames;"
npm start
```

Sequelize will create all tables automatically on first run. The API will be available at `http://localhost:3001`.

> See [api/README.md](api/README.md) for full backend details.

### Frontend

Open a new terminal from the project root:

```bash
cd client
npm install
npm start
```

The app will be available at `http://localhost:3000`.

> By default the client points to `http://localhost:3001`. To use a different backend URL, set `REACT_APP_API_URL` before running `npm start`.

> See [client/README.md](client/README.md) for full frontend details.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/videogames` | All games (API + DB) |
| GET | `/videogames?name=query` | Search games by name |
| GET | `/videogames/:id` | Game detail |
| POST | `/videogames` | Create a new game |
