import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.1rem;
  background-color: #7a86b6;
  color: white;
  border-bottom: 4px solid #c1df17;
  z-index: 5;
  text-shadow: 2px 2px 5px black;
  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NavLinkNew = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding-right: 1rem;
  @media screen and (max-width: 790px) {
    text-align: center;
    margin-top: .5rem;
  }
`;

export const NavBarTitle = styled.h2`
  color: #c1df17;
`;
