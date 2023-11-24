import React from "react";
import Card from "../../components/Card/Card"
import Banner from "../../components/Banner/Banner"
import { Container, Grid } from "@mui/material";
import "./LandingPage.css"
const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Container>
      <Grid container spacing={4}>
        <Grid item lg={4} xs={12}>
          <div className="disigned_container">
            <h1 className="heading">
              Designed to transform you into a highly skilled Software
              Professional
            </h1>
            <p className="sub_heading">Recognized as the Greatest Brand in Education</p>
            <img
            className="img_divider"
              src="https://nxtwave.imgix.net/ccbp-website/Home/award-design-line-desktop-2x.png?auto=format,compress&q=80"
              width={250}
              alt="divider"
            />
            <div style={{ display: "flex" }}>
              <img
                src="https://nxtwave.imgix.net/ccbp-website/intensive/landingpage/award1-design-desktop-2x.png?auto=format,compress&q=80"
                width={200}
                alt="divider"
              />
              <img
                src="https://nxtwave.imgix.net/ccbp-website/intensive/landingpage/award2-design-desktop-2x.png?auto=format,compress&q=80"
                width={200}
                alt="divider"
              />
            </div>
          </div>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card />
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default LandingPage;
