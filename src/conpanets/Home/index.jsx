import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_KEY } from "../../API";

const Home = () => {
  const [bg, setBg] = useState([]);
  let result = [];
  const getbg = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=9`
    ).then((res) => {
      res.data.results.map((el) => {
        result = [...result, el.backdrop_path];
        setBg(result);
      });
    });
  };
  useEffect(() => {
    getbg(API_KEY);
  }, []);
  return (
    <>
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${bg[Math.round(Math.random()* bg.length)]}) no-repeat center/cover  `,        }}
        id="section" 
      >
        <div className="container">
          <div className="section">
            <div className="section--nav">
              <h1>Добро пожаловать.</h1>
              <h4>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h4>
            </div>

            <div className="btnin">
              <input
                className="w1"
                type="text"
                placeholder="Найти фильм, сериал, персону....."
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div id="section1">
        <div className="container">
          <div className="section1">
            <div className="section--nav1">
              <h1>
                That's a <br />
                Wrap 2023
              </h1>
              <h4>The best (and worst) of the year from TMDB.</h4>
            </div>

            <div className=" ">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
