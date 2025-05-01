# 🌦️ Weather App

A simple, clean, and responsive weather web app built using **HTML**, **CSS**, and **JavaScript**, powered by the **Open-Meteo API**.  
Users can enter a city name, and the app will fetch and display real-time weather data.

---

## 🚀 Features

- Search for current weather by **city name**
- Displays:
  - Temperature in °C
  - Weather condition (Clear, Cloudy, etc.)
  - Wind speed in km/h
- Error handling for invalid city names
- Responsive and styled interface
- Uses **Open-Meteo's Geocoding & Forecast API**

---

## 🛠️ How It Works

1. **User enters a city name** in the input field and clicks the “Search” button.
2. The app makes a request to:
   - **Open-Meteo Geocoding API** to get the city’s latitude and longitude.
   - **Open-Meteo Forecast API** to get real-time weather data using those coordinates.
3. The weather data is then parsed and displayed in the app.

---

## 🔗 APIs Used

- 🌍 [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)  
  Used to convert city name to geographic coordinates (latitude, longitude).

- ☁️ [Open-Meteo Forecast API](https://open-meteo.com/en/docs#current_weather)  
  Provides real-time weather data including temperature, wind speed, and weather codes.

---

## 📁 Project Structure

