import styled from "styled-components";

export const CardStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const OrderedList = styled.ol`
  width: 100%;

  li {
    font-size: 20px;
    &:hover {
      color: purple;
    }
  }
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;

  div {
    width: 4vw;
    display: flex;
    justify-content: space-between;
    color: blue;
    cursor: pointer;
  }
`;
