import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <table>
            <tr>
                <th>Nome</th>
                <th>Profissao</th>
            </tr>
        </table>
    )
}

const TableBody = (props) => {
    const rows = props.valor.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.Profissao}</td>
            </tr>
        )
    })
    return <tbody> {rows} </tbody>
}

class Table extends React.Component {
    render(){
        const {valor} = this.props
        return(
            <table>
                <TableHeader />
                <TableBody valor={valor} />
            </table>
        )
    }
}

export default Table

/* 
    Componente Simples
const SimpleComponent = () => {
  return <div>Example</div>             return com uma linha nao precisa de parenteses()
}
----------------------------------------
    Componente de Classe
class ClassComponent extends Component {
  render() {
    return <div>Example</div>
  }
}
*/