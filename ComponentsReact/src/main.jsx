import React from 'react'
import ReactDOM from 'react-dom/client'
import Cabecalho from '../src/componentes/cabecalho/cabecalho.jsx'
import Conteudo from '../src/componentes/conteudo/conteudo.jsx'
import Rodape from '../src/componentes/rodape/rodape.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <Cabecalho/>
  <Conteudo/>
  <Rodape/>
  </React.StrictMode>,
)
