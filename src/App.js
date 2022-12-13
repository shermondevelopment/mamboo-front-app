import React from 'react'

/** components */
import Header from './components/Header';
import List from './components/List';
import Container from './components/Container';


/** globalStyle */
import GlobalStyle from './styles/globalStlye';

function App() {
  return (
    <>
      <Header />
      <Container>
        <List />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
