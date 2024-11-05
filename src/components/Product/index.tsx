import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  CardConteiner,
  CardRestaurant,
  ContainerDescritivo,
  Imagem,
  Infos,
  LineSection,
  RatingStar
} from './styles'

import RestaurantRatingImg from '../../assets/icons/estrela.png'

import Tag from '../../components/Tag'
import Botao from '../Button'
import ModalPoupap from '../Modal'

export type Props = {
  title: string
  description: string
  infos: string[]
  nota: string
  image: string
  background: 'light' | 'dark'
}

const Products = ({
  title,
  description,
  infos,
  nota,
  image,
  background
}: Props) => {
  const buttonText =
    location.pathname === '/Perfil' ? 'Adicionar ao carrinho' : 'Saiba mais'

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleButtonClick = () => {
    if (
      location.pathname === '/Perfil' &&
      buttonText === 'Adicionar ao carrinho'
    ) {
      toggleModal()
    } else {
      window.location.href = '/Perfil'
    }
  }

  return (
    <div className="container">
      <>
        <CardConteiner>
          <CardRestaurant>
            {}
            <Imagem style={{ backgroundImage: `url(${image})` }} />
            <Infos>
              {}
              {infos.map((info) => (
                <Tag key={info}>{info}</Tag>
              ))}
            </Infos>
            <ContainerDescritivo>
              <LineSection>
                {}
                <h3 className="tituloCard">{title}</h3>
                <div className="Rating">
                  {}
                  <h3 className="nota">{nota}</h3>
                  <RatingStar
                    style={{ backgroundImage: `url(${RestaurantRatingImg})` }}
                  />
                </div>
              </LineSection>
              {}
              <p>{description}</p>
              {}
              <Link to="/Perfil">
                <Tag size="big">
                  <Botao
                    type="button"
                    title={buttonText}
                    background={'light'}
                    onClick={handleButtonClick}
                  >
                    {buttonText}
                  </Botao>
                </Tag>
              </Link>
            </ContainerDescritivo>
          </CardRestaurant>
        </CardConteiner>
        {isModalOpen && <ModalPoupap onClose={toggleModal} />}
      </>
    </div>
  )
}

export default Products