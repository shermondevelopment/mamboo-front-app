import React from 'react'

import * as S from './styled'

const Container = ({ children }) => {
  return (
    <S.Content>
      {children}
    </S.Content>
  )
}

export default Container