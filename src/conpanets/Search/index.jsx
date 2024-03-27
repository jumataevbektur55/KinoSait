import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import MovieCard from '../MovieCard/index';
const search = () => {
    const [search,setSearch] = useState([])
  const { movieName } = useParams();
  const getSearch = (key) => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`
    ).then((res) => {
        setSearch(res.data.results)
    });
  };
  useEffect(() => {
    getSearch(API_KEY);
  });
  return (
    <div>
      <div id="search">
        <div className="container">
            <div className="search">
                {
                    search.map((el)=><MovieCard el={el}/> )
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default search;
