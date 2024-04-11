import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import Popular from "./components/popular";
import TopRated from "./components/Toprated";
import Detal from "./components/filmsDetal'";
import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [fuson, setFuson] = useState("");

  console.log(fuson);

  return (
    <div
      style={{
        background:
          "url(https://img.freepik.com/premium-vector/modern-abstract-gradient-background-with-dynamic-geometric-shapes_6091-1264.jpg) no-repeat center/cover",
      }}
      className="App"
    >
      <Header fuson={fuson} setFuson={setFuson} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/detal" element={<Detal />} />
        <Route path="/search/:searchName" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
