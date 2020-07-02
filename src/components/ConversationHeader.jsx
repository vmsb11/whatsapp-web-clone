import React, { Component } from 'react';
import './ConversationHeader.css';

export default class ConversationHeader extends Component {
    render() {
        return (
            <div className="ConversationHeader">
                <div className="ImageDetail">
                    <img src={require('../images/sccp.jpg')} alt=""/>
                </div>
                <div className="Description">
                    <p className="Contact"><b>Corinthians</b></p>
                    <p className="LastEntrance">visto por último às 10:00</p>
                </div>
                <div className="Options">
                    <a href="#" className="LinkStatus">
                        <i class="material-icons">search</i>
                    </a>
                    <a href="#" className="LinkChat">
                        <i class="material-icons">attach_file</i>
                    </a>
                    <a href="#" className="LinkOptions">
                        <i class="material-icons">more_vert</i>
                    </a>
                </div>
            </div>
        );
    }
}
