import React, {Component} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Table from './Table';
import CountClicks from './CountClicks';
import Form from './Form';
import Header from './Header';

class App extends Component {
  state = {
    authors : [
      {
        name: 'Gabriel',
        book: 'React',
        price: '1000'
      },
      {
        name: 'Verônica',
        book: 'Java',
        price: '99'
      },
      {
        name: 'Vini',
        book: 'Design',
        price: '150'
      }
    ],
  };

  deleteAuthor = index => {

    const { authors } = this.state;

    this.setState({
        authors : authors.filter((author, position) => {
        return position !== index;
      })
    });
  }

  submitListener = author => {
    this.setState({ authors:[ ...this.state.authors, author]})
  }

  render() {
    return(
      <React.Fragment>
          <Header/>
          <div className="container">
            <Table authors = { this.state.authors } deleteAuthor = {this.deleteAuthor}></Table>
            <CountClicks/>
            <Form submitListener = {this.submitListener}/>
          </div>
      </React.Fragment>
    );
  }
}
export default App;
