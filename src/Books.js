import React, {Fragment, Component} from 'react';
import Header from './Header';
import DataTable from './DataTable';

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
                name: 'Yuri',
                book: 'Java top',
                price: '150'
              }
            ],

            title: 'Livros'
          };
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <h1 className="center">Livros</h1>
                    <DataTable data={this.state.authors} title={this.state.title} column={['book']}/>
                </div>
            </Fragment>

        );
    }
}

export default Books;