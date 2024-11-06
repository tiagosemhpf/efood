import React from 'react'
import ImgPoupapClose from '../../assets/icons/close.png'
import Tag from '../Tag'
import { Efood } from '../../pages/Perfil'
import Botao from '../Button'
import {
  CloseImg,
  ContainerPoupap,
  ModalImage,
  Poupap,
  SectionImgModal
} from './styles'

type EfoodItem = Efood | null

interface ModalPoupapProps {
  onClose: () => void
  item: EfoodItem
}

const ModalPoupap: React.FC<ModalPoupapProps> = ({ onClose, item }) => {
  if (!item) return null

  const formatPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  return (
    <div className="container">
      <ContainerPoupap className="overlay">
        <Poupap>
          <CloseImg onClick={onClose}>
            <img src={ImgPoupapClose} alt="Fechar modal" />
          </CloseImg>
          <SectionImgModal>
            <ModalImage src={item.capa} alt={item.titulo} />
          </SectionImgModal>
          <div>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
            {}
            {item.cardapio && item.cardapio.length > 0 && (
              <Tag size="big">
                <Botao
                  type="button"
                  title={'Adicionar ao carrinho'}
                  background="dark"
                >
                  Adicionar ao carrinho - {formatPreco(item.cardapio[0].preco)}
                </Botao>
              </Tag>
            )}
          </div>
        </Poupap>
      </ContainerPoupap>
    </div>
  )
}

export default ModalPoupap
