import styled from "styled-components";

export const ContentStyle = styled.section`
  width: 50vw;
  background-color: white;
  box-shadow: 0 0 10px black;
  color: black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px ) {

   section {
      width: 80vw;
    }
    
    h1 {
      color: red;
      font-size: 20px;
    }

    h2 {
      font-size: 17px;
    }
  }
`;

