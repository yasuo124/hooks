import React from 'react'
import ReactStars from "react-rating-stars-component";

const Filter = (props) => {
    const ratingChanged = (newRating) => {
        props.getRate(newRating)
      };  

  return (
    <div className='filter'>
        <div className='search'>
            <input placeholder='Search...' onChange={(e)=>props.getSearch(e.target.value)}/>
        </div>
        <ReactStars className='stars'
                edit={true}
                Count={5}
                isHalf={true}
                color="white"
                activeColor="#e50913"
                value={0}
                onChange={ratingChanged}
        />
    </div>
  )
}

export default Filter