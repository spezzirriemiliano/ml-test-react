import React, { Component } from 'react';
import ItemService from '../../services/item.service';
import BreadCrumb from '../../components/breadcrumb/Breadcrumb';
import Carousel from './carousel/Carousel';
import ItemDetail from './item-detail/ItemDetail';
import ItemDescription from './item-description/ItemDescription';
import CategoryService from '../../services/category.service';
import './Detail.scss'

class Detail extends Component {

    state = {
        categories: [],
        item: {
            price: {}
        }
    }

    componentDidMount() {
        this.getItem(this.props.match.params.id);        
    }

    getItem(itemId) {
        ItemService.getItem(itemId).then(response => {
            const item = response.data.item;
            this.setState({item});
            this.getCategory(item.category_id);
        });
    }

    getCategory(categoryId) {
        CategoryService.getCategory(categoryId).then((response) => {
            this.setState({categories: response.data.categories});
        });
    }

    render() {
        return (
            <div className="detail-container">
                <BreadCrumb categories={this.state.categories}/>
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