import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="ImageDetail">
                    <img src={require('../images/vinicius.jpg')} alt=""/>
                </div>
                <div className="Options">
                    <a href="#" className="LinkStatus">
                        <i className="material-icons">donut_large</i>
                    </a>
                    <a href="#" className="LinkChat">
                        <i className="material-icons">chat</i>
                    </a>
                    <a href="#" className="LinkOptions">
                        <i className="material-icons">more_vert</i>
                    </a>
                </div>
            </div>
        );
    }
}
