import styed from 'styled-components'


export const Input = styed.input`
  width: 350px;
  padding: 10px;
  outline: none;
  border: 2px solid #f4f4f4;
`

export const Button = styed.button`
  border: 1px solid #cdccca;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #f8f8f8;
  transition: all 0.3s linear;
  &:hover {
    background: #dddd;
  }
`