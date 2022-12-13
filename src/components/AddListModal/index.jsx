import axios from 'axios';
import React, { useState } from 'react'


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



const AddList = ({ modalIsOpen, onRequestClose, updateList, setUpdateList  }) => {

  const [listTitle, setListTitle] = useState('')

  async function saveList () {
    try {
      await axios.post('http://localhost:3001/new/list', { title: listTitle })
      setListTitle('')
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
        <S.Input placeholder="Informe o título" value={listTitle} onChange={(e) => setListTitle(e.currentTarget.value)} />
        <S.Button onClick={saveList}>Adicionar</S.Button>
      </Modal>
    </>
  )
}

export default AddList