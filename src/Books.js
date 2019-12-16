import React, {Fragment, Component} from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from './ApiService';
import PopUp from './PopUp';

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authors : [
            ],

            title: 'Livros'
          };
    }

    componentDidMount() {
        ApiService.FindBooks()
                   .then(res => { 
                       if(res.status === 200) {
                            PopUp.showMessage('success', "Livros carregados com sucesso!")
                            this.setState({authors: [...this.state.authors, ...res.data.data]})
                        }
                    }).catch(error => PopUp.showMessage('error', "Não foi possivel carregar os livros"));
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