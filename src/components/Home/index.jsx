import axios from "axios";
import React, { useEffect, useState } from "react";
import { key } from "../../monkey";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const GetFilms = () => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`
    ).then((res) => {
      setFilms(res.data.results);
    });
  };

  useEffect(() => {
    GetFilms();
  }, page);

  return (
    <div id="movies">
      <div className="container">
        <div className="home">
          <div className="home-detal">
            {films.map((el) => (
              <div className="ds">
                <Link to={"/alt"}>
                  <img
                    src={`https://media.themoviedb.org/t/p/w440_and_h660_face${el.poster_path}`}
                    alt=""
                  />
                  <h5>{el.release_date}</h5>

                  <h1
                    style={{
                      fontSize: "20px",
                      color: "white",
                      fontFamily: "cursive",
                    }}
                  >
                    {el.title.slice(0, 22)}
                  </h1>
                </Link>
              </div>
            ))}
            <div className="knopka">
              <button onClick={() => setPage(page > 1 ? page - 1 : page)}>
                back
              </button>
              <h4>{page}</h4>
              <button onClick={() => setPage(page + 1)}>next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
