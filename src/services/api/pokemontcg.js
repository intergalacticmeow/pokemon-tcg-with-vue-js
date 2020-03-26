import axios from 'axios'

export default {

    getCards() {

        return axios.get('https://api.pokemontcg.io/v1/cards').
        then(response => { 
            console.table(response.data.cards)
            return response.data.cards
        }) 

    },

    getCard( id ) {

        return axios.get('https://api.pokemontcg.io/v1/cards/' + id).
        then(response => { 
            console.table(response.data)
            return response.data
        }) 

    },

    getSets() {
        // series, totalCards, releaseDate, symbolUrl, logoUrl

        return axios.get('https://api.pokemontcg.io/v1/sets').
        then(response => { 
            console.table(response.data.sets)
            return response.data.sets
        }) 

    },

    getTypes() {

        return axios.get('https://api.pokemontcg.io/v1/types').
        then(response => { 
            console.table(response.data.types)
            return response.data.types
        }) 

    }

}