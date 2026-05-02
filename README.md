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
│   ├── src/
│   │   ├── Controllers/
│   │   ├── handlers/
│   │   ├── models/    # Videogame, Genre (many-to-many)
│   │   ├── routes/
│   │   └── app.js
│   └── index.js
└── client/            # React + Redux frontend
    └── src/
        ├── components/ # NavBar, Card, Filter, Order, Paged, SearchBar
        ├── views/      # Landing, Home, Detail, Form
        └── redux/      # store, reducer, actions
```

## Local Setup

### Prerequisites

- Node.js >= 12.18.3
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

Sequelize will create all tables automatically on first run.

### Frontend

```bash
cd client
npm install
npm start
```

The app will be available at `http://localhost:3000`.

> By default the client points to `http://localhost:3001`. To use a different backend URL, set the `REACT_APP_API_URL` environment variable before running `npm start`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/videogames` | All games (API + DB) |
| GET | `/videogames?name=query` | Search games by name |
| GET | `/videogames/:id` | Game detail |
| POST | `/videogames` | Create a new game |
