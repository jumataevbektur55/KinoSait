import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import { LanguageCantext } from "../../Context/RootContext";
const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { language } = useContext(LanguageCantext);
  console.log(language);

  const getPopular = (key) => {
    setLoading(true);
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`
    )
      .then((res) => {
        setPopular(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPopular(API_KEY);
  }, [page]);

  return (
    <div>
      <div id="popular">
        <div className="container">
          <h1>Popular</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <div className="popular">
                {popular.map((el) => (
                  <MovieCard key={el.id} el={el} />
                ))}
              </div>
              <div className="pagination">
                <button onClick={() => setPage(page > 1 ? page - 1 : page)}>
                  Back
                </button>
                <h1>{page}</h1>
                <button onClick={() => setPage(page + 1)}>Next</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popular;
