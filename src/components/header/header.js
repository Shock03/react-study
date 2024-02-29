// Importação do React
import React from "react"
import './styles.css'

function Header() {
    return (
        // React.Fragments --> JSX
        <div>
            <nav>
                <ul>
                    <li>Home</li> 
                    <li>Fotos</li>
                    <li>Contatos</li>
                </ul>
            </nav>
        </div>
    )
}

// Agora podemos usar nosso componente Header por todo o projeto React
export default Header;