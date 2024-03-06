import './App.css';
// Importações dos React Hooks
import React, { useState, useEffect } from 'react';
// Importação do componente Button e Header dentro do JSX
import Button from './components/Button/button';


function App() {

    /*Primeiro item array (estado atual da pág/Hook), Segundo valor vai ser a função que vai alterar esse valor
    | por padrão colocar o valor atual com o set na frente
    --> HOOK (useState) & (useEffect)*/
    const [carregando, setCarregando] = useState(true) // no useState passamos o valor inicial do estado, no caso, true 
    const [contador, setContador] = useState(0)

  
  /* -->Evento criado
  function evento() {
    alert('O evento foi disparado!')
  }
  -->Evento que não vai ser disparado por meio do JSX
    window.addEventListener('scroll', () => console.log('Evento aconteceu'))
  -->O primeiro parametro é o evento que quero disparar (scroll), 
    o segundo é a função que vai ser disparada, o callback que vai ser disparado com a ação do scroll*/


  /*-->O que vai ser visualizado em tela é o que está dentro do return*/
  return (
    /*React.Fragments --> JSX*/
    <div>
      {/*Chamando a função Button(button.js) através de uma TAG, graças ao Babel,
      disparando o evento com o onClick | onClick={() => evento()}*/}

      {carregando ?
      <span>Carregando...</span> 
      : 
      <div>
        <button onClick={() => setContador(contador + 1)}>Adicionar</button>
        <span>{contador}</span>
      </div>
      }      
      <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar site' : 'Voltar para carregamento'}</button>
      <Button name='Alterar valor' active onClick={setContador} />
    </div>
  );
}

export default App;
