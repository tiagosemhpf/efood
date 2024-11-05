import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import RestaurantRatingImg from '../../assets/icons/estrela.png'
import Tag from '../../components/Tag'
import Botao from '../Button'

import {
  CardConteiner,
  CardRestaurant,
  ContainerDescritivo,
  Imagem,
  Infos,
  LineSection,
  RatingStar
} from './styles'
import { Efood } from '../../pages/Home'
import ModalPoupap from '../Modal'

export type Props = {
  title: string
  infos: string[]
  nota: number
  image: string
  description: string
  to: string
  background: 'light' | 'dark'
}

const Products = ({
  title,
  description,
  infos,
  nota,
  image,
  background,
  to
}: Props) => {
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<Efood | null>(null) // Defina como Efood | null

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleButtonClick = () => {
    if (location.pathname === '/') {
      window.location.href = to
    } else {
      setCurrentItem({
        id: 1,
        capa: image,
        titulo: title,
        descricao: description,
        tipo: 'tipo',
        destacado: true,
        avaliacao: nota,
        cardapio: [
          {
            foto: image,
            preco: 10,
            id: 1,
            nome: 'Nome do item',
            descricao: 'Descrição do item',
            porcao: 'Porção'
          }
        ]
      })
      toggleModal()
    }
  }

  return (
    <div className="container">
      <CardConteiner>
        <CardRestaurant>
          <Imagem style={{ backgroundImage: `url(${image})` }} />
          <Infos>
            {infos.map((info) => (
              <Tag key={info}>{info}</Tag>
            ))}
          </Infos>
          <ContainerDescritivo>
            <LineSection>
              <h3 className="tituloCard">{title}</h3>
              <div className="Rating">
                <h3 className="nota">{nota}</h3>
                <RatingStar
                  style={{ backgroundImage: `url(${RestaurantRatingImg})` }}
                />
              </div>
            </LineSection>
            <p>{description}</p>
            {location.pathname === '/' ? (
              <Botao
                type="link"
                to={to}
                title="Saiba mais"
                background={background}
              >
                Saiba mais
              </Botao>
            ) : (
              <Botao
                type="button"
                onClick={handleButtonClick}
                title="Adicionar ao carrinho"
                background={background}
              >
                Adicionar ao carrinho
              </Botao>
            )}
          </ContainerDescritivo>
        </CardRestaurant>
      </CardConteiner>
      {isModalOpen && currentItem && (
        <ModalPoupap item={currentItem} onClose={toggleModal} />
      )}
    </div>
  )
}

export default Products
