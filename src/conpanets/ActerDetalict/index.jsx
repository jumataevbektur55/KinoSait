import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { API_KEY } from "../../API/index";
import ActorsMovies from "../Actorsmovie";

const ActerDetalist = () => {
  const [actor, setActor] = useState({});
  const [open, setOpen] = useState(false);
  let { id } = useParams();

  const getDetalis = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`
    ).then((res) => {
      setActor(res.data);
    });
  };

  useEffect(() => {
    getDetalis(API_KEY);
  }, []);

  const renderReadMoreButton = () => {
    if (actor.biography && actor.biography.length > 200) {
      return (
        <button
          onClick={() => setOpen(true)}
          style={{
            display: open ? "none" : "flex",
          }}
        >
          Читать далее... <HiArrowNarrowRight />
        </button>
      );
    }
    return null;
  };

  return (
    <>
    <div>
      <div id="acter">
        <div className="container">
          <div className="acter">
            <img
              style={{
                width: "300px",
                height: "450px",
              }}
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${actor.profile_path}`}
              alt="img"
              />
            <div className="acter__p">
              <h1>{actor.name}</h1>
              <h2>{actor.birthday}</h2>
              <p>
                {actor.biography?.slice(0, 400)}
                {renderReadMoreButton()}
              </p>
              <p
                style={{
                  display: open ? "flex" : "none",
                  marginTop: open ? "-2px" : "0",
                }}
                >
                {actor.biography?.slice(400)}
              </p>
              <button
                style={{
                  marginTop: "1px",
                  width: "27px",
                  background: "none",
                  fontSize: "16px",
                  color: "blue",
                  display: open ? "flex" : "none",
                }}
                onClick={() => setOpen(false)}
                >
                Скрыть{" "}
              </button>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
      <ActorsMovies/>
    </>
  );
};

export default ActerDetalist;

