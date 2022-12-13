import React from 'react'

/** react-dnd */
import { useDrag } from 'react-dnd'

/** components styled */
import * as S from './styled'

const Card = ({ content }) => {

  const [{ isDragging }, dragRef] = useDrag({
    item: {},
    type: 'CARD',
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

 return (
  <S.Content ref={dragRef} isDragging={isDragging}>
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