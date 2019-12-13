const ApiService = {

    FindAll: () => {

        return fetch('https://react-api-gabriels.herokuapp.com/api/authors').then(res => res.json());
    },

    CreateAuthor: author => {
        return fetch('https://react-api-gabriels.herokuapp.com/api/authors', 
         {method: 'POST', headers: {'content-type': 'application/json'}, body: author})
         .then(res => res.json());
    },

    FindAuthorNames: () => {
        return fetch('https://react-api-gabriels.herokuapp.com/api/authors').then(res => res.json());
    },

    FindBooks: () => {
        return fetch('https://react-api-gabriels.herokuapp.com/api/authors/book').then(res => res.json());
    },

    DeleteAuthor: id => {
        return fetch(`https://react-api-gabriels.herokuapp.com/api/authors/${id}`, 
        {method: 'DELETE', headers: {'content-type': 'application/json'}})
        .then(res => res.json());
    }
}

export default ApiService;