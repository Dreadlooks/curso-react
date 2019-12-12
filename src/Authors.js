import React, {Fragment, Component} from 'react';
import Header from './Header';
import DataTable from './DataTable';

class Authors extends Component {
   
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

            title: 'Autores'
          };
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <h1 className="center">Autores</h1>
                    <div>
                        <DataTable data={this.state.authors} title={this.state.title} column={['name']}/>
                    </div>
                </div>
            </Fragment>

        );
    }
}

export default Authors;