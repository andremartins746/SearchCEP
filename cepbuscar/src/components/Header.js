import React from "react"
import Div from "../components/header.style"

const Header = (props) => {
    return(
        <Div>
            <h3>{props.title}</h3>
        </Div>
    )
}

export default Header