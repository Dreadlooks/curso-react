import React, {Component} from 'react';

const TableHead = () => {
    return(
    <thead>
        <tr>
            <th>Autores</th>
            <th>Livros</th>
            <th>Preços</th>
            <th>Remover</th>
        </tr>
    </thead>);
}

const TableBody = props => {
    const rolls = props.authors.map((line, index) => {
        return (
            <tr key={index}>
                <td>{line.name}</td>
                <td>{line.book}</td>
                <td>{line.price}</td>
                <td><button>Remover</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {rolls}
        </tbody>
    );
}

class Table extends Component {

    render() {

        const { authors } = this.props;
        console.log(authors);
        
        return (
        <table>
            <TableHead></TableHead>
            <TableBody authors = { authors }></TableBody>
        </table>);
    }



}

export default Table;