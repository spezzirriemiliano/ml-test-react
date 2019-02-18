import React from 'react';
import './Paginator.scss';
import { withTranslation } from 'react-i18next';

const Paginator = (props) => {
    return (
        <div className="paginator-container">
            <div className="buttons-container">
                <div className="pg-button before-button">{'<'} {props.t('before')}</div>
                {
                    [...Array(10)].map((e, i) => {
                        return <div key={i} className="pg-button number-button">{i + 1}</div>
                    })   
                }
                <div className="pg-button next-button">{props.t('next')} ></div>
            </div>
        </div>
    );
}

export default withTranslation('Paginator')(Paginator);