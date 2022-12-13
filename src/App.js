import React, { useState, useEffect } from 'react'

/** react-dnd */
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

/** components */
import Header from './components/Header';
import List from './components/List';
import Container from './components/Container';


/** globalStyle */
import GlobalStyle from './styles/globalStlye';

/** axios */
import axios from 'axios'
import ListContext from './context/listContext';

function App() {

  const [lists, setLists] = useState()

  function move(from, to) {

  }

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
    <DndProvider backend={HTML5Backend}>
      <Header />
      <ListContext.Provider value={{ lists, move }}>
        <Container>
          {lists && lists.map( item => (
            <List cards={item.cards} title={item.title} />
          ) )}
        </Container>
      </ListContext.Provider>
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
