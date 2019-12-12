import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Form extends Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidator([{
                field: 'name',
                method:'isEmpty',
                validWhen: false,
                message: 'O campo nome está invalido'
            }, 
            {
                field: 'book',
                method:'isEmpty',
                validWhen: false,
                message: 'O campo book está invalido'
            }, {
                field: 'price',
                method:'isInt',
                validWhen: true,
                args: [{min: 0, max: 9999}],
                message: 'O campo preço está invalido'
            }        
        ]);

        this.initialState = {
            name: '',
            book: '',
            price: '',
            validacao: this.validator.valid()
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

        const validacao = this.validator.validate(this.state);

        if(validacao.isValid) {
            console.log("submit open");
            this.props.submitListener(this.state);
            this.setState(this.initialState);
        } else {
            console.log("submit blocked");
            const {name, book, price} = validacao;
            const fields = [name, book, price];
            const invalidFields = fields.filter(field => {
                return field.isInvalid;
            });

            invalidFields.forEach(field => {
                PopUp.showMessage('error', field.message);
            });
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