import styled from 'styled-components'

export const StyleTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`

export const InoutWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  height: 150px;
`

export const IconWrapper: any = styled.div`
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Icon = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
`

export const MainInput: any = styled.input`
  width: 130px;
  height: 40px;
  border: none;
  background: #fff;
  color: #000;
  padding-left: 10px;
`

export const CloseIcon: any = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  cursor: pointer;
`
export const EditIcons = styled.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
  cursor: pointer;
`