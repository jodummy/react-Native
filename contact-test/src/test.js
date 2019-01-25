import React, { Component } from 'react';

class test extends Component {
    render() {
        return (
            <div>
                우리는 노예가 아니다 <b> {this.props.name} </b>
            </div>
        );
    }
}

export default test;