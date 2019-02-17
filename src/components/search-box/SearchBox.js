import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
                    <div className="ml-logo" />
                    <div className="ml-input-search-container">
                        <input className="ml-input-search" type="text" onKeyPress={this.goToSearch.bind(this)} onChange={this.saveSearchText.bind(this)} placeholder="Nunca dejes de buscar" />
                        <div className="search-icon" onClick={this.clickToSearch.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchBox);