import styled from 'styled-components';

export const TextWrap = styled.div`
  max-width: 650px;
  margin: 0 auto;
  @media(max-height: 825px) {
    margin: 0 auto;
  }
`

export const Text = styled.p`
  font-size: 1.4rem;
  text-align: center;
  @media (max-width: 948px) and (min-height: 500px) {
    font-size: 1.4rem;
  }
`

export const DisplayWrap = styled.div``

export const ProjLinkWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ProjNav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: auto;
`

export const ProjLink = styled.a`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  @media (max-width: 650px) {
    font-size: .2em;
  }
`

export const AppUI = styled.img`
  height: auto;
  width: 100%;
  margin: 0 auto;
  max-width: 715px;
  display: block;
  box-shadow: 1px 1px 16px -3px rgba(0,0,0,1);
`
