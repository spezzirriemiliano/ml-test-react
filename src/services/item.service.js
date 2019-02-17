import axios from 'axios';

class ItemService {

    static apiUrl = 'http://localhost:8080/api'

    static getItems(searchString) {
        return axios.get(`${ItemService.apiUrl}/items?q=${searchString}`);
    }

    static getItem(itemId) {
        return axios.get(`${ItemService.apiUrl}/items/${itemId}`);
    }

}

export default ItemService;