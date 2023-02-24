const axios = require('axios')

module.exports = {
    getCharById: (res, id) =>{
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data =>{
            let character = {
                id: data.id,
                name: data.name,
                iamge: data.image,
                species: data.species
            }
            res
            .wriHead(200, {'Content-Type': 'application/json'})
            .end(JSON.stringify(character))
        })
    }
}