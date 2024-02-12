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
        <div>
            <img src="" alt="" />
            <div>
                <h2>{nome}</h2>
                <h4>{raca}</h4>
                <h4>{classe}</h4>
            </div>
            
        </div>
    )

}

export default Grupo