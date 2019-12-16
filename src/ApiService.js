import axios from 'axios';

const ApiService = {

    FindAll: () => {

        return fetch('https://react-api-gabriels.herokuapp.com/api/authors');
    },

    CreateAuthor: author => {
        return fetch('https://react-api-gabriels.herokuapp.com/api/authors', 
         {method: 'POST', headers: {'content-type': 'application/json'}, body: author})
         .then(res => res.json());
    },

    FindAuthorNames: () => {
        return axios.get('https://react-api-gabriels.herokuapp.com/api/authors');
    },

    FindBooks: () => {
        return axios.get('https://react-api-gabriels.herokuapp.com/api/authors');
    },

    DeleteAuthor: id => {
        return fetch(`https://react-api-gabriels.herokuapp.com/api/authors/${id}`, 
        {method: 'DELETE', headers: {'content-type': 'application/json'},});
    }, 

    ErrorHandler: res =>{
        if(!res.ok){
            throw Error(res.responseText);
        }
        return res.json();
    }
}

export default ApiService;