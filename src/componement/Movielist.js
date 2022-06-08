import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Add from './Add'

const MovieList = (props) => {

    const [movieList,setMovieList] = useState([
       
          {
            title:"2 fast 2furios", 
            description:"Former cop Brian O'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself",
            posterURL:"movies/2 fast 2furious.jpg",
            rating:4.7,
            trailer:"https://www.youtube.com/embed/F_VIM03DXWI"
          },
          {
            title:"John Wick 3",
            description:"John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere",
            posterURL:"movies/john wick.jpg",
            rating:4.2,
            trailer:"https://www.youtube.com/embed/M7XM597XO94"
          },
          {
            title:"The Dark Knight",
            description:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterURL:"movies/the dark knight.jpg",
            rating:3.7,
            trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"
          },
          {
            title:"upgrade",
            description:"Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant",
            posterURL:"movies/upgrade.jpg",
            rating:4.0,
            trailer:"https://www.youtube.com/embed/36PDeN9NRZ0"
          }
        ])

    const getAdd =(newMovie)=>{
        setMovieList([...movieList,newMovie])
      }

    useEffect(()=>{
      props.getMovies(movieList)
    })


  return (
    <div className="container">
        {movieList.filter((el)=>el.rating >= props.rate && el.title.toLocaleLowerCase().includes(props.searching.toLocaleLowerCase()))
        .map( el =>
          <MovieCard key={el.title} title={el.title} description={el.description} posterURL={el.posterURL} rating={parseInt(el.rating)}/>
        )}

        <div className='addButton'>
          <Add getAdd={getAdd}/>
        </div>

      </div>
  )
}

export default MovieList