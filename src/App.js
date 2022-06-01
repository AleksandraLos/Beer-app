import React from 'react';
import './App.css';
import BeerList from './components/BeerList';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => {
        return res.json();
      })
      .then(beer =>{ 
        console.log(beer);
        setBeer(beer)});

}, [])

return (
  <>
    <Navbar />
    <main>
      <h1>Beer</h1>
      <h2>Because you can't drink bacon.</h2>
    </main>
  { beer && <BeerList beer={beer} />}
  <Footer/>
  </>
);
}

export default App;
