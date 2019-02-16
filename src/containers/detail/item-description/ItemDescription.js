import React from 'react';
import './ItemDescription.scss';


const ItemDescription = (props) => {
    return (
        <div className="item-description-container">
            <div className="item-description-header">
                Detalle del producto
            </div>
            <div className="item-description-content">
                {props.description}
            </div>
        </div>
    );
}

export default ItemDescription;