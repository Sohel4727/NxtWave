import React from "react";
import "./Card.css";
import { Call } from "@mui/icons-material";
import { Button } from "@mui/material";
const Card = () => {
  return (
    <div className="card_main_container">
      <div className="card_container">
        <div className="img_container">
          <img
            src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg"
            width={180}
            alt="logo"
          />
          <img
            className="student_img"
            src="https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/academy-peron-photo.png?auto=format,compress&q=80"
            alt="student"
          />
        </div>
        <div className="card_footer">
          <div className="intermediate_text">POST 12TH / INTERMEDIATE</div>
          <div className="years_text">1ST, 2ND, 3RD YEAR</div>

          <h3 className="card_title">Learn like top IITians and achieve high-paid software jobs</h3>
          <div className="option_container">
          <div>
            <p>NEXT BATCH</p>
            <p>Starts soon</p>
          </div>
          <div>
            <p>Limited Seats</p>
            <p>Available</p>
          </div>
          </div>
          <div className="call_btn_container">
            <Call/>
            <Button style={{color:"white"}}>Request Callback</Button>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <Button style={{color:"#1565d8",fontWeight:"bold"}}>Know More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
