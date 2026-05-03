# Client — Videogames Frontend

React + Redux SPA for browsing, searching, filtering, and creating videogames.

**Live:** [pi-videogames-main-ochre.vercel.app](https://pi-videogames-main-ochre.vercel.app)

## Stack

- **UI:** React 17, React Router v5, CSS Modules
- **State:** Redux 4, Redux Thunk, redux-devtools-extension
- **HTTP client:** Axios
- **Testing:** React Testing Library + Jest

## Project Structure

```
client/src/
├── App.js              # Route definitions
├── components/
│   ├── Card/           # Single game card
│   ├── CardsContainer/ # Grid of cards
│   ├── Filter/         # Genre & source filter dropdowns
│   ├── NavBar/         # Top navigation bar
│   ├── Order/          # Sort controls (name / rating)
│   ├── Paged/          # Pagination controls
│   └── SearchBar/      # Name search input
├── views/
│   ├── Landing/        # /              — entry splash screen
│   ├── Home/           # /Home          — catalog with filters and pagination
│   ├── Detail/         # /Detail/:id    — full game detail page
│   └── Form/
│       ├── Create/     # /Form          — create a custom game
│       ├── Info/       # success message after creation
│       └── Validate/   # client-side form validation logic
└── redux/
    ├── store.js
    ├── reducer.js
    ├── actions.js
    └── action-types.js
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. (Optional) Point to a different backend

By default the app calls `http://localhost:3001`. To override:

```bash
REACT_APP_API_URL=https://your-api-url.com npm start
```

### 3. Start the dev server

```bash
npm start
```

Opens at `http://localhost:3000`. Requires the [API](../api/README.md) to be running.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start dev server |
| `npm test` | Run test suite in watch mode |
| `npm run build` | Production build to `build/` |
| `npm run eject` | Eject from Create React App (irreversible) |
