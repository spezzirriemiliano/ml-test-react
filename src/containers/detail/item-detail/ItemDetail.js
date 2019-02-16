import React from 'react';
import './ItemDetail.scss';


const ItemDetail = (props) => {
    return (
        <div className="item-detail-container">
            <div className="item-status-sold">
                <span>{props.item.condition === 'new'? 'Nuevo' : 'Usado'}</span>
                <span> - {props.item.sold_quantity} vendidos</span>
            </div>
            <div className="item-title">{props.item.title}</div>
            <div className="item-price">
                <span>{props.item.price.currency} {props.item.price.amount}</span>
            </div>
            <button class="buy-button" type="button">Comprar</button>
        </div>
    );
}

export default ItemDetail;