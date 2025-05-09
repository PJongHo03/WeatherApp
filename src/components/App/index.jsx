import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import SearchBar from "../SearchBar";
import WeatherCard from "../WeatherCard";
import { cityMap } from "./data";

function App() {
  const [weatherData, setWeatherData] = useState({
    temperature: null,
    location: null,
    description: null,
    icon: null,
  });

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const baseUrl = "https://api.openweathermap.org/data/2.5";

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    params: {
      appid: apiKey,
      lang: "kr",
    },
  });

  const handleSearch = (cityName) => {
    getApi(cityName);
  };

  const getApi = async (userInput) => {
    const cityName = cityMap[userInput] || userInput;
    try {
      const res = await axiosInstance.get("/weather", {
        params: { q: cityName },
      });

      const data = res.data;
      const weather = data.weather[0];
      const temperatureCelsius = parseFloat(data.main.temp - 273.15).toFixed(1);
      const imgUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

      setWeatherData({
        temperature: temperatureCelsius,
        location: data.name,
        description: weather.description,
        icon: imgUrl,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      alert("에러가 발생ㅎ랬습니다.");
    }
  };

  return (
    <main>
      <section>
        <SearchBar onSearch={handleSearch}>
          <WeatherCard {...weatherData}></WeatherCard>
        </SearchBar>
      </section>
    </main>
  );
}

export default App;
