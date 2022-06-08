import React from 'react'
import {useParams} from 'react-router-dom'

const Movie = ({movies}) => {
    const params = useParams()
    const movie = movies.find((el)=>el.title===params.title)
  return (
    <div className="movieContainer">
        <h2>{movie.title}</h2>
        <div className="trailerbox">
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        <h3>Synopsis</h3>
        <p>{movie.description}</p>
    </div>
  )
}

export default Movie