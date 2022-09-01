import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import styles from "../../styles/caoursel2.module.css";

const starPower = () => {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = ({rate: number}) => {
    setRating(rate)

  }

  return (
    <div className={styles.star}>
      <Rating 
      onClick={handleRating} 
      ratingValue={rating} 
      allowHover={false}
      allowHalfIcon
      size={20}
      
     />
    </div>
  )
}

export default starPower;