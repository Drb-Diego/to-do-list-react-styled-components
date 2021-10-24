import styled from "styled-components";

export const AddButton = styled.button`
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin: 10px;
  border: none;
  color: white;
  font-weight: bold;
  background-color: blue;
  box-shadow: 0 0 5px black;
  
  &:hover {
    transition: 300ms;
    background-color: black;
  }
`;