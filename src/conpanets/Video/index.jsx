import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";

const Vodeo = () => {
  const [params, setParams] = useState([]);
  const { id } = useParams();
  
  const setVideo = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
    ).then((res) => {
      setParams(res.data.results);
      console.log("hgvk", res);
    });
  };
  
  useEffect(() => {
    setVideo(API_KEY);
  }, []);

  return (
    <div>
      {params.map((el, index) => (
     <div className="container">
         <div key={index} className="video">
          <iframe 
            width="1184"
            height="807"
            src={`https://www.youtube.com/embed/${el.key}`}
            title="Азат Раимбердиев, Ulukmanapo - Моя Принцесса (prod. by Sad Soul)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
     </div>
      ))}
    </div>
  );
};

export default Vodeo;