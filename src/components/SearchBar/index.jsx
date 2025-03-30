import { useState } from "react";
import "./style.css";

function SearchBar({ onSearch, children }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      console.log(inputValue);
      onSearch(inputValue);
    }
  };

  return (
    <section className='weatherForm'>
      <h1 className='app-title'>🌦️ My Weather</h1>
      <input
        type='text'
        className='weatherSearch'
        placeholder='지역을 검색해 주세요'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      {children}
      <button className='weatherBtn' id='weatherBtn' onClick={handleSubmit}>
        날씨 조회
      </button>
    </section>
  );
}

export default SearchBar;
