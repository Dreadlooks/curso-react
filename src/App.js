import React, {Component} from 'react';
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
      authors : [],
    }
  };

  deleteAuthor = index => {

    const { authors } = this.state;

    this.setState({
        authors : authors.filter((author, position) => {
        return position !== index;
      })
    });

    PopUp.showMessage('success', 'Autor removido!');
  }

  submitListener = author => {
    this.setState({ authors:[ ...this.state.authors, author]});
    PopUp.showMessage('success', 'Cadastro realizado com sucesso!');
  }

  componentDidMount() {
    ApiService.FindAll().then(res => { this.setState({authors: [...this.state.authors, ...res.data]})});
  }

  render() {
    
    return(
      <React.Fragment>
          <Header/>
          <div className="container">
            <Table authors = { this.state.authors } deleteAuthor = {this.deleteAuthor}></Table>
            <Form submitListener = {this.submitListener}/>
          </div>
      </React.Fragment>
    );
  }
}
export default App;
