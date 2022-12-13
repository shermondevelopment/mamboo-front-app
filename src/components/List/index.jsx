import React, { useState } from 'react'

/** components styled */
import * as S from './styled'

/** icons */
import { BiPlusCircle } from "react-icons/bi";

/** context */

/** components */
import Card from '../Card';
import AddCard from '../AddListCard';

const List = ({ title, cards, index:listIndex, id }) => {


  const [openModalAddCard, setOpenModalAddCard] = useState(false)

  return (
    <S.ListContainer>
      <S.ListHeader>
        <S.ListHeaderTitle>{title}</S.ListHeaderTitle>
        <BiPlusCircle color="#CDCCCA" fontSize="24px" cursor="pointer" label="Adicionar cartão" onClick={() => setOpenModalAddCard(true)} />
      </S.ListHeader>
      {cards.map((item, index) => (
        <Card content={item.content} index={index} listIndex={listIndex} id={item._id} idList={id} />
      ))}
      <AddCard modalIsOpen={openModalAddCard} onRequestClose={() => setOpenModalAddCard(false)} id={id}  />
    </S.ListContainer>
  )

}

export default List