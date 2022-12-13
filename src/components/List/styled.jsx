import styled from 'styled-components'


export const ListContainer = styled.article`
  width: 272px;
  height: auto;
  margin-right: 30px;
`

export const ListHeader = styled.section`
  width: 272px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 14px 20px;
  background: #f4f4f4;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`

export const ListHeaderTitle = styled.h2`
  font-family: 'Popins', sans-serif;
  font-weight: 600;
  font-size: 16px;
`

export const ListAdd  = styled.div`
  height: 50px;
  width: 272px;
  border: 4px dashed #f8f8f8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cdccca;
  font-weight: 600;
  cursor: pointer;
  user-select: noner;

  span {
    margin-left: 10px;
  }
`