import Header from './Header.jsx';
import Grupo from './Grupo.jsx';

function App() {

  return(
    <>
      <Header/>
      <Grupo nome="Nosk" raca="Humano" classe="Guerreiro" origem={1} />
    </>
  );

}

export default App
