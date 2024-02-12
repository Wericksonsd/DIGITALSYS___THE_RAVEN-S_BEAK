import React, { useState } from 'react';

function Grupo(){

    const [personagem, setPersonagem] = useState([]);
    const [nome, setNome] = useState("Nome");
    const [raca, setRaca] = useState("Raça");
    const [classe, setClasse] = useState("Classe");
    const [origem,setOrigem] = useState(1);
    const [nivelPer, setNivelPer] = useState(1);
    const [vidaPer, setVidaPer] = useState(1);
    const [defesaPer, setDefesaPer] = useState(0);
    const [manaPer, setManaPer] = useState(0);
    const [historiaPers, setHistoriaPer] = useState("");    
    const [atrConst, setAtrConst] = useState(0);
    const [atrForca, setAtrForca] = useState(0);
    const [atrAgilidade, setAtrAgilidade] = useState(0);
    const [atrSaber, setAtrSaber] = useState(0);    
    const [dinPer, setDinPer] = useState(0);

    return (
        <div id='cardPer'>
            <img id='imgPer' src="" alt="personagem" />
            <div className='infosPer'>
                <div className='infosPerNome'>
                    <h2 id='nomePer'>{nome}</h2>
                    <h4 id='racaPer'>{raca}</h4>
                    <h4 id='classePer'>{classe}</h4>
                </div>
                <img id='origemPer' src="" alt="origem personagem"/>
            </div>            
            <div className='nivelPerDiv'><img src="" alt="niveis" /></div>
            <div className='statusPer'>
                <img src="" alt="hp" />
                <img src="" alt="def" />
                <img src="" alt="mana" />
            </div>
            <p id='historiaPer'></p>
            <div className='atributosPer'>
                <span>C</span>
                <span>F</span>
                <span>A</span>
                <span>S</span>
            </div>
        </div>
    )

}

export default Grupo