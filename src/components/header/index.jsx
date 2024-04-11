import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import image from "../icon-99-512.webp";
import "./index.css";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { key } from "../../monkey";
const Header = ({ fuson, setFuson }) => {
  const [searching, setSearch] = useState("");
  const nav = useNavigate();
  const getSearch = () => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=1`
    ).then((res) => {
      setSearch(res.data.results);
    });
  };
  useEffect(() => {
    getSearch();
  }, []);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img className="a1" src={image} alt="" />
          <div className="header-nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/popular"}>Popular</Link>
            <Link to={"/topRated"}>Toprated</Link>
            <div className="input-wrapper">
              <button
                onClick={() => {
                  nav(`/search/${fuson}`);
                  getSearch();
                }}
                className="icon"
              >
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M22 22L20 20"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <input
                onChange={(e) => setFuson(e.target.value)}
                type="text"
                name="text"
                class="input"
                placeholder="search.."
              />
              <button
              // onClick={() => {
              //   nav(`/search`);
              //   getSearch();
              // }}
              >
                <IoSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
