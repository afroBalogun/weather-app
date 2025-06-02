
---

## 🌦️ Pocket Weather App

A sleek and responsive weather web application built with React and Tailwind CSS. Powered by the OpenWeatherMap API, it allows users to search and view current weather data for any city in the world.

**Live Site:** [https://pocket-weather.vercel.app](https://pocket-weather.vercel.app)

![Weather App Preview](https://raw.githubusercontent.com/afroBalogun/weather-app/main/public/weather-app-preview.png)

---

### 📌 Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Usage](#usage)
* [API Reference](#api-reference)
* [Screenshots](#screenshots)
* [License](#license)

---

### ✨ Features

* 🌐 Search current weather for any city
* 📍 Location-based weather using geolocation API
* 🌡️ Real-time temperature, humidity, wind speed, and weather description
* 🌓 Dynamic UI updates based on weather conditions
* 📱 Fully responsive for mobile and desktop

---

### 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS, Vite
* **API:** OpenWeatherMap
* **Deployment:** Vercel

---

### 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/afroBalogun/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_API_KEY=your_openweathermap_api_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

---

### 🧪 Usage

* Type in a city name and press enter.
* Or allow location access to fetch weather for your current location.
* View detailed current weather information.

---

### 🔌 API Reference

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current):

```http
GET https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
```

---


### 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Let me know if you'd like help adding the `LICENSE` file or uploading preview screenshots for better visual impact.
