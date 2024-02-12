import Header from './Header.jsx';
import Grupo from './Grupo.jsx';

function App() {

  return(
    <>
      <Header/>
      <main className='mainGrupo'>
        <Grupo nome="Nosk" raca="Humano" classe="Guerreiro" origem={2} nivel={4} />
        <Grupo nome="Nosk" raca="Humano" classe="Guerreiro" origem={5} nivel={1} />
        <Grupo nome="Nosk" raca="Humano" classe="Guerreiro" origem={3} nivel={3} />
      </main>
    </>
  );

}

export default App
