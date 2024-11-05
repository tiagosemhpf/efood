import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product'
import { ProductListContainer, ProductListItem } from './styles'

export type Efood = {
  id: number
  capa: string
  titulo: string
  descricao: string
  tipo: string
  destacado: boolean
  avaliacao: number
}

export type Props = {
  title: string
  background: 'light' | 'dark'
  efoods: Efood[]
}

const ProductList = ({ background, title, efoods }: Props) => {
  const { id } = useParams<{ id: string }>()
  const [catalogoServico, setCatalogoServico] = useState<Efood[]>([])

  useEffect(() => {
    if (efoods.length === 0) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setCatalogoServico([res]))
        .catch((error) => console.error('Erro ao carregar dados:', error))
    } else {
      setCatalogoServico(efoods)
    }
  }, [id, efoods])

  const getEfoodTags = (efood: Efood) => {
    const tags: string[] = []

    if (efood.tipo) {
      tags.push(efood.tipo)
    }
    if (efood.destacado) {
      tags.push('Destaque da semana')
    }
    return tags
  }

  return (
    <div className="container">
      <ProductListContainer background={background}>
        <h2>{title}</h2>
        <ProductListItem background={background}>
          {catalogoServico.map((efood) => (
            <Product
              key={efood.id}
              image={efood.capa}
              infos={getEfoodTags(efood)}
              title={efood.titulo}
              nota={efood.avaliacao}
              description={efood.descricao}
              to={`/perfil/${efood.id}`}
              background={background}
            />
          ))}
        </ProductListItem>
      </ProductListContainer>
    </div>
  )
}

export default ProductList
