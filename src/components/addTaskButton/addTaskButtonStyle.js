import styled from "styled-components";

export const AddButton = styled.button`
  border-radius: 5px;
  font-size: 0.9rem;
  padding: 5px;
  cursor: pointer;
  margin: 1rem;
  border: none;
  color: white;
  font-weight: bold;
  background-color: blue;
  box-shadow: 0 0 0.5rem black;
  
  &:hover {
    transition: 500ms;
    background-color: black;
  }
`;