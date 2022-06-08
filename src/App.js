import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BeerList from "./components/BeerList";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => {
        return res.json();
      })
      .then((beer) => {
        console.log(beer);
        setBeer(beer);
      });
  }, []);

  return (
    <div className="content">
      <Navbar />
      <main>{beer && <BeerList beer={beer} />}</main>
      <Footer />
    </div>
  );
}

export default App;
