import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
  height: 100vh;
  width: 100vw;
  color: var(--text-color);

  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    margin-left: 25px;
    margin-right: 25px;
    width: 80vw;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 5vh;
  }

  .botaoModal {
    background-color: var(--button-background);
    color: var(--text-color);
    :hover {
      filter: brightness(1.1);
      background-color: var(--button-hover);
      cursor: pointer;
    }
  }


 
`;
