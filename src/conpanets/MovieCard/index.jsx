import React from "react";
import { NavLink } from "react-router-dom";
const MovieCard = ({ el }) => {
  return (
    <div className="movieCard">
      <NavLink to={`/movieDetalis/${el.id}`}>
        <img
          src={` https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
          alt="img"
        />
      </NavLink>
      <h5>{el.title}</h5>
      <h4>{el.release_date}</h4>
    </div>
  );
};

export default MovieCard;
