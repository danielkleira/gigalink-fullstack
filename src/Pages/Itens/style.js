import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: var(--background-color);
  box-sizing: border-box;
  min-height: 98vh;
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

  .pedidoSave {
    font-size: 28px;
    font-weight: bold;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 3vw;
    margin-right: 3vw;
    padding-top: 1vh;
    padding-bottom: 1vh;

    button {
      background-color: var(--button-background);
      color: var(--text-color);
      border: none;
      :hover {
        filter: brightness(1.1);
        background-color: var(--button-hover);
        cursor: pointer;
      }
    }
  }
`;
