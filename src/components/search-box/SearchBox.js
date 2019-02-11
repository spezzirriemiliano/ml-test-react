import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './SearchBox.scss';


class SearchBox extends Component {

    goToSearch(e)  {
        if(e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
            this.doSearch(e.currentTarget.value.trim());
        }
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
                        <input className="ml-input-search" type="text" onKeyPress={this.goToSearch.bind(this)}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchBox);