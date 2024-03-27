import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";

const ActorsMovies = () => {
  let [actorsMovie, setActorsMovie] = useState([]);
  let { id } = useParams();

  const getActMovie = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`
    ).then((res) => {
      setActorsMovie(res.data.cast);
    });
  };

  useEffect(() => {
    getActMovie(API_KEY);
  }, []);
  console.log(actorsMovie, "kjgjgjgkj");
  return (
    <div>
      <div id="ActorsMovie">
        <div className="container">
          <div style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "scroll",
            marginTop: "20px",
            
          }} className="ActorsMovie">

            {actorsMovie?.map((el) => (
              <div key={el.id}>
                <img style={{
                    border: "1px solid black",
                }}
                  src={`https://media.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`}
                  alt="img" width={200}
                />
                <h1>{el.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorsMovies;
