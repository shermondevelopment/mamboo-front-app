import React, { useRef, useContext } from 'react'

/** context */
import ListContext from '../../context/listContext'

/** react-dnd */
import { useDrag, useDrop } from 'react-dnd'

/** components styled */
import * as S from './styled'

const Card = ({ content, id, index }) => {

  const { move } = useContext(ListContext)

  const ref = useRef()

  const [{ isDragging }, dragRef] = useDrag({
    item: { id, index },
    type: 'CARD',
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover (item, monitor) {
      const draggedIndex = item.index
      const targetIndex = index

      if (draggedIndex === targetIndex) {
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

      move(draggedIndex, targetIndex)

      console.log(targetSize)
    }
  })

  dragRef(dropRef(ref))

 return (
  <S.Content ref={ref} isDragging={isDragging}>
    <S.AreaLabel>
      <S.Label color="#f8bd1c" className='label'></S.Label>
      <S.Label color="#891be8" className='label'></S.Label>
      <S.Label color="#ff3838" className='label'></S.Label>
    </S.AreaLabel>
    <S.AreaText>
      {content}
    </S.AreaText>
  </S.Content>
 )
}

export default Card