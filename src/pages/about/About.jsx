import React from "react";
import Main from "../../components/main/Main";
import { MainDark, MainDiv } from "./About.style";
const About = () => {
  return (
    <>
      <Main />
      <MainDiv>
        <div>
          <h3>About Us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            soluta excepturi porro eius architecto, sequi nulla quibusdam
            repellendus consequatur sunt harum optio dolorem esse laboriosam.
            Libero sequi tenetur omnis dolorem.
          </p>
          <MainDark>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              soluta excepturi porro eius architecto, sequi nulla quibusdam
              repellendus consequatur sunt harum optio dolorem esse laboriosam.
              Libero sequi tenetur omnis dolorem.
            </p>
          </MainDark>
        </div>
        <MainDark>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            soluta excepturi porro eius architecto, sequi nulla quibusdam
            repellendus consequatur sunt harum optio dolorem esse laboriosam.
            Libero sequi tenetur omnis dolorem.
          </p>
        </MainDark>
      </MainDiv>
    </>
  );
};

export default About;
