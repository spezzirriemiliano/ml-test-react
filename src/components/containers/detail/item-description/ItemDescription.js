import React from 'react';
import { withTranslation } from 'react-i18next';
import './ItemDescription.scss';


const ItemDescription = (props) => {
    return (
        <div className="item-description-container">
            <div className="item-description-header">
            {props.t('productDescription')}
            </div>
            <div className="item-description-content">
                    {props.description && props.description.split('\n').map((text, index) => {
                    return (<span key={index}>{text}<br/></span>)
                })}
            </div>
        </div>
    );
}

export default withTranslation('ItemDescription')(ItemDescription);