import styled, { css } from 'styled-components'

export const Content = styled.section`
  width: 100%;
  max-width: 272px;
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  transition: all 0.3s linear;
  user-select: none;
  cursor: grab;
  position: relative;;

  ${props => props.isDragging && css`
    border: 2px dashed #c3c3c3;
    background: transparent;
    border-radius: 0;
    cursor: grabbing;
    p, .label {
      opacity: 0;
    }
  `}
`

export const AreaLabel = styled.div`
  width: 100%;
  height: 8px;
  margin-bottom: 9px;
  padding: 0px 5px;
  display: flex;
  flex-wrap: wrap;
`

export const Label = styled.div`
  width: 100%;
  max-width: 60px;
  height: 8px;
  background: ${props => props.color ? props.color : '#ccc'};
  border-radius: 5px;
  margin-right: 8px;
`
export const AreaText = styled.p`
  font-family: 'Popins', sans-serif;
  font-size: 16px;
  padding: 10px 5px;
  cursor: pointer;
  word-break: break-all;

  ${props => props.contentEditable && css`
      border: dashed 2px #c3c3c3;
      outline: none;
  `}

`

export const DeleteCardArea =  styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  background: #d0cfcd;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`