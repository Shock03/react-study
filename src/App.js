import './App.css';
// Importações dos React Hooks
import React, { useState, useEffect } from 'react';
// Importação do componente Button e Header dentro do JSX.
import Button from './components/Button/button';


function App() {

    /*--> Primeiro item array (estado atual da pág/Hook), Segundo valor vai ser a função que vai alterar esse valor
    | por padrão colocar o valor atual com o set na frente.
    
    --> HOOK (useState) & (useEffect)*/
    const [carregando, setCarregando] = useState(true) // no useState passamos o valor inicial do estado, no caso, true.
    const [contador, setContador] = useState(0) // valor inicial do contador (0)

    /*--> 1ª parametro será nosso callback, é o que vai ser executado assim que o array de dependencia for atualizado.
      --> 2ª parametro será nosso array de dependencias. Irá informar ao useEffect() que tal estado foi atualizado.
      Assim, executando o callback do primeiro parametro.*/
      
  /* --> 1ª ciclo de vida: useEffect será executado apenas a primeira vez que o componente for
      renderizado em tela. Utilizamos o array de dependencia VAZIO. */
    useEffect(() => {
      console.log('Carregou pela primeira vez')
    }, [])

  /* --> 2ª ciclo de vida: useEffect será executado toda vez que o estado do contador
      for atualizado. Ou seja, toda vez que o array de dependencia [contador] for atualizado. */
  useEffect(() => {
    console.log('Contador')
  }, [contador])

  /* --> 3ª ciclo de vida: o useEffect será executado e retornará o código (dentro do return),
      assim que o componente for removido da tela.*/
  useEffect(() => {
    console.log('Ciclo de vida 3')

    return () => {
      // Vai está o código que vai ser executado assim que o componente for removido da tela.
    }
  }, [contador])

/* --> Caso Real - Request API utilizando o useEffect.
Aqui a requisição será executada na primeira vez que o componente for atualizado em tela, pois nosso array de depen. está vazio.

useEffect(() => {
  fetch('https://api.github.com/users/shock03')
  .then((res) => res.json())
  .then((data) => setData(data))
}, []) 
  console.log(data)
*/


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
      {/*Chamando o componente Button(button.js) através de uma TAG, graças ao Babel,
      disparando o evento com o onClick | onClick={() => evento()}*/}

      {carregando ?
      <span>Carregando...</span> 
      : 
      <div>
        <button onClick={() => setContador(contador + 5)}>Adicionar</button>
        <span>{contador}</span>
      </div>
      }      
      <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar site' : 'Voltar para carregamento'}</button>
      <Button name='Alterar valor' active onClick={setContador} />    {/*Componente importado - Button*/}
    </div>
  );
}

export default App;
