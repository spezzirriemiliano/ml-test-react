import axios from 'axios';

class SearchService {

    static getItems(searchString) {
        return axios.get('http://localhost:8080/api/items?q=' + searchString);
    }

}

export default SearchService;