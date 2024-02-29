// Importação do React
import React from "react"
import './styles.css'

function Button(props) {
    return (
        // React.Fragments --> JSX
        <div className='containerButton'>
            <button className = {props.active ? 'button' : 'disabledButton'}>{props.name}</button>           {/*props = parametro/propriedade | name = argumento*/}
            <span>Seus dados estão a salvo conosco</span>    
        </div>
    )
}

// Agora podemos usar nosso componente de botão por todo o projeto React
export default Button;