import React, { Component } from 'react';
import Header from './Header';
import Notifications from './Notifications';
import SearchMessages from '../components/SearchMessages';
import Conversations from '../components/Conversations';
import './MessagesPanel.css';

export default class MessagesPanel extends Component {
    render() {
        return (
            <div className="MessagesPanel">
                <Header />
                <Notifications />
                <SearchMessages />
                <Conversations>
                    {this.props.children}
                </Conversations>
            </div>
        )
    }
}
