import "./style.css";

function WeatherCard({ temperature, location, description, icon }) {
  return (
    <ul className='weatherCardForm'>
      <li>🌡️ 기온 : {temperature}</li>
      <li>📍 위치 : {location}</li>
      <li>🌈설명 : {description}</li>
      <li>
        <img src={icon} />
      </li>
    </ul>
  );
}

export default WeatherCard;
