const axios = require('axios');
const url = "https://jsonplaceholder.typicode.com/posts";

//Dados que queremos enviar -> API (um novo Post)
const novoPost = {
    title: "Aprendendo integração de API",
    body: "Exemplo de como fazer uma requisição POST",
    userId: 1
}

//Fazendo uma requisição POST p/ criar novo recurso na API
axios.post(url, novoPost)
    .then(response => {
        console.log("Recurso criado com sucesso: ")
        console.log(response.data)
    })
    .catch(error => {
        console.error(`Erro ao tentar criar o recurso ${error}`)
    })