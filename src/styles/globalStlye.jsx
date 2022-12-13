import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

 * {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: 'Popins', sans-serif;
 }

 body {
  height: 100%;
 }

 #root {
  height: inherit;
 }

`

export default GlobalStyle