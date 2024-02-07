import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { set } from "react-hook-form";
const Home = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState({});
  const API_KEY = "5180e2a9831feb2143323d6eb7c14507";

  const changeInput = (e) => {
    setSearch(e.target.value);
  };
  const clickSearch = () => {
    setCity(search);
    
  };
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newData = {
          temp: data?.main?.temp,
          city: data?.name,
          country: data?.weather[0]?.main,
        };
        setWeather(newData);
      });
  }, [city]);
  return (
    <div>
      <Helmet>
        <title>User Management | Home</title>
      </Helmet>
      {/* set a new div and use taliwind background image on this div */}

      <div className="bg-hero-pattern min-h-screen p-14">
        <div className="flex gap-5 items-center justify-center mb-4">
          <input
            onChange={changeInput}
            type="text"
            placeholder="Search City Here"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <button onClick={clickSearch} className="btn btn-error">Search</button>
        </div>
        <div className=" text-white flex flex-col justify-center items-center">
          <div>
            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
          </div>
          <h1 className="text-3xl">{weather?.city}</h1>
          <h3 className="text-xl my-2 text-green-400">
            <span className="">{weather?.temp}</span>&deg;C
          </h3>
          <h1 className="lead text-lg">{weather?.country}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
