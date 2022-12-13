import React, { useState, useEffect } from 'react'

/** icons */
import { BiPlusCircle } from "react-icons/bi";

/** product */
import produce from 'immer'

/** react-dnd */
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

/** components */
import Header from './components/Header';
import List from './components/List';
import Container from './components/Container';
import { ListAdd } from './components/List/styled';



/** globalStyle */
import GlobalStyle from './styles/globalStlye';

/** axios */
import axios from 'axios'

/** context */
import ListContext from './context/listContext';

function App() {

  const [lists, setLists] = useState()

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]

      draft[fromList].cards.splice(from, 1)
      draft[toList].cards.splice(to, 0, dragged)
    }))
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
          {lists && lists.map( (item, index) => (
            <List cards={item.cards} index={index}  title={item.title} />
          ) )}
          <ListAdd>
            <BiPlusCircle color="#cdccca"  fontSize={20} />
            <span>Adicionar outra lista</span>
          </ListAdd>
        </Container>
      </ListContext.Provider>
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
