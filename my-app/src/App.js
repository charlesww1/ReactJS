import React, {Component} from 'react';
import Table from './components/Table';


class App extends React.Component {
  render() {
      const characters = [
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
}

export default App
