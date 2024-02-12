import escudoBrasao from '.assets/escudo.svg'

function Header() {

    return (
        <>
            <header className="headerr">
                <div className="brasao">
                    <img src={escudoBrasao} alt="escudo" />
                </div>
                <div className="itens">
                    <img src="" alt="" />
                    <ul>
                        <li>PERSONAGENS</li>
                        <li>MISSÕES</li>
                        <li>MAPA</li>
                    </ul>
                </div>
            </header>
        </>
    );

}

export default Header