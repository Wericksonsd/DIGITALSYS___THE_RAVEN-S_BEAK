import React, { useState } from 'react';
import Grunda from './assets/brasoesOrigem/Grunda.svg'
import Lavari from './assets/brasoesOrigem/Lavari.svg'
import Termina from './assets/brasoesOrigem/Termina.svg'
import Viento from './assets/brasoesOrigem/Viento.svg'
import Volttan from './assets/brasoesOrigem/Volttan.svg'

function Grupo(props){

    const [personagem, setPersonagem] = useState([]);
    const [nome, setNome] = useState(props.nome);
    const [raca, setRaca] = useState(props.raca);
    const [classe, setClasse] = useState(props.classe);
    const [origem,setOrigem] = useState(props.origem);
    const [nivelPer, setNivelPer] = useState(props.nivel);
    const [vidaPer, setVidaPer] = useState(props.vida);
    const [defesaPer, setDefesaPer] = useState(props.def);
    const [manaPer, setManaPer] = useState(props.mana);
    const [historiaPers, setHistoriaPer] = useState(props.historia);    
    const [atrConst, setAtrConst] = useState(props.c);
    const [atrForca, setAtrForca] = useState(props.f);
    const [atrAgilidade, setAtrAgilidade] = useState(props.a);
    const [atrSaber, setAtrSaber] = useState(props.s);    
    const [dinPer, setDinPer] = useState(0);

    function origemPersonagem(){
        let orgp = document.getElementById("origemPer");

        switch(props.origem){

            case 1:
                orgp.src = '{Grunda}';
            break;

            case 2:
                orgp.src = '{Lavari}'
        }
    }

    function setAtributos (){

    }

    return (
        <div id='cardPer'>
            <img id='imgPer' src='' alt="personagem" />
            <div className='infosPer'>
                <div className='infosPerNome'>
                    <h2 id='nomePer'>{nome}</h2>
                    <h4 id='racaPer'>{raca}</h4>
                    <h4 id='classePer'>{classe}</h4>
                </div>
                <img id='origemPer' src={Grunda} alt="origem personagem"/>
            </div>            
            <div className='nivelPerDiv'>
                <img src="" alt="niveis" />
            </div>
            <div className='statusPer'>
                <img src="" alt="hp" />
                <img src="" alt="def" />
                <img src="" alt="mana" />
            </div>
            <div className='adicionalPer'>
                <p id='historiaPer'>dfgdfgfdg</p>
                <div className='atributosPer'>
                    <span>C</span>
                    <span>F</span>
                    <span>A</span>
                    <span>S</span>
                </div>
            </div>
        </div>
    )

}

export default Grupo