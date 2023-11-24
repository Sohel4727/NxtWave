import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Banner.css"
const Banner = () => {
  return (
    <div className='main_banner_container' >
        <button className='new_btn'>NEW</button>
        <p>Announcing Our Latest Fundraise of INR 275 Crores Led by Greater Pacific Capital.</p>
        <a className='link' href="/">Know more</a>
        <ArrowForwardIcon sx={{color:'white',fontSize:"16px",marginTop:1}}/>
    </div>
  )
}

export default Banner