# WeatherNow

A clean, responsive weather app that delivers real-time conditions and multi-day forecasts for any city in the world.

**Live Site:** [https://weathernow-sih1.onrender.com](https://weathernow-sih1.onrender.com)

---

## Screenshot

![WeatherNow Screenshot](screenshot.png)

---

## Features

- **Current weather** — temperature, condition, feels-like, humidity, wind speed, visibility, pressure, and high/low
- **6-Day forecast** — daily cards with weather icon, high/low temps, condition, humidity, and wind
- **Unit toggle** — switch between Fahrenheit and Celsius
- **Language toggle** — weather descriptions in English or Spanish
- **Sliding pill toggles** — smooth animated UI controls
- **Responsive design** — works on desktop, tablet, and mobile
- **Dark navy theme** — clean, modern color scheme

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express |
| Templating | EJS |
| HTTP Client | Axios |
| Weather Data | OpenWeather API |
| Styling | Custom CSS (no framework) |

---

## Getting Started

### Prerequisites

- Node.js v18+
- An [OpenWeatherMap API key](https://openweathermap.org/api)

### Installation

```bash
git clone https://github.com/your-username/weathernow.git
cd weathernow
npm install
```

### Configuration

Create a `.env` file in the project root:

```
OPENWEATHER_API_KEY=your_api_key_here
```

### Run

```bash
# Development (auto-restart on changes)
npm run dev

# Production
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
weathernow/
├── public/
│   └── styles.css       # All CSS
├── views/
│   ├── index.ejs        # Home / search page
│   └── results.ejs      # Weather results page
├── .env                 # API key (not committed)
├── .gitignore
├── package.json
└── server.js            # Express app & routes
```

---

## API Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Renders the search form |
| GET | `/search` | Fetches weather and renders results |

**Query parameters for `/search`:**

| Param | Values | Default |
|---|---|---|
| `city` | any city name | — |
| `units` | `imperial`, `metric` | `imperial` |
| `lang` | `en`, `es` | `en` |
| `forecast` | `today`, `5day` | `today` |
