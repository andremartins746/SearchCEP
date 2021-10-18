import React from "react"
import "../components/handlecep.css"
const handlecep = (props) => {
    return (
        <div className="conteiner-informacao">
            <h1>Informações</h1>
            <ul>
                <li>RUA: {props.address}</li>
                <li>CIDADE: {props.city}</li>
                <li>CEP: {props.code}</li>
                <li>BAIRRO: {props.district}</li>
            </ul>
       
        </div>
    )
}

export default handlecep;