import React, { Component } from 'react';
import './Conversation.css';

export default class Conversation extends Component {
    render() {
        return (
            <div className="Conversation">
                <div className="ImageDetail">
                    <img src={this.props.url} alt=""/>
                </div>
                <div className="Messages">
                    <p className="Contact">{this.props.contact}</p>
                    <p className="LastMessage">{this.props.lastMessage}</p>
                </div>
                <div className="Date">
                    <p>{this.props.date}</p>
                </div>
            </div>
        );
    }
}
