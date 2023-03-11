import React from "react";
import { FooterDiv } from "./Footer.style";
import img1 from "../../assets/images/clarusway_logo.png";

const Footer = () => {
  return (
    <div>
      <FooterDiv>
        <p>Clarusway Web Design, Copright &copy {new Date().getFullYear()}</p>
        <img src={img1} width="100px" alt=""></img>
      </FooterDiv>
    </div>
  );
};

export default Footer;
