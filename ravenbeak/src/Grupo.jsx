import React, { useState, useEffect } from 'react';
import Grunda from './assets/brasoesOrigem/Grunda.svg'
import Lavari from './assets/brasoesOrigem/Lavari.svg'
import Termina from './assets/brasoesOrigem/Termina.svg'
import Viento from './assets/brasoesOrigem/Vientto.svg'
import Volttan from './assets/brasoesOrigem/Volttan.svg'
import Unknown from './assets/brasoesOrigem/Unknown.svg'
import Guerreiro from './assets/Personagens/Guerreiro.svg'
import Mago from './assets/Personagens/Mago.svg'
import Arqueiro from './assets/Personagens/Arqueiro.svg'
import Paladino from './assets/Personagens/Paladino.svg'

function Grupo(props){

    const [personagem, setPersonagem] = useState([]);    
    const [imgP, setImgP] = useState(imagemPersonagem(props.imgPer));
    const [nome, setNome] = useState(props.nome);
    const [raca, setRaca] = useState(props.raca);
    const [classe, setClasse] = useState(props.classe);
    const [origem,setOrigem] = useState(origemPersonagem(props.origem));
    const [nivelPer, setNivelPer] = useState(nivelPersonagem(props.nivel));
    const [vidaPer, setVidaPer] = useState(props.vida);
    const [defesaPer, setDefesaPer] = useState(props.def);
    const [manaPer, setManaPer] = useState(props.mana);
    const [historiaPers, setHistoriaPer] = useState(props.historia);    
    const [atrConst, setAtrConst] = useState(props.c);
    const [atrForca, setAtrForca] = useState(props.f);
    const [atrAgilidade, setAtrAgilidade] = useState(props.a);
    const [atrSaber, setAtrSaber] = useState(props.s);    
    const [dinPer, setDinPer] = useState(0);

    function imagemPersonagem(i) {

        let imgp;

        switch(i){

            case 1:
                imgp = Guerreiro;
            break;

            case 2:
                imgp = Mago;
            break;

            case 3:
                imgp = Paladino;
            break;

            case 4:
                imgp = Arqueiro;

            default:
                imgp = Arqueiro;
            break;
        }

        return imgp;
    }

    function origemPersonagem(i) {

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
                orgp = Unknown;
            break;
        }

        return orgp;
    }

    function nivelPersonagem(i){

        let nivelpp = ""
        
        for (let j = 0; j < 5; j++){
            if (i > 0){
                nivelpp = nivelpp + '★'
            } else {
                nivelpp = nivelpp + '☆'
            }
            i--
        }

        return nivelpp
    }

    function setAtributos (){

    }

    return (
        <div id='cardPer'>
            <img id='imgPer' src={imgP} alt="personagem" />
            <div className='infosPer'>
                <div className='infosPerNome'>
                    <h1 id='nomePer'>{nome}</h1>
                    <h4 id='racaPer'>{raca}</h4>
                    <h4 id='classePer'>{classe}</h4>
                </div>
                <img id='origemPer' src={origem} alt="origem personagem"/>
            </div>            
            <div className='nivelPerDiv'>
                <h2> {nivelPer} </h2>
            </div>
            <div className='statusPer'>
                <span id='hp'>{vidaPer}</span>
                <span id='def'>{defesaPer}</span>
                <span id='mana'>{manaPer}</span>
            </div>
            <div className='adicionalPer'>
                <p id='historiaPer'>{historiaPers}</p>
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