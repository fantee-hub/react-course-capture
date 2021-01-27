import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// images
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import athlete from "../img/athlete-small.png";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { fade, zoom, Line, slider, sliderContainer } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#ffffff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={Line} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={zoom} src={athlete} alt="An athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="Racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  width: 100%;
  top: 10%;
  height: 100vh;
  left: 0%;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
