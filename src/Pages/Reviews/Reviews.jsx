import React from 'react'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import { Container, Grid } from '@mui/material'
import "./Reviews.css"
const Reviews = () => {
  return (
      <Container>
    <div className='reviewPage_main_container'>
     <ReviewCard/>
     <ReviewCard/>
     <ReviewCard/>
     <ReviewCard/>
     <ReviewCard/>
     <ReviewCard/>
    </div>
      </Container>
  )
}

export default Reviews