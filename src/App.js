import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Table from './Table';
import Form from './Form';
import Header from './Header';
import PopUp from './PopUp';
import ApiService from './ApiService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authors: [],
    }
  };

  deleteAuthor = id => {
    const { authors } = this.state;

    const updatedAuthors = authors.filter(author => {
      return author.id !== id
    });

    ApiService.DeleteAuthor(id)
      .then(res => ApiService.ErrorHandler(res))
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ authors: [...updatedAuthors] });
          PopUp.showMessage('success', "Autor removido com sucesso");
        }
      })
      .catch(err => PopUp.showMessage('error', "Erro ao tentar remover o autor"))
  }


  submitListener = author => {
    ApiService.CreateAuthor(JSON.stringify(author))
      .then(res => ApiService.ErrorHandler(res))
      .then(res => {
        if(res.message === 'success') {
        this.setState({ authors: [...this.state.authors, author] });
        PopUp.showMessage('success', "Autor adicionado com sucesso");
        }
      }).catch(err =>PopUp.showMessage('error', "Erro ao tentar criar o autor"));
  }

  componentDidMount() {
    ApiService.FindAll()
      .then(res => ApiService.ErrorHandler(res))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ authors: [...this.state.authors, ...res.data] })
        }
      })
      .catch(error => PopUp.showMessage('error', "Não foi possivel carregar os autores"));
  }

  render() {

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Table authors={this.state.authors} deleteAuthor={this.deleteAuthor}></Table>
          <Form submitListener={this.submitListener} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
