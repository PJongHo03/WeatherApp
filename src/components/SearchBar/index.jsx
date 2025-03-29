import { useState } from "react";
import "./style.css";

function SearchBar({ onSearch }) {
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
      <input
        type='text'
        className='weatherSearch'
        placeholder='검색'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button className='weatherBtn' id='weatherBtn' onClick={handleSubmit}>
        날씨 조회
      </button>
    </section>
  );
}

export default SearchBar;
