import styled from 'styled-components'

export const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 1450px;
  margin: 30px auto;
  justify-content: space-between;
`
export const Logo = styled.div`

`
export const LogoName = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #5a5959;
`

export const Tools = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const LastView = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  background: #556b9e;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export const IconButton: any = styled.button`
  width: 40px;
  height: 40px;
  background: #fff;
  border: none;
  cursor: pointer;
`
export const Icon = styled.img`
  width: 15px;
  height: 15px;
`
export const DropButton = styled.select`
  width: 100px;
  height: 40px;
  background: #fff;
  border: none;
`

export const Option = styled.option`
 
`