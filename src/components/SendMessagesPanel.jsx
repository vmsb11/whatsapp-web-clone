import React, { Component } from 'react';
import './SendMessagesPanel.css';

export default class SendMessagesPanel extends Component {
    
    constructor(props) {

        super(props);

        this.state = {

            text: ''
        }
    }

    handleInput(e) {

        const text = e.target.value;

        if(text !== '') {

            this.setState({text: text});
        }
    }

    render() {
        return (
            <div className="SendMessagesPanel">
                <div className="SoundMessage">
                    <i class="material-icons">search</i>
                </div>
                <input type="text" 
                    placeholder="Digite uma mensagem"
                    onChange={(e) => this.handleInput(e)} />
                <div className="AttachContent">
                    <i class="material-icons">mic</i>
                </div>                  
            </div>
        );
    }
}
