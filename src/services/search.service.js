import axios from 'axios';

class SearchService {

    static apiUrl = 'http://localhost:8080/api'

    static getItems(searchString) {
        return axios.get(`${SearchService.apiUrl}/items?q=${searchString}`);
    }

    static getItem(itemId) {
        return axios.get(`${SearchService.apiUrl}/items/${itemId}`);
    }

}

export default SearchService;