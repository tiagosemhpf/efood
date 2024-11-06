import { ImgBanner } from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Efood } from '../../pages/Perfil'

const Banner = () => {
  const [catalogoServico, setCatalogoServico] = useState<Efood | null>(null)
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCatalogoServico(res)
        setIsLoading(false)
      })
      .catch((error) => console.error('Erro ao carregar dados:', error))
  }, [id])

  if (isLoading) {
    return (
      <div className="container">
        <h3>Carregando...</h3>
      </div>
    )
  }

  return (
    <div className="container">
      {catalogoServico && (
        <ImgBanner style={{ backgroundImage: `url(${catalogoServico.capa})` }}>
          <h3>{catalogoServico.tipo}</h3>
          <h1>{catalogoServico.titulo}</h1>
        </ImgBanner>
      )}
    </div>
  )
}

export default Banner
