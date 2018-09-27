import axios from 'axios'

export default {
    getStarwar(){
        return axios.get('https://swapi.co/api/people') //api starwar 
        .then(response => {
            return response.data
        })
    }
}