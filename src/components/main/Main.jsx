import React from "react";
import { Sub, SubButton, SubInput, SubTitle, SubDiv } from "./Main.style";

const Main = () => {
  return (
  
      <Sub>
        <SubDiv>
          <SubTitle>Subsribe To Our Newsletter</SubTitle>
        </SubDiv>

        <SubDiv>
          <SubInput type="text" placeholder="Enter Email..." />
          <SubButton type="submit">Subsribe</SubButton>
        </SubDiv>
      </Sub>
      

  );
};

export default Main;
