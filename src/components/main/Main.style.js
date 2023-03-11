import styled from "styled-components";

export const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  color: rgba(0, 0, 0, 0.629);
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  color: rgba(0, 0, 0, 0.629);
  font-size: 20px;
  font-weight: 700;
`;
export const SubDiv = styled.div`
  display: flex;
`;
export const SubInput = styled.input`
  padding: 0.2rem 1rem;
  outline: none;
`;

export const SubButton = styled.button`
  padding: 0.2rem 1rem;
  color: white;
  background-color: coral;
  border: none;

  :hover {
    cursor: pointer;
    transform: scale(0.95);
    opacity: 0.7;
  }
`;
