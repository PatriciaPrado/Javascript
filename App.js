import React from 'react';
import logo from './logo.svg';
import './App.css';
import Partida from './Partida';
import Time from './Time';
// import Botao from './Botao';
// import Placar from './Placar';

function App() {
    return (
        <div class="margem">
            <div class="linha">
                <h3> <center> Casa</center> </h3>
                <div class="borda" >
                    <center class="nometime" >
                        <Time time="Bahia" />
                    </center>
                </div>
            </div>
            <div class="linha">
                <div class="meio">
                    <Partida campeonato="Brasileirão Série A"
                        datetime="28/04/2019 - 16:00" />
                </div>
            </div>
            <div class="linha">
                <h3> <center>Visitante</center>  </h3>
                <div class="borda">
                    <center>
                        <Time time="Corinthians" />
                    </center>
                </div>
            </div>
        </div>

    );
}

export default App;