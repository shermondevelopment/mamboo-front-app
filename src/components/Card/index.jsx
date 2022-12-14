import React, { useRef, useContext, useState } from 'react'

/** context */
import ListContext from '../../context/listContext'

/** icon */
import { BiTrash } from "react-icons/bi";

/** react-dnd */
import { useDrag, useDrop } from 'react-dnd'

/** components styled */
import * as S from './styled'
import axios from 'axios';
import EditContentCard from '../EditContentCard';

const Card = ({ content, id, index, listIndex, idList }) => {
  const { move, setUpdateList, updateList } = useContext(ListContext)
  const [openModalEditCard, setOpenModalEditCard] = useState(false)

  const deleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/card/${id}`)
      setUpdateList(!updateList)
    } catch (error) {
      alert('erro ao deletar card')
    }
  }

  const moveCardApi = async (id_list_move_card, id_card) => {
    try {
      await axios.put(`http://localhost:3001/card/${id_card}`, { list_id: id_list_move_card })
    } catch (error) {
      alert('erro ao deletar card')
    }
  }

  const ref = useRef()

  const [{ isDragging }, dragRef] = useDrag({
    item: { id, index, listIndex, idList },
    type: 'CARD',
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover (item, monitor) {


      const draggedListIndex = item.listIndex

      const targetListIndex = listIndex

      const draggedIndex = item.index
      const targetIndex = index

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return
      }
      
      const targetSize = ref.current.getBoundingClientRect()
    
      const targetCenter = (targetSize.bottom - targetSize.top) / 2

      const draggedOffset = monitor.getClientOffset()
      const draggedTop = draggedOffset.y - targetSize.top

      if(draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }


      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex)

      item.index = targetIndex
      item.listIndex = targetListIndex

      
    },
    drop (item, monitor) {
      if(item.idList !== idList) {
        moveCardApi(idList, id)
      }
    },
  })

  dragRef(dropRef(ref))

 return (
  <S.Content ref={ref} isDragging={isDragging}>
    <S.DeleteCardArea onClick={() => deleteCard(id)}>
      <BiTrash  />
    </S.DeleteCardArea>
    <S.AreaLabel>
      <S.Label color="#f8bd1c" className='label'></S.Label>
      <S.Label color="#891be8" className='label'></S.Label>
    </S.AreaLabel>
    <S.AreaText onClick={() => setOpenModalEditCard(true)}>
      {content}
    </S.AreaText>
    <EditContentCard modalIsOpen={openModalEditCard} onRequestClose={() => setOpenModalEditCard(false)} content={content} idCard={id} />
  </S.Content>
 )
}

export default Card