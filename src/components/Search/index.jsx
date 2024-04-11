import axios from "axios";
import React, { useEffect, useState } from "react";
import { key } from "../../monkey";
import { useParams } from "react-router-dom";

function Search({ fuson }) {
  const [kutman, setKutman] = useState([]);

  const { searchName } = useParams();
  console.log(searchName, "search");

  function getSearchData() {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchName}`
    ).then((res) => {
      setKutman(res.data.results);
    });
  }
  useEffect(() => {
    getSearchData();
  }, [searchName]);
  return (
    <div className="movies">
      <div className="contaiber">
        <div className="home">
          <div className="home-detal">
            {kutman.map((el) => (
              <div className="ds">
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
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
