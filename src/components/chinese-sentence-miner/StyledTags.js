import styled from 'styled-components'

export const Button = styled.button`
    background: #1f1f1f;
    border: solid;
    border-width: 2px;
    border-radius: 8px;
    border-color: var(--light-color);
    color: var(--light-color);
    cursor: pointer;
    font-weight: 800;
    margin: 20px;
    margin-top: 10px;
`

export const Input = styled.input`
  background: #1f1f1f;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: solid;
  border-color: var(--light-color);
  color: var(--light-color);
  font-size: 20px;
  margin-top: 30px;
  text-align: center;

  :focus {
    background: #1f1f1f;
    outline-width: 0;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: solid;
    border-color: var(--light-color);
    color: var(--light-color);
    text-align: center;
  }
  ::placeholder {
      color: #78a8b4;
  }
`