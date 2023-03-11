import styled from "styled-components";

export const ServicesDiv = styled.div`
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  padding: 1.4rem 2rem;
  gap: 1rem;
  nav {
    background-color: rgba(128, 128, 128, 0.209);
    margin-bottom: 0.5rem;
    padding: 0.6rem 1rem;
    width: 80%;
    min-width: 600px;
  }

  h3,
  p {
    text-align: left;
    margin-top:.5rem;
  }
  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;

export const ServicesForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  background-color: #7a86b6;
  padding: 1rem;
  text-align: left;

  input {
    width: 20rem;
    padding: 0.3rem;
  }
  button {
    background-color: coral;
    border: none;
    width: 5rem;
    padding: 0.3rem;
    color: white;
  }
`;