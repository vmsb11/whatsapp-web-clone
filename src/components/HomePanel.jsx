import React, { Component } from 'react';
import './HomePanel.css';

export default class HomePanel extends Component {
    render() {
        return (
            <div className="HomePanel">
                <div className="Image">
                    <img src={require('../images/whatsapp.jpg')} alt="" />
                </div>
                <div className="MainMessages">
                    <h1>Mantenha o seu celular conectado</h1>
                    <p>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</p>
                </div>
                <div className="DownloadMessages">
                    <p>
                        O WhatsApp está disponível para Windows. 
                        <a className="LinkWhatsApp" href="https://www.whatsapp.com/download" target="_blank"><b>Obtenha-o aqui</b></a> 
                    </p>
                </div>
                <footer>
                    <hr />
                </footer>
            </div>
        );
    }
}
