import React from "react"

import { Conteiner } from "../components/handlecep.style"
const handlecep = (props) => {
    return (
        <Conteiner>
            <h1>Informações</h1>
            <ul>
                <li>RUA: {props.address}</li>
                <li>CIDADE: {props.city}</li>
                <li>CEP: {props.code}</li>
                <li>BAIRRO: {props.district}</li>
            </ul>
        </Conteiner>
      
    )
}

export default handlecep;