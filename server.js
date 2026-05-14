require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/search', async (req, res) => {
  const { city, units = 'imperial', lang = 'en', forecast = 'today' } = req.query;

  if (!city) {
    return res.redirect('/');
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const endpoint = forecast === '5day'
    ? 'https://api.openweathermap.org/data/2.5/forecast'
    : 'https://api.openweathermap.org/data/2.5/weather';

  const params = {
    q: city,
    appid: apiKey,
    units,
    lang,
  };

  try {
    const response = await axios.get(endpoint, { params });
    res.render('results', { weather: response.data, city, units, lang, forecast });
  } catch (err) {
    const status = err.response?.status;
    const message = status === 404
      ? `City "${city}" not found. Please check the spelling and try again.`
      : status === 401
        ? 'Invalid API key. Please check your configuration.'
        : 'Failed to fetch weather data. Please try again.';
    res.render('index', { error: message });
  }
});

app.listen(PORT, () => {
  console.log(`WeatherNow running at http://localhost:${PORT}`);
});
