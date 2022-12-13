import React from 'react'

/** components styled */
import * as S from './styled'

/** icons */
import { SlOptions } from "react-icons/sl";

const List = () => {

  return (
    <S.ListContainer>
      <S.ListHeader>
        <S.ListHeaderTitle>To Do</S.ListHeaderTitle>
        <SlOptions color="#CDCCCA" fontSize="24px" cursor="pointer" />
      </S.ListHeader>
    </S.ListContainer>
  )

}

export default List