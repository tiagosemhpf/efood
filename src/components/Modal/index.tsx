import React from 'react'
import ImgPoupapClose from '../../assets/icons/close.png'
import Tag from '../Tag'
import Botao from '../Button'
import {
  CloseImg,
  ContainerPoupap,
  ModalImage,
  Poupap,
  SectionImgModal
} from './styles'

interface ModalPoupapProps {
  onClose: () => void
  foto: string
  descricao: string
  preco: number
  nome: string
}

const ModalPoupap: React.FC<ModalPoupapProps> = ({
  onClose,
  foto,
  descricao,
  preco,
  nome
}) => {
  const formatPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const handleAddToCart = () => {
    console.log('Item adicionado ao carrinho:', nome)
    onClose()
  }

  return (
    <div className="container">
      <ContainerPoupap className="overlay">
        <Poupap>
          <CloseImg onClick={onClose}>
            <img src={ImgPoupapClose} alt="Fechar modal" />
          </CloseImg>
          <SectionImgModal>
            <ModalImage src={foto} alt="Produto" />
          </SectionImgModal>
          <div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <Tag size="big">
              <Botao
                type="button"
                onClick={handleAddToCart}
                title={'Adicionar ao carrinho'}
                background="dark"
              >
                Adicionar ao carrinho - {formatPreco(preco)}
              </Botao>
            </Tag>
          </div>
        </Poupap>
      </ContainerPoupap>
    </div>
  )
}

export default ModalPoupap
