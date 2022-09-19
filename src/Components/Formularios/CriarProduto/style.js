import styled from "styled-components";

export const Container = styled.div`
  font-size: 20px;
  font-family: var(--body-font);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--header-background);
  color: var(--text-color);
  padding: 5px;
  gap: 15px;
  max-height: 85vh;
  p{
    font-size:10px;
    color: var(--error-message);
  }

  input{
    width: 190px;
  }
  button {
    background-color: var(--button-background);
    color: var(--text-color);
    :hover {
      filter: brightness(1.1);
      background-color: var(--button-hover);
      cursor: pointer;
    }
  }

 
`;
