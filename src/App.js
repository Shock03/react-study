import logo from './logo.svg';
import './App.css';
import React from 'react';
// Importação do componente Button e Header dentro do JSX
import Button from './components/Button/button';
import Header from './components/header/header';


function App() {
  // Evento criado
  function evento() {
    alert('O evento foi disparado!')
  }

  //Evento que não vai ser disparado por meio do JSX
  window.addEventListener('scroll', () => console.log('Evento aconteceu'))    // O primeiro parametro é o evento que quero disparar (scroll), o segundo é a função que vai ser disparada, o callback que vai ser disparado com a ação do scroll

  //O que vai ser visualizado em tela é o que está dentro do return
  return (
    //React.Fragments --> JSX
    <div style={{height: '200vh'}}>                                                      {/*style para a pág ter scroll*/}
      <Header/>                                                                          {/*Chamando a função Header(header.js)*/}
      <Button onClick={() => evento()} name='Botão 1' active={true}/>                    {/*Chamando a função Button(button.js) através de uma TAG, graças ao Babel*/}
      <Button name='Botão 2' active={false}/>
      <Button name='Botão 3' active=
      {false}/>                                                                          {/*Passando o argumento, do componente Button, em formato de atributo*/}
      <span onClick={() => evento()}>Mensagem qualquer</span>                            {/*Disparando o evento com o onClick*/}
    </div>
  );
}

export default App;
