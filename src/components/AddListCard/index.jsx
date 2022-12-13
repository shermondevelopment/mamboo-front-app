import React, { useState, useContext } from 'react'

/** axios */
import axios from 'axios';

/** context */
import ListContext from '../../context/listContext';


/** modal */
import Modal from 'react-modal';

import * as S from './style'

const customStyles = {
  overlay: {
    zIndex: 10,
    background: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



const AddCard = ({ modalIsOpen, onRequestClose,  id  }) => {

  const [content, setContent] = useState('')

  const { updateList, setUpdateList} = useContext(ListContext)

  async function saveList () {
    try {
      await axios.post('http://localhost:3001/card', { content: content, list_id: id })
      setContent('')
      setUpdateList(!updateList)
      onRequestClose()
    } catch (error) {
      alert('erro o adicionar lista', error.response?.data?.error)
    }
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.Title>Adicionar Cartão</S.Title>
        <S.Input placeholder="Informe o título" value={content} onChange={(e) => setContent(e.currentTarget.value)} />
        <S.Button onClick={saveList}>Adicionar</S.Button>
      </Modal>
    </>
  )
}

export default AddCard