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
    font-size: 1.3rem;
  }
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  text-decoration: ${ props => props.textDecoration };

  div {
    width: 5.6vw;
    display: flex;
    justify-content: space-between;
    color: blue;
    cursor: pointer;

    svg {
      &:hover {
        transition: 300ms;
        color: green;
      }
    }

  }
`;
