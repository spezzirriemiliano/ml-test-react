import axios from 'axios';

class CategoryService {

    static apiUrl = 'http://localhost:8080/api'

    static getCategory(categoryId) {
        return axios.get(`${CategoryService.apiUrl}/categories/${categoryId}`);
    }

}

export default CategoryService;