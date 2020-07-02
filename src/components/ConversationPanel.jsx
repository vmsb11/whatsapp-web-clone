import React, { Component } from 'react';
import './ConversationPanel.css';

export default class ConversationPanel extends Component {
    render() {
        return (
            <div className="ConversationPanel">
                <div class="MessageSent">
                    <div className="Content">
                        <p>
                            Bom dia Corinthians, qual foi a nossa última vitória sobre o rival ?
                        </p>
                    </div>
                    <div className="Date">
                        <p>
                            08:16 <img src={require('../images/double-check.png')} width="20" height="16" alt="" />
                        </p>
                    </div>
                </div>
                <div class="ReceivedMessage">
                    <div className="Content">
                        <p>
                            Corinthians 1x0 Palmeiras, campeonato brasileiro, 2018, Arena Corinthians
                        </p>
                    </div>
                    <div className="Date">
                        <p>
                            08:32
                        </p>
                    </div>
                </div>                     
            </div>
        );
    }
}
