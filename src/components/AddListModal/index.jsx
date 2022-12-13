import React from 'react'


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



const AddList = ({ modalIsOpen, onRequestClose  }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.Input placeholder="Informe o título" />
        <S.Button>Adicionar</S.Button>
      </Modal>
    </>
  )
}

export default AddList