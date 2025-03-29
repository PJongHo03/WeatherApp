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

  const handleSearch = (cityName) => {
    getApi(cityName);
  };
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const baseUrl = "https://api.openweathermap.org/data/2.5";

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    params: {
      appid: apiKey,
      lang: "kr",
    },
  });

  const getApi = async (userInput) => {
    const cityName = cityMap[userInput] || userInput;
    try {
      const res = await axiosInstance.get("/weather", {
        params: { q: `${cityName},KR` },
      });

      const imgUrl = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
      setWeatherData({
        temperature: parseFloat(res.data.main.temp - 273.15).toFixed(1),
        location: res.data.name,
        description: res.data.weather[0].description,
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
      <section>안녕</section>

      <section>
        <WeatherCard
          temperature={weatherData.temperature}
          location={weatherData.location}
          description={weatherData.description}
          icon={weatherData.icon}
        ></WeatherCard>
        <SearchBar onSearch={handleSearch}></SearchBar>
      </section>
    </main>
  );
}

export default App;
