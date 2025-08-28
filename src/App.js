import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {originals,action,ComedyMovies,HorrorMovies,Trending,Documentaries}from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals}title='Netflix Originals'/>
      <RowPost url={Trending}title='Trending' isSmall/>
      <RowPost url={action}title='Action' isSmall/>
      <RowPost url={ComedyMovies}title='ComedyMovies' isSmall/>
      <RowPost url={HorrorMovies}title='HorrorMovies' isSmall/>
      {/* <RowPost url={RomanceMovies}title='RomanceMovies' isSmall/> */}
      <RowPost url={Documentaries}title='Documentaries' isSmall/>

    </div>
  );
}

export default App;
