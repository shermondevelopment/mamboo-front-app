import React from 'react'

/** components styled */
import * as S from './styled'

/** icons */
import { SlOptions } from "react-icons/sl";

/** components */
import Card from '../Card';

const List = ({ title, cards }) => {

  return (
    <S.ListContainer>
      <S.ListHeader>
        <S.ListHeaderTitle>{title}</S.ListHeaderTitle>
        <SlOptions color="#CDCCCA" fontSize="24px" cursor="pointer" />
      </S.ListHeader>
      {cards.map((item, index) => (
        <Card content={item.content} index={index} id={index + 1} />
      ))}
    </S.ListContainer>
  )

}

export default List