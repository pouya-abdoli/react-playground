# Mini Shop

A small e-commerce front end built with React as part of my [react-playground](../) repo. Browse products, view details, manage a shopping cart, and log in to reach protected pages. Products are served by a local [json-server](https://github.com/typicode/json-server) fake API.

> This is a learning project, not a production app.

## Features

- **Store page** – grid of products fetched from the API
- **Product page** – details, image, and add / increase / decrease / remove cart controls
- **Shopping cart** – quantities persisted in `localStorage`, live item count badge in the navbar
- **Authentication flow** – login page, logout, and route guards (guest-only and protected routes)
- **Routing** with React Router, shared layout with a navbar

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 19 |
| Build tool | Vite |
| Routing | React Router |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| HTTP | Axios |
| Fake API | json-server |
| Linting | Oxlint |

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
cd mini-shop
npm install
```

### Run

You need two processes: the fake API and the Vite dev server.

**1. Start the API** (json-server listens on port `3000` by default, which is what `src/services/api.js` expects):

```bash
npx json-server data/db.json
```

**2. Start the app** in a second terminal:

```bash
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the source with Oxlint |

## Routes

| Path | Page | Access |
| --- | --- | --- |
| `/` | Home (placeholder) | Public |
| `/store` | Product list | Public |
| `/product/:id` | Product details | Public |
| `/login` | Login | Guests only (logged-in users are redirected to `/store`) |
| `/cart` | Cart | Logged-in users only (others are redirected to `/login`) |

## Project structure

```
mini-shop/
├── data/
│   └── db.json                 # json-server database (products)
└── src/
    ├── main.jsx                # App entry point
    ├── App.jsx                 # RouterProvider
    ├── routes/index.jsx        # Route definitions
    ├── layouts/Root.jsx        # Navbar + <Outlet>, wrapped in the cart provider
    ├── context/
    │   └── ShoppingCartContext.jsx   # Cart + auth state and actions
    ├── hooks/
    │   └── useLocalStorage.js  # useState synced with localStorage
    ├── services/api.js         # Axios client: getProducts, getProduct, login
    ├── pages/                  # home, store, product, cart, login
    └── components/             # Navbar, ProductItem, CartItem, Button,
                                # Container, ProtectedRoute, PublicRoute
```

## How it works

- **State**: `ShoppingCartContext` holds the cart items, derived item count, and login state, and exposes the actions (`handleIncreaseProductQty`, `handleDecreaseProductQty`, `handleRemoveProduct`, `handleLogin`, `handleLogout`) through the `useShoppingCartContext` hook.
- **Persistence**: the cart is stored under the `cartItems` key in `localStorage` via the `useLocalStorage` hook. The auth token is stored under `token`.
- **Route guards**: `ProtectedRoute` and `PublicRoute` read `isLogin` from the context and redirect with `<Navigate>`.
- **Data**: `src/services/api.js` talks to `http://localhost:3000` (`/products`, `/products/:id`, `/login`).
