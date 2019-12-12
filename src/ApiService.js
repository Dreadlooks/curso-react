const ApiService = {

    FindAll: () => {

        return fetch('https://react-api-gabriels.herokuapp.com/api/author').then(res => res.json());
    },

    CreateAuthor: author => {
        return fetch('http://localhost:8000/api/autor', 
         {method: 'POST', headers: {'content-type': 'application/json'}, body: author})
         .then(res => res.json());
    },

    FindAuthorNames: () => {
        return fetch('http://localhost:8000/api/autor/nome').then(res => res.json());
    },

    FindBooks: () => {
        return fetch('http://localhost:8000/api/autor/livro').then(res => res.json());
    },

    DeleteAuthor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, 
        {method: 'DELETE', headers: {'content-type': 'application/json'}})
        .then(res => res.json());
    }
}

export default ApiService;