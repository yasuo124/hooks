import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom"

const MovieCard = (props) => {
  return (
    <div className="movie">
      <Link to={`/${props.title}`} style={{ textDecoration: 'none' }}>
        <img src={props.posterURL} className="poster" alt={props.title}/>
        <div className="movie-details">
            <div className="movie-box">
                <h4 className="title">{props.title}</h4>
                <ReactStars 
                edit={false}
                Count={5}
                isHalf={true}
                color="white"
                activeColor="#e50913"
                value={props.rating}
        />
            </div>
            <div className="description">
                <h2>Synopsis</h2>
                {props.description}
            </div>
        </div>
      </Link>  
    </div>
  )
}

export default MovieCard