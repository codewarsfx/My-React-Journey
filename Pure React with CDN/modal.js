import React, { useEffect, useRef } from 'react'
import {createPortal} from 'react-dom'
import styled from 'styled-components'


const Modal=({children})=>{

    let divRef= useRef(null)

    if(!divRef.current){
        divRef.current= document.createElement('div')
    }

    useEffect(()=>{
      const modal= document.querySelector('#modal')
      
      modal.appendChild(divRef.current)

      return ()=>{

        modal.removeChild(divRef.current)

      }

    },[])

return createPortal(<Div>{children}</Div>,divRef.current)

}


const Div= styled.div`
padding:2em;
height:40vh;
width:600px;
`

export default Modal