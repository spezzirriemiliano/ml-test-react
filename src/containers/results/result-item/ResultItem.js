import React from 'react';
import './ResultItem.scss';

const ResultItem = (props) => {

    let freeShippingLogo;

    if(props.item.free_shipping) {
        freeShippingLogo = <div className="item-free-shipping"></div>
    }
    

    return (
        <div className="result-item-container">
            <img className="item-image" src={props.item.picture} alt={props.item.title}/>
            <div className="item-information">
                <div className="item-price">{props.item.price.currency} {props.item.price.amount}</div>
                {freeShippingLogo}
                <div className="item-title">{props.item.title}</div>
                <div className="item-status">{props.item.condition === 'new'? 'Nuevo' : 'Usado'}</div>
            </div>
            <div className="item-address">{props.item.address}</div>
        </div>
    );
}

export default ResultItem;