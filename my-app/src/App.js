import React, {Component} from 'react';
import Table from './components/Table';
import Button from './components/Button';


//Fragmento <> </>

function App() {
  return (
    <>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
    <Button>Button 4</Button>
    <Button>Button 5</Button>
    </>
  )
}

/*  propriedades(props) ~ uma informaçao que passa de um componente para outro

exemplo de propriedades props

    <Button title="Button 2" />
    <Button title="Button 3" />
    <Button title="Button 4" />
    <Button title="Button 5" />
*/

export default App;
/*
class App extends React.Component {
  state = {
    /*render() {
      const characters= [
    
      characters: [
        {
          nome: 'Charles',
          Profissao: 'Desenvolverdor,',
        },
        {
          nome: 'Laura',
          Profissao: 'Blogueira',
        },
        {
          nome: 'Jorge',
          Profissao: 'Arquiteto',
        },
        {
          nome: 'Denis',
          Profissao: 'Vocalista',
        },
      ]
    
      return (
        <div className="container">
          <Table valor={characters} />
        </div>
      )
  
  }

    removerValor = (index) => {
      const {characters} = this.state

      this.setState({
        characters: characters.filter((character, i) =>{
          return i !== index
        }),
      })
    }
}

export default App
*/
