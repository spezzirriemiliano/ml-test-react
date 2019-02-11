import React, { Component } from 'react';
import SearchService from '../../services/search.service';

class Results extends Component {

    state = {
        products: []
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
            this.setState({products: response.data.items})
        });
    }

    render() {
        return (
            <div>
                <div>Results page</div>
                {this.state.products.map(p => {
                    return (<div key={p.id}>{p.title}</div>)
                })}
            </div>
        );
    }
}

export default Results;