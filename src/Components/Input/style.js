import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
  justify-content: center;
  width: 100%;

  span {
    color: var(--error-message);
  }
  div {
    align-self: flex-start;
  }
  @media (max-width: 620px) {
    width: 85%;
  }
`;

export const InputContainer = styled.div`
  background: var(--button-background);
  border-radius: 10px;
  border: 2px solid var(--button-background);
  padding: 1rem;
  width: 95%;
  display: flex;
  justify-content: space-between;

  ${(props) =>
    props.isErrored &&
    css`
      border: var(--error-message) solid 1px;
    `}

  input {
    background: transparent;
    border: none;
    font-size: 14px;
    width: 100%;
    height: 100%;
    :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  }
`;
