import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';
import './SearchBox.scss';


class SearchBox extends Component {

       
    searchText = '';

    saveSearchText(e) {
        this.searchText = e.currentTarget.value.trim();
    }

    goToSearch(e)  {
        if(e.key === 'Enter' && this.searchText !== '') {
            this.doSearch(this.searchText);
        }
    }

    clickToSearch() {
        this.doSearch(this.searchText);
    }

    doSearch(text) {
        this.props.history.push('/items?query=' + text);
    }

    render() {
        return (
            <div className="search-box-container">
                <div className="search-box-center">
                    <Link className="item-link" to={'/'}>
                        <div className="ml-logo" />
                    </Link>
                    <div className="ml-input-search-container">
                        <input className="ml-input-search" type="text" onKeyPress={this.goToSearch.bind(this)} onChange={this.saveSearchText.bind(this)} placeholder={this.props.t('neverStopSearching')} />
                        <div className="search-icon" onClick={this.clickToSearch.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(withTranslation('SearchBox')(SearchBox));