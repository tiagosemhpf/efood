import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

export const CardRestaurant = styled.div`
  width: 472px;
  height: 398px;
  position: relative;
`
export const CardConteiner = styled.div``

export const Imagem = styled.div`
  background-repeat: no-repeat;
  width: 472px;
  height: 217px;
  background-size: 100% 100%;
`
export const ContainerDescritivo = styled.div`
  width: 472px;
  height: 181px;
  border: 1px solid ${colors.rosePink};
  border-top: 0;

  p {
    width: 456px;
    height: 88px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 8px;
  }

  h3 {
    height: 21px;
    font-size: 18px;
    font-weight: 700;
  }

  ${TagContainer} {
    margin: 0 0 8px 8px;
  }

  /* ${ButtonContainer} {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    cursor: pointer;
  } */
`
export const RatingStar = styled.div`
  width: 21px;
  height: 21px;
  padding: 0.5px 0px 0.5px 0px;
  gap: 0px;
  opacity: 0px;
`
export const LineSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 0 7px;

  .tituloCard {
    height: 21px;
  }
  .nota {
    width: 26px;
    height: 21px;
  }

  .Rating {
    width: 51px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin: 0 0 0 8px;
  }
`
