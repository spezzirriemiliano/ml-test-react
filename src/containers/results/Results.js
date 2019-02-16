import React, { Component } from 'react';
import SearchService from '../../services/search.service';
import BreadCrumb from '../../components/breadcrumb/Breadcrumb';
import ResultItem from './result-item/ResultItem';
import Paginator from './paginator/Paginator';
import './Results.scss';

class Results extends Component {

    state = {
        products: [],
        categories: []
    }
    
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search).get('query');
        this.getItems(query);        
    }

    componentDidUpdate(prevProps) {
        let oldQuery = new URLSearchParams(prevProps.location.search).get('query');
        let newQuery = new URLSearchParams(this.props.location.search).get('query');
        if (oldQuery !== newQuery) {
            this.getItems(newQuery);
        }
    }

    getItems(query) {
        SearchService.getItems(query).then(response => {
            this.setState({products: response.data.items, categories: response.data.categories})
        });
    }

    render() {
        return (
            <div className="results-container">
                <BreadCrumb categories={this.state.categories}/>
                {this.state.products.map(p => {
                    return (<ResultItem key={p.id} item={p} />)
                })}
                <Paginator/>
            </div>
        );
    }
}

export default Results;