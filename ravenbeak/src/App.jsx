import Header from './Header.jsx';
import Grupo from './Grupo.jsx';

function App() {

  return(
    <>
      <Header/>
      <main className='mainGrupo'>
        <Grupo imgPer={1} nome="Nosk" raca="Humano" classe="Guerreiro" origem={2} nivel={4} vida={23} def={12} mana={21}
        historia=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo nibh, tincidunt rhoncus velit quis, varius venenatis mi." />
        <Grupo imgPer={2} nome="Nosk" raca="Humano" classe="Guerreiro" origem={5} nivel={1} vida={23} def={12} mana={21} />
        <Grupo imgPer={3} nome="Nosk" raca="Humano" classe="Guerreiro" origem={3} nivel={3} vida={23} def={12} mana={21} />        
        <Grupo imgPer={4} nome="Nosk" raca="Humano" classe="Guerreiro" origem={3} nivel={3} vida={23} def={12} mana={21} />
      </main>
    </>
  );

}

export default App
