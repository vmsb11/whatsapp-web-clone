import React, { Component } from 'react';
import ChatPanel from '../components/ChatPanel';
import MessagesPanel from '../components/MessagesPanel';
import HomePanel from '../components/HomePanel';
import Conversation from '../components/Conversation';
import './WhatsApp.css';

export default class WhatsApp extends Component {
    
    constructor(props) {
       
        super(props);
        this.state = {

            initialState: true,
            idConversation: -1
        }
    }

    loadConversation(id) {

        this.setState({initialState: false, idConversation: id});
    }
    
    render() {
        return (
            <div className="WhatsApp">
                <MessagesPanel>
                    <a href="#" onClick={() => this.loadConversation(1)}>
                        <Conversation
                            url={'https://pbs.twimg.com/profile_images/1243527857684582407/Zz0FZFfZ_400x400.jpg'}
                            contact={'Corinthians'}
                            lastMessage={'Corinthians 1x0 Palmeiras'}
                            date="20:02" />
                    </a>    
                    <hr />
                    <a href="#" onClick={() => this.loadConversation(2)}>
                        <Conversation
                            url={'https://pbs.twimg.com/profile_images/1263123365130375170/m7h-Aox3_400x400.jpg'}
                            contact={'Grêmio'}
                            lastMessage={'Grenal'}
                            date="Ontem" />
                    </a>
                    <hr />
                    <a href="#" onClick={() => this.loadConversation(3)}>
                        <Conversation
                            url={'https://pbs.twimg.com/profile_images/1226340094161932291/zh-g0NO8_400x400.jpg'}
                            contact={'Flamengo'}
                            lastMessage={'Não perca o próximo jogo...'}
                            date="Segunda-feira" />
                    </a>
                    <hr />
                    <a href="#" onClick={() => this.loadConversation(4)}>
                        <Conversation
                            url={'https://pbs.twimg.com/profile_images/1267486764635217933/LVMPcqUk_400x400.jpg'}
                            contact={'Vasco'}
                            lastMessage={'Não perca o próximo jogo...'}
                            date="10/06/2020" />
                    </a>
                    <hr />
                </MessagesPanel>
                {
                    this.state.initialState ? <HomePanel /> : <ChatPanel />
                }
            </div>
        );
    }
}
