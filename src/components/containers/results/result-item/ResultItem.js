import React from 'react';
import { Link } from 'react-router-dom'

import './ResultItem.scss';

const ResultItem = (props) => {
    return (
        <div className="result-item-container">
            <Link className="item-link" to={'/items/' + props.item.id}>
                <img className="item-image" src={props.item.picture} alt={props.item.title}/>
            </Link>
            <div className="item-information">
                <div className="item-price">{props.item.price.currency} {props.item.price.amount}</div>
                {props.item.free_shipping && (
                    <div className="item-free-shipping"></div>
                )}
                <Link className="item-link" to={'/items/' + props.item.id}>
                    <div className="item-title">{props.item.title}</div>
                </Link>
                <div className="item-status">{
                        props.item.condition === 'new'? 'Nuevo' : props.item.condition === 'used'? 'Usado' : ''
                    }</div>
            </div>
            <div className="item-address">{props.item.address}</div>
        </div>
    );
}

export default ResultItem;