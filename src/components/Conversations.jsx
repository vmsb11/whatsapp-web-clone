import React, { Component } from 'react';
import './Conversations.css';

export default class Conversations extends Component {
    render() {
        return (
            <div className="Conversations">
                {this.props.children}
            </div>
        )
    }
}
