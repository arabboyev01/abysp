import styled from 'styled-components'

export const StyleTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const InoutWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`
export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
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
  width: 100px;
  height: 40px;
  border: none;
  background: #fff;
  color: #000;
  padding-left: 20px;
`

export const CloseIcon: any = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  cursor: pointer;
`
export const EditIcons = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
  cursor: pointer;
`