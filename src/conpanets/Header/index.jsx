import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  let nav = useNavigate();
   const [dark, setDark] = useState(false);
   
  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="header-box">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt=""
              />
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"popular"}>Popular</NavLink>
              <NavLink to={"topreted"}>TopRated</NavLink>
              <MdOutlineDarkMode />
               <select style={{
                padding:"7px 15px",
                background:"white",
                color:"black",
                cursor:"pointer",
                borderRadius:"5px"
               }}>
                <option value="en-US">English</option>
                <option value="ru-RU">Русский</option>
                <option value="fr-F">Русский</option>

               </select>
              <input
                type="text"
                value={inputValue}
                placeholder="search"
                onChange={(e) => setInputValue(e.target.value)}
              />

              <button onClick={() => {
                nav(`/search/${inputValue}`)
                setInputValue("")
              }}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
