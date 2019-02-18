import React, { Component } from 'react';
import ItemService from '../../../services/item.service';
import CategoryService from '../../../services/category.service';
import BreadCrumb from '../../commons/breadcrumb/Breadcrumb';
import Carousel from './carousel/Carousel';
import ItemDetail from './item-detail/ItemDetail';
import ItemDescription from './item-description/ItemDescription';
import './Detail.scss'
import { withTranslation } from 'react-i18next';

class Detail extends Component {

    state = {
        categories: [],
        item: {
            price: {}
        },
        error: false
    }

    componentDidMount() {
        this.getItem(this.props.match.params.id);        
    }

    getItem(itemId) {
        ItemService.getItem(itemId).then(response => {
            const item = response.data.item;
            this.setState({item});
            this.getCategory(item.category_id);
        }).catch(() => {
            this.setState({error: true})
        })
    }

    getCategory(categoryId) {
        CategoryService.getCategory(categoryId).then((response) => {
            this.setState({categories: response.data.categories});
        });
    }

    render() {
        return (
            <div>
                {!this.state.error && 
                    <div className="detail-container">
                        <BreadCrumb categories={this.state.categories}/>
                        <div className="item-header">
                            <Carousel picture={this.state.item.picture} />
                            <div className="item-detail">
                                <ItemDetail item={this.state.item}/>
                            </div>
                        </div>
                        <div className="item-footer">
                            <ItemDescription description={this.state.item.description}/>
                        </div>
                    </div>
                }
                {this.state.error && <div className="item-error">{this.props.t('itemError')}</div>}
            </div>
        );
    }
}

export default withTranslation('Detail')(Detail);