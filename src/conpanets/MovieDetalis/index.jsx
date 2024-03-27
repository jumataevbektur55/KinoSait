import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import { CiBoxList } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import Vidoe from "../Video";

const MovieDeatalis = () => {
  const [details, setdetalis] = useState([]);
  const [modal, setModal] = useState(false);
  const [pers, setPers] = useState([]);
  const [iconLike, setIconLike] = useState(false);
  const [starIcon, setStarIcon] = useState(false);
  const [icons, setIcons] = useState(false);
  const [roma, setRoma] = useState(false);

  let { id } = useParams();
  function getDetalis(key) {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    ).then((res) => {
      setdetalis(res.data);
    });
    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
    ).then((res) => {
      setPers(res.data.cast);
      console.log("pers", res.data);
    });
  }
  useEffect(() => {
    getDetalis(API_KEY);
  }, []);
  console.log(details);

  let res1 = details.runtime;

  const res = res1;
  const hours = Math.floor(res / 60);
  const min = res % 60;

  return (
    <>
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}) no-repeat center/cover  `,
        }}
        id="detalis"
      >
        <div className="container">
          <div className="detalis">
            <img
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${details.poster_path}`}
              alt=""
              onClick={() => {
                if (setModal(!modal)) {
                } else {
                  setIcons(false);
                }
              }}
            />
            <div className="detalis-text">
              <h1>{details.title}</h1>
              <div className="movies_block">
                <h2>
                  {details.release_date}
                  <span className="bloc">
                    {details.genres?.map((el) => (
                      <h5>{el.name}</h5>
                    ))}{" "}
                  </span>
                  {""}
                  <span>{`${hours}h ${min}m`}</span>
                </h2>

                <div className="rate">
                  <div
                    style={{
                      border: "10px solid greenyellow",
                    }}
                    className="circle0"
                  >
                    <h4>{details.vote_average}%</h4>
                  </div>
                  <h3 className="h3">Рейтинг</h3>
                  <div className="circle1">
                    <CiBoxList />
                  </div>
                  <div className="circle2">
                    <div className="circle2">
                      {iconLike ? (
                        <FcLike
                          onClick={() => setIconLike(!iconLike)}
                          style={{
                            fontSize: "25px",
                          }}
                        />
                      ) : (
                        <CiHeart onClick={() => setIconLike(!iconLike)} />
                      )}
                    </div>
                  </div>
                  <div className="circle3">
                    {roma ? (
                      <BsBookmarkFill onClick={() => setRoma(!roma)} />
                    ) : (
                      <CiBookmark
                        onClick={() => setRoma(!roma)}
                        style={{
                          fontSize: "35px",
                        }}
                      />
                    )}
                  </div>
                  <div className="circle4">
                    {starIcon ? (
                      <FaStar onClick={() => setStarIcon(!starIcon)} />
                    ) : (
                      <CiStar
                        onClick={() => setStarIcon(!starIcon)}
                        style={{
                          fontSize: "35px",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="praz">
                  <h3>"{details.tagline}"</h3>
                </div>
                <div className="ffff1">
                  <p>{details.overview}</p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: icons ? "none" : "",
              }}
              className="nons"
            >
              <div
                style={{
                  display: modal ? "block" : "none",
                }}
                className="modal"
              >
                <AiOutlineClose
                  style={{
                    background: "#fff",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  onClick={() => {
                    if (setModal(!modal)) {
                    } else {
                      setIcons(false);
                    }
                  }}
                />
                <div className="modalnyi_block">
                  <img
                    src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${details.poster_path}`}
                    alt="img"
                  />
                  <span>
                    <h1>{details.title}</h1>
                    <h4>{details.vote_average}%</h4>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="block_img_persons">
            {pers.slice(0 ,5).map((el) => (
              <div className="acte">
               <Link to={`/acterdetalist/${el.id}`}> <img
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`}
                  alt="img"
                /></Link>
                <h1>{el.name}</h1>
              </div>
            ))}
          </div>
        </div>
        <Vidoe />
      </div>
    </>
  );
};

export default MovieDeatalis;
