import React, { Component } from 'react';
import ItemService from '../../../services/item.service';
import BreadCrumb from '../../commons/breadcrumb/Breadcrumb';
import ResultItem from './result-item/ResultItem';
import Paginator from './paginator/Paginator';
import './Results.scss';
import { withTranslation } from 'react-i18next';

class Results extends Component {

    state = {
        products: [],
        categories: [],
        error: false,
        noProducts: false
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
        ItemService.getItems(query).then(response => {
            this.setState({
                products: response.data.items,
                categories: response.data.categories,
                noProducts: response.data.items.length === 0
            })
        }).catch((error) => {
            this.setState({error: true})
        })
    }

    render() {
        return (
            <div className="results-container">
                { this.state.error && <div className="error-text">{this.props.t('error')}</div> }
                { !this.state.error && <BreadCrumb categories={this.state.categories}/> }
                { !this.state.error && this.state.products.map(p => {
                    return (<ResultItem key={p.id} item={p} />)
                })}
                { this.state.noProducts && <div className="no-products">{this.props.t('noProducts')}</div>}
                <Paginator/>
            </div>
        );
    }
}

export default withTranslation('Results')(Results);