import React, { useState, useContext } from 'react'

/** axios */
import axios from 'axios';

/**  list context */
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



const EditContentCard = ({ modalIsOpen, onRequestClose, idCard, content  }) => {

  const [contentEdit, setContentEdited] = useState(content)

  const { updateList, setUpdateList } = useContext(ListContext)

  async function saveList () {
    try {
      await axios.put(`http://localhost:3001/card/${idCard}`, { content: contentEdit })

      setUpdateList(!updateList)
      onRequestClose()
    } catch (error) {
      alert('erro ao editar lista', error.response?.data?.error)
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
        <S.Input placeholder="Informe o título" value={contentEdit} onChange={(e) => setContentEdited(e.currentTarget.value)} />
        <S.Button onClick={saveList}>Salvar</S.Button>
      </Modal>
    </>
  )
}

export default EditContentCard