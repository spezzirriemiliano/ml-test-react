import React from 'react';
import './Breadcrumb.scss';

const BreadCrumb = (props) => {
    return (
        <div className="breadcrumb-container">{props.categories.join(' > ')}</div>
    );
}

export default BreadCrumb;