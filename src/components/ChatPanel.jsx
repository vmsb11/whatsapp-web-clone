import React, { Component } from 'react';
import ConversationHeader from './ConversationHeader';
import SendMessagesPanel from './SendMessagesPanel';
import ConversationPanel from './ConversationPanel';
import './ChatPanel.css';

export default class ChatPanel extends Component {
    render() {
        return (
            <div className="ChatPanel">
                <div className="Panel">
                    <ConversationHeader />
                    <ConversationPanel />
                    <SendMessagesPanel />
                </div>
            </div>
        );
    }
}
