import logo from './logo.svg';
import './App.css';
import React from 'react';
// Importação do componente Button e Header dentro do JSX
import Button from './components/Button/button';
import Header from './components/header/header';


function App() {
  return (
    // React.Fragments --> JSX
    <>
      <Header/>                                               {/*Chamando a função Header(header.js)*/}
      <Button name = 'Botão 1' active = {true}/>              {/*Chamando a função Button(button.js) através de uma TAG, graças ao Babel*/}
      <Button name = 'Botão 2' active = {false}/>
      <Button name = 'Botão 3' active = {false}/>              {/*Passando o argumento, do componente Button, em formato de atributo*/}
    </>
  );
}

export default App;
