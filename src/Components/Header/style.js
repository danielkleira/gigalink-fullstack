import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  background-color: var(--header-background);
  height: 6vh;
  justify-content: space-between;
  align-items: center;

  .paper {
    background-color: transparent;
    border: none;
    padding: 0;
  }
  .menu {
    background-color: var(--header-background);
    color: var(--text-color);
    border: none;
    box-shadow: none;
    .menuItem {
      display: flex;
      gap: 5px;
      text-align: left;
    }
  }
  div {
    padding: none;
    margin-right: 2vw;
    margin-left: 8vw;

    img {
      width: 6vh;
    }
  }

  button {
    box-sizing: border-box;
    width: 10vw;
    max-width: 20vw;
    font-size: 1em;
    font-weight: 600;
    background-color: var(--button-background);
    color: var(--text-color);
    padding: none;

    :hover {
      filter: brightness(1.1);
      background-color: var(--button-hover);
      cursor: pointer;
    }
  }
`;
