import { useState } from 'react';
import './App.css';
import Filter from './componement/Filter';
import MovieList from './componement/Movielist';
import Movie from './pages/movies'
import {Routes, Route, Link} from 'react-router-dom'
import React from 'react';


function App() {

  const [rate, setRate] = useState(0)
  const [searching, setSearching] = useState('')
  const [movies, setMovies] = useState('')

  const getMovies = (listing) =>{
    setMovies(listing)
  }
  
  const getRate =(rating)=>{
    setRate(rating)
  }

  const getSearch =(searching)=>{
    setSearching(searching)
  }

  return (
    <div className="App">

      <div className="header">
        <div className="bar">
        <Link to='/' style={{ textDecoration: 'none' }}><h1>MOVIESHUB</h1></Link>
        <Filter getRate={getRate} getSearch={getSearch}/>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<MovieList getMovies={getMovies} searching={searching} rate={rate}/>}/>
        <Route path='/:title' element={<Movie movies={movies}/>}/>
      </Routes>

    </div>
  );
}

export default App;
