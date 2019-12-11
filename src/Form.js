import React, { Component } from 'react';
import FormValidator from './FormValidator';

class Form extends Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidator();

        this.initialState = {
            name: '',
            book: '',
            price: '',
        }

        this.state = this.initialState;
    }

    inputListener = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitListener = () => {
        if(this.validator.validate(this.state)) {
            this.props.submitListener(this.state);
            this.setState(this.initialState);
        } else {
            console.log("submit blocked");
        }
    }

    render() {

        const { name, book, price } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" name="name" value={name} onChange={this.inputListener}/>
                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="book">Livro</label>
                        <input id="book" type="text" name="book" value={book} onChange={this.inputListener}/>
                    </div>

                    <div className="input-field col s4">
                        <label htmlFor="price">Preço</label>
                        <input id="price" type="text" name="price" value={price} onChange={this.inputListener}/>
                    </div>
                    <button type="button" className="waves-effect waves-light btn light-blue lighten-2" onClick={this.submitListener}>Salvar</button>
                </div>
            </form>
            );
    }
}

export default Form;