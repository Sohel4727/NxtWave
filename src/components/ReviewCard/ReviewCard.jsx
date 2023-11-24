import React from "react";
import "./ReviewCard.css";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ReviewCard = () => {
  return (
    <div className="review_card_container">
      <div className="details_contaier">
        <span>
        <p className="student_name">Sayak Dutta</p>
        <p>Computer Science Engineering (CSE) IIT Guwahati</p>
        </span>

        <div className="profile_container">
          <img src='https://nxtwave.imgix.net/ccbp-website/Reviews/profile-images/sayak-dutta.png?auto=format,compress&q=80' alt="" />
        </div>
          
      </div>
        <div className="middle_section">
        <img src="https://nxtwave.imgix.net/ccbp-website/Reviews/reviews-cms-blue-down-arrow.svg?auto=format,compress&q=80" alt="" />
        <p className="designation">Software Engineer</p>
        <img src="https://nxtwave.imgix.net/ccbp-website/Reviews/company-logos/google.png?auto=format,compress&q=80" width={100} alt="" />
        </div>

        <div className="title_container">
          <h3>Bite-sized training helped me learn advanced skills easily</h3>
        </div>
        <div className="arow_container">
          <ArrowForwardIosIcon/>
        </div>
    </div>
  );
};

export default ReviewCard;
