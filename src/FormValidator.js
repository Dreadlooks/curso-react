import validatorImport from 'validator';


class FormValidator {

    constructor(validations) {
        this.validations = validations;
    }

    validate(state) {
        //itera pelo array de regras de validação e constrói
        //um objeto validacao e retorna-o

        //começa assumindo que está tudo válido, recebe o 
        //objeto do método valido.

        let validation = this.valid();

        this.validations.forEach(rule => {

            //Determina o valor do campo, o método a ser invocado
            //e os argumentos opcionais pela definição da regra
            const fieldValue = state[rule.field.toString()];
            const args = rule.args || [];

            //if ternário para estar preparado caso 
            //alguém passe o método direto sem ser string
            const methodValidation = typeof rule.method === 'string' ? validatorImport[rule.method] : rule.method

            //Call method validation
            if (methodValidation(fieldValue, ...args, state) !== rule.validWhen) {
                //Update specific field
                validation[rule.field] = {
                    isInvalid: true,
                    message: rule.message
                }
                validation.isValid = false;
            }
        });

        return validation;
    }

    valid() {
        const validation = {};

        //Populating object with fields
        //Creating key isInvalid and assigning false to them
        //**ALL THE FIELDS BEGIN VALID!**
        this.validations.map(rule => (
            validation[rule.field] = { isInvalid: false, message: '' }
        ))

        return { isValid: true, ...validation };
    }


}

export default FormValidator;