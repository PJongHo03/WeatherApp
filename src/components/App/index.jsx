import { useState } from "react";
import axios from "axios";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const baseUrl = "https://api.openweathermap.org/data/2.5";

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    params: {
      appid: apiKey,
      lang: "kr",
    },
  });

  const getApi = async () => {
    try {
      const res = await axiosInstance.get("/weather", {
        params: { q: "seoul" },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("에러가 발생ㅎ랬습니다.");
    }
  };
  getApi();

  return (
    <main>
      <section>안녕</section>
    </main>
  );
}

export default App;
