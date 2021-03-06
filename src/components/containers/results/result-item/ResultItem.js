import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import UtilsService from '../../../../services/utils.service';
import './ResultItem.scss';

const ResultItem = (props) => {
    return (
        <div className="result-item-container">
            <Link className="item-link" to={'/items/' + props.item.id}>
                <img className="item-image" src={props.item.picture} alt={props.item.title}/>
            </Link>
            <div className="item-information">
                <div className="item-price">$ {UtilsService.formatPrice(props.item.price.amount)}</div>
                {props.item.free_shipping && (
                    <div className="item-free-shipping"></div>
                )}
                <Link className="item-link" to={'/items/' + props.item.id}>
                    <div className="item-title">{props.item.title}</div>
                </Link>
                <div className="item-status">{
                    props.t(props.item.condition, '')
                }</div>
            </div>
            <div className="item-address">{props.item.address}</div>
        </div>
    );
}

export const ResultItemPure = ResultItem;
export default withTranslation('ResultItem')(ResultItem);
