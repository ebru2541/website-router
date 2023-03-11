import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: white;
  display: flex;
  padding: 1.4rem 2rem;
  gap: 4rem;
  height: 100%;
  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;

export const MainDark = styled.div`
  background-color: #7a86b6;
  padding: 1rem;
  color: white;
`;
