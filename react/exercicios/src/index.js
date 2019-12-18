import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
      <div>
         <Pai nome="Paulo" sobrenome="Alcântara">
            <Filho nome="Pedro"  />
            <Filho nome="Paulo"  />
            <Filho nome="Carla"  /> 
         </Pai>
      </div>
, document.getElementById('root'))