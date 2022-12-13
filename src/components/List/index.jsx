import React from 'react'

/** components styled */
import * as S from './styled'

/** icons */
import { SlOptions } from "react-icons/sl";

/** components */
import Card from '../Card';

const List = () => {

  return (
    <S.ListContainer>
      <S.ListHeader>
        <S.ListHeaderTitle>To Do</S.ListHeaderTitle>
        <SlOptions color="#CDCCCA" fontSize="24px" cursor="pointer" />
      </S.ListHeader>
      <Card content="Olá tudo bom" />
    </S.ListContainer>
  )

}

export default List