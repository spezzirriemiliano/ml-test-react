import React, { Component } from 'react';

class Results extends Component {

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search).get('query');
        console.log(query);
    }

    render() {
        return (
            <div>Results page</div>
        );
    }
}

export default Results;