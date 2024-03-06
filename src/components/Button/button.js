// Importação do React
import React from "react"
import './styles.css'

// Desestruturando o props, chamando os objetos{} name, active, onClick
function Button({ name, active, onClick }) {
    
    return (
        // React.Fragments --> JSX
        <div className='containerButton'>
            <button onClick={() => onClick(25)} className = {active ? 'button' : 'disabledButton'}>{name}</button>           {/*props = parametro/propriedade | name = argumento*/}
            <span>Altere o valor clicando no botão acima</span>    
        </div>
    )
}

// Agora podemos usar nosso componente de botão por todo o projeto React
export default Button;