import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import {
  CardConteiner,
  CardRestaurant,
  ContainerDescritivo,
  Imagem,
  Infos
} from '../Product/styles'
import { TagContainer } from '../Tag/styles'

export const ProductListContainer = styled.div<Omit<Props, 'title' | 'efoods'>>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) =>
    props.background === 'dark' ? '56px 0 120px 0' : '80px 0 120px 0'};

  ${CardConteiner} {
    width: ${(props) => (props.background === 'dark' ? '320px' : '')};
    display: ${(props) => (props.background === 'dark' ? 'flex' : '')};
    align-items: ${(props) => (props.background === 'dark' ? 'center' : '')};
    justify-content: ${(props) =>
      props.background === 'dark' ? 'center' : ''};
    background-color: ${(props) =>
      props.background === 'dark' ? colors.rosePink : ''};
    height: ${(props) => (props.background === 'dark' ? '338px' : '')};

    ${CardRestaurant} {
      width: ${(props) => (props.background === 'dark' ? '320px' : '')};
      height: ${(props) => (props.background === 'dark' ? '338px' : '')};
      ${Imagem} {
        width: ${(props) => (props.background === 'dark' ? '304px' : '')};
        height: ${(props) => (props.background === 'dark' ? '167px' : '')};
        margin: ${(props) => (props.background === 'dark' ? '8px 8px 0' : '')};
      }
      ${Infos} {
        display: ${(props) => (props.background === 'dark' ? 'none' : '')};
      }
      .Rating {
        display: ${(props) => (props.background === 'dark' ? 'none' : '')};
      }

      ${ContainerDescritivo} {
        background-color: ${(props) =>
          props.background === 'dark' ? colors.rosePink : colors.white};
        width: ${(props) => (props.background === 'dark' ? '320px' : '')};
        height: ${(props) => (props.background === 'dark' ? '88px' : '')};

        h3 {
          color: ${(props) =>
            props.background === 'dark' ? colors.palePeach : colors.rosePink};
          font-size: ${(props) =>
            props.background === 'dark' ? '16px' : '18px'};
          font-weight: ${(props) =>
            props.background === 'dark' ? '900' : '700'};
          line-height: ${(props) =>
            props.background === 'dark' ? '18.75px' : '21.09px'};
          margin-top: ${(props) => (props.background === 'dark' ? '0' : '')};
          width: ${(props) => (props.background === 'dark' ? '124px' : '')};
          height: ${(props) => (props.background === 'dark' ? '19px' : '')};
        }

        p {
          width: ${(props) => (props.background === 'dark' ? '304px' : '')};
          color: ${(props) =>
            props.background === 'dark' ? colors.palePeach : colors.rosePink};
          height: ${(props) => (props.background === 'dark' ? '88px' : '')};
          margin: ${(props) => (props.background === 'dark' ? '8px' : '')};
        }

        ${TagContainer} {
          width: ${(props) => (props.background === 'dark' ? '304px' : '')};
          padding: 0;
        }

        ${ButtonContainer} {
          background-color: ${(props) =>
            props.background === 'dark' ? colors.palePeach : colors.rosePink};
          color: ${(props) =>
            props.background === 'dark' ? colors.rosePink : colors.palePeach};
          height: ${(props) => (props.background === 'dark' ? '24px' : '')};
        }
      }
    }
  }
`

export const ProductListItem = styled.ul<Omit<Props, 'title' | 'efoods'>>`
  max-width: 1024px;
  width: 100%;
  max-height: ${(props) => (props.background === 'dark' ? '708px' : '1290px')};
  height: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.background === 'dark' ? '1fr 1fr 1fr' : '1fr 1fr'};
  column-gap: ${(props) => (props.background === 'dark' ? '32px' : '80px')};
  row-gap: ${(props) => (props.background === 'dark' ? '32px' : '48px')};
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
`
