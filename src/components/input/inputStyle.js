import styled from "styled-components";

export const InputStyle = styled.input.attrs({ type: "text" })`
  padding: 5px;
  margin-top: 10px;
  font-size: 20px;

  @media screen and(max-width: 768px) {
    input {
      margin: 0 0;
    } 
  }
`;