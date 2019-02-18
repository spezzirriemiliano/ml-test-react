import React from 'react';
import { withTranslation } from 'react-i18next';
import './ItemDetail.scss';
import UtilsService from '../../../../services/utils.service';


const ItemDetail = (props) => {
    return (
        <div className="item-detail-container">
            <div className="item-status-sold">
                <span>{props.t(props.item.condition, '')}</span>
                <span>{props.item.sold_quantity} {props.t('sold')}</span>
            </div>
            <div className="item-title">{props.item.title}</div>
            <div className="item-price">
                <span>$ {UtilsService.formatPrice(props.item.price.amount)}</span>
                <sup>{UtilsService.formatDecimals(props.item.price.decimals)}</sup>
            </div>
            <button className="buy-button" type="button">{props.t('buy')}</button>
        </div>
    );
}

export default withTranslation('ItemDetail')(ItemDetail);