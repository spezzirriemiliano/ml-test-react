import React, { Component } from 'react';
import SearchService from '../../services/search.service';
import BreadCrumb from '../../components/breadcrumb/Breadcrumb';
import Carousel from './carousel/Carousel';
import ItemDetail from './item-detail/ItemDetail';
import './Detail.scss'
import ItemDescription from './item-description/ItemDescription';

class Detail extends Component {

    state = {
        item: {
            price: {}
        }
    }
    categories = ['nada que ver', 'computacion', 'hardcodeado']

    componentDidMount() {
        this.getItem(this.props.match.params.id);        
    }

    getItem(itemId) {
        SearchService.getItem(itemId).then(response => {
            this.setState({item: response.data.item})
        });
    }

    render() {
        return (
            <div className="detail-container">
                <BreadCrumb categories={this.categories}/>
                <div class="item-header">
                    <Carousel picture={this.state.item.picture} />
                    <div className="item-detail">
                        <ItemDetail item={this.state.item}/>
                    </div>
                </div>
                <div class="item-footer">
                    <ItemDescription description={this.state.item.description}/>
                </div>
            </div>
        );
    }
}

export default Detail;