import React, {Component} from 'react';
import './App.css';
import Table from './Table';

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

  render() {
    return(
    <div className = "App" >
        <Table authors={ this.state.authors}></Table>
    </div>
    );
  }
}
export default App;
