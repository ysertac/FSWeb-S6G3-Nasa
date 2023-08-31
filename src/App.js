import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ApodData from "./components/ApodData";
import Header from "./components/Header";

function App() {
  const [apodData, setApodData] = useState(null);
  const [date, setDate] = useState("");

  const changeHandler = (e) => {
    setApodData(null);
    setDate(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then((response) => {
        setApodData(response.data);
        console.log(apodData);
      })
      .catch((error) => console.log(error));
  }, [date]);
  return (
    <div className="App">
      <Header date={date} changeHandler={changeHandler} />
      {apodData ? <ApodData apodData={apodData} /> : <h2>Yükleniyor...</h2>}
    </div>
  );
}

export default App;
