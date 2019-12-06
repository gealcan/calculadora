import React from 'react'
import ReactDOM from 'react-dom'


//import Ptrimeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import BoaTarde, { BoaNoite } from './componentes/Multiplos'
//import Multi, { BoaNoite }from './componentes/Multiplos'  // multi pode ser qualquer nome
//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
      <div>
         <Pai nome="Joao" sobrenome="Alcantara">
            <Filho nome="Pedro" /> <br/>
            {/* <Filho nome="Paulo" /> <br/>
            <Filho nome="Carla" /> */}

       </Pai>  
    
      </div>
    , document.getElementById('root'))
  

//   ReactDOM.render(
//   <div> 
//      <Multi.BoaTarde nome="Ana"/>
//      <BoaNoite nome="Bia"/>
//   </div>
//     , document.getElementById('root'))


//  nome do componente com letra maiuscula
// const elemento = <h1>Ola panaca!</h1>
// ReactDOM.render(elemento, document.getElementById('root'))

// ReactDOM.render(<h1>Ola panaca!</h1>, document.getElementById('root')) 