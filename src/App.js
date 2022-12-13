import React, { useState, useEffect } from 'react'

/** components */
import Header from './components/Header';
import List from './components/List';
import Container from './components/Container';


/** globalStyle */
import GlobalStyle from './styles/globalStlye';

/** axios */
import axios from 'axios'

function App() {

  const [lists, setLists] = useState()

  const sarchList = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/cards')
      setLists(data)
    } catch (error) {
      alert('erro ao buscar listas')
    }
  }

  useEffect(() => {
    sarchList()
  }, [])

  return (
    <>
      <Header />
      <Container>
        {lists && lists.map( item => (
          <List cards={item.cards} title={item.title} />
        ) )}
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
