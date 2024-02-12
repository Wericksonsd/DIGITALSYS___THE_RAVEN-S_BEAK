import React, { useState, useEffect } from 'react';
import Grunda from './assets/brasoesOrigem/Grunda.svg'
import Lavari from './assets/brasoesOrigem/Lavari.svg'
import Termina from './assets/brasoesOrigem/Termina.svg'
import Viento from './assets/brasoesOrigem/Vientto.svg'
import Volttan from './assets/brasoesOrigem/Volttan.svg'

function Grupo(props){

    const [personagem, setPersonagem] = useState([]);
    const [nome, setNome] = useState(props.nome);
    const [raca, setRaca] = useState(props.raca);
    const [classe, setClasse] = useState(props.classe);
    const [origem,setOrigem] = useState(origemPersonagem(props.origem));
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

    function origemPersonagem(i) {
        //let orgp = document.getElementById("origemPer");

        let orgp;

        switch(i){

            case 1:
                orgp = Grunda;
            break;

            case 2:
                orgp = Lavari;
            break;

            case 3:
                orgp = Termina;
            break;

            case 4:
                orgp = Viento;
            break;

            case 5:
                orgp = Volttan;
            break;

            default:
                orgp = Grunda;
            break;
        }

        return orgp;
    }

    function nivelPersonagem(i){
        
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
                <img id='origemPer' src={origem} alt="origem personagem"/>
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