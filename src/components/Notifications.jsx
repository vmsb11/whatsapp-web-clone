import React, { Component } from 'react';
import './Notifications.css';

export default class Notifications extends Component {
    render() {
        return (
            <div className="Notifications">
                <div className="ImageDetail">
                    <img src={require('../images/notifications_off.jpg')} alt=""/>
                </div>
                <div className="Messages">
                    <p className="Label">Receba notificações de novas mensagens</p>
                    <p className="Link"><a href="#">Ativar notificações na área de trabalho ></a></p>
                </div>
            </div>
        );
    }
}
